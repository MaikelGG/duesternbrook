var stream, fileName;

var gulp          = require('gulp'),
    connect       = require('gulp-connect'),
    concat        = require('gulp-concat'),
    postcss       = require('gulp-postcss'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('autoprefixer'),
    mqpacker      = require('css-mqpacker'),
    lost          = require('lost'),
    rucksack      = require('rucksack-css'),
    pug           = require('gulp-pug'),
    notify        = require('gulp-notify'),
    plumber       = require('gulp-plumber'),
    debounce      = require('gulp-debounce'),
    cssnano       = require('gulp-cssnano');

// ===================================================
// Config
// ===================================================

var options = {
  templates: 'templates',
  dist: 'dist',
  csssource: 'styles',
  cssdist: 'dist/css',
  jssource: 'scripts/src',
  jsdist: 'dist/js',
  images: 'images',
  data: './data'
};

options.source = {
  templates: options.templates + '/**/*.pug',
  images: options.images + '/**/*',
  css: options.csssource + '/**/*.scss',
  js: options.jssource + '/**/*.js',
  data: options.data + '/**/*.json'
};

var onError = function(err) {
  notify.onError({
    title:    "Gulp error in " + err.plugin,
    message:  "<%= error.message %>",
    sound: "Beep"
  })(err);
  this.emit('end');
};


var processors = [
    autoprefixer({browsers: ['last 2 versions']}),
    lost(),
    mqpacker({sort: true})
];

// ===================================================
// Set up a server
// ===================================================
gulp.task('connect', function() {
  connect.server({
    root: [options.dist],
    livereload: true,
    port: 5000
  });
});

// run this task by typing in gulp css in CLI
gulp.task('css', function(){
  gulp.src(options.source.css)
     .pipe(plumber({
       errorHandler: onError
     }))
    .pipe(debounce({ wait: 1000 }))
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(cssnano())
    .pipe( gulp.dest(options.cssdist) )
    .pipe(connect.reload());
});

// run this task by typing in gulp jade in CLI
gulp.task('pug', function() {

  return gulp.src(options.source.templates)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(debounce({ wait: 1000 }))
    .pipe(pug({
      pretty: true
    })) // pip to jade plugin
    .pipe(gulp.dest(options.dist)) // tell gulp our output folder
    .pipe(connect.reload());
});

// ===================================================
// Concat JS
// ===================================================

// get JS and make available for dist in one file
gulp.task('script', function() {
  stream = gulp.src(options.source.js)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(debounce({ wait: 1000 }))
    .pipe(concat('theme.js'))
    .pipe(gulp.dest(options.jsdist))
    .pipe( connect.reload() );
  return stream;
});

gulp.task('images', function() {
  stream = gulp.src(options.source.images)
    .pipe(gulp.dest(options.dist +'/images'))
    .pipe( connect.reload() );
  return stream;
});

gulp.task('watch', function() {

  gulp.watch([
    options.source.css
  ], ['css']);

  gulp.watch([
    options.source.templates
  ], ['pug']);

  gulp.watch([
    options.source.js
  ], ['script']);

  gulp.watch([
    options.source.images
  ], ['images']);

});

gulp.task('build', [ 'css', 'pug', 'script']);

gulp.task('default', ['css', 'pug', 'script', 'images', 'connect', 'watch']);
