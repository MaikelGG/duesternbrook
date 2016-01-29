var folder, glob, gulp, gutil, jade, data, connect, fm, fs, sass, postcss, sourcemaps, stream, concat, fileName;

gulp        = require('gulp');
gutil       = require('gulp-util');
connect     = require('gulp-connect');
concat      = require('gulp-concat');

// ===================================================
// Config
// ===================================================

folder = {
  templates: 'templates',
  dist: 'dist',
  csssource: 'styles',
  cssdist: 'dist/css',
  jssource: 'scripts',
  jsdist: 'dist/js',
  data: './data'
}

glob = {
  templates: folder.templates + '/**/*.jade',
  css: folder.csssource + '/**/*.scss',
  js: folder.jssource + '/**/*.js',
  data: folder.data + '/**/*.json'
};


// ===================================================
// Set up a server
// ===================================================
gulp.task('connect', function() {
  connect.server({
    root: [folder.dist],
    livereload: true,
    port: 5002
  });
});

// run this task by typing in gulp css in CLI
gulp.task('css', function () {

  postcss       = require('gulp-postcss');
  sass          = require('gulp-sass');
  sourcemaps    = require('gulp-sourcemaps');
  autoprefixer  = require('autoprefixer');
  mqpacker      = require('css-mqpacker');
  precss        = require('precss');
  lost          = require('lost');
  rucksack      = require('gulp-rucksack');

  var processors = [
    autoprefixer({browsers: ['last 2 versions']}),
    lost(),
    mqpacker({sort: true})
  ];

  stream = gulp.src(glob.css)
    .pipe( sass() )
    .pipe( sourcemaps.init() )
    .pipe( postcss(processors) )
    .pipe( rucksack() )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest(folder.cssdist) )
    .pipe( connect.reload() );
  return stream;
});

// run this task by typing in gulp jade in CLI
gulp.task('jade', function() {
  jade = require('gulp-jade');
  data = require('gulp-data');
  path = require('path');
  fs   = require('fs');

  return gulp.src(glob.templates)
    .pipe(data(function(file) {
      return JSON.parse(fs.readFileSync('./locales/en-US/translation.json'));
    }))
    .pipe(jade({
      pretty: true
    })) // pip to jade plugin
    .pipe(gulp.dest(folder.dist)) // tell gulp our output folder
    .pipe(connect.reload());
});

// ===================================================
// Concat JS
// ===================================================

// get JS and make available for dist in one file
gulp.task('script', function() {
  stream = gulp.src(glob.js)
    .pipe(concat('theme.js'))
    .pipe(gulp.dest(folder.jsdist))
    .pipe( connect.reload() );
  return stream;
});

gulp.task('watch', function() {

  gulp.watch([
    glob.css
  ], ['css']);

  gulp.watch([
    glob.templates
  ], ['jade']);

  gulp.watch([
    glob.js
  ], ['script']);

});

gulp.task('default', ['connect', 'watch']);
