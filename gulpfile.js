var stream, fileName;

var gulp          = require('gulp'),
    gutil         = require('gulp-util'),
    connect       = require('gulp-connect'),
    concat        = require('gulp-concat'),
    ghPages       = require('gulp-gh-pages')
    postcss       = require('gulp-postcss'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    autoprefixer  = require('autoprefixer'),
    mqpacker      = require('css-mqpacker'),
    precss        = require('precss'),
    lost          = require('lost'),
    rucksack      = require('gulp-rucksack'),
    jade          = require('gulp-jade'),
    data          = require('gulp-data'),
    path          = require('path'),
    fs            = require('fs'),
    notify        = require('gulp-notify'),
    plumber       = require('gulp-plumber'),
    swPrecache    = require('sw-precache');

// ===================================================
// Config
// ===================================================

var folder = {
  templates: 'templates',
  dist: 'dist',
  csssource: 'styles',
  cssdist: 'dist/css',
  jssource: 'scripts/src',
  jsdist: 'dist/js',
  images: 'images',
  data: './data'
}

var glob = {
  templates: folder.templates + '/**/*.jade',
  images: folder.images + '/**/*',
  css: folder.csssource + '/**/*.scss',
  js: folder.jssource + '/**/*.js',
  data: folder.data + '/**/*.json'
};

var onError = function(err) {
  notify.onError({
    title:    "Gulp error in " + err.plugin,
    message:  "<%= error.message %>",
    sound: "Beep"
  })(err);
  this.emit('end');
};

// ===================================================
// Set up a server
// ===================================================
gulp.task('connect', function() {
  connect.server({
    root: [folder.dist],
    livereload: true,
    port: 5000
  });
});

// run this task by typing in gulp css in CLI
gulp.task('css', function () {
  var processors = [
    autoprefixer({browsers: ['last 2 versions']}),
    lost(),
    mqpacker({sort: true})
  ];

  var stream = gulp.src(glob.css)
    .pipe(plumber({
      errorHandler: onError
    }))
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

  return gulp.src(glob.templates)
    .pipe(plumber({
      errorHandler: onError
    }))
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
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(concat('theme.js'))
    .pipe(gulp.dest(folder.jsdist))
    .pipe( connect.reload() );
  return stream;
});

gulp.task('images', function() {
  stream = gulp.src(glob.images)
    .pipe(gulp.dest(folder.dist +'/images'))
    .pipe( connect.reload() );
  return stream;
});

gulp.task('register-service-worker', function() {
  stream = gulp.src('scripts/service-worker-registration.js')
    .pipe(gulp.dest(folder.dist))
    .pipe( connect.reload() );
  return stream;
});

gulp.task('worker-dev', function(callback) {

  swPrecache.write(path.join(folder.dist, 'service-worker.js'), {
    staticFileGlobs: [folder.dist + '/**/*.{gif}'],
    stripPrefix: folder.dist,
  }, callback);
});

gulp.task('worker-prod', function(callback) {

  swPrecache.write(path.join(folder.dist, 'service-worker.js'), {
    staticFileGlobs: [folder.dist + '/**/*.{js,html,css,png,jpg,gif,woff,svg,ttf}'],
    stripPrefix: folder.dist,
    replacePrefix: '/duesternbrook'
  }, callback);
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

  gulp.watch([
    glob.images
  ], ['images']);

});

gulp.task('deploy', ['build'], function() {
  return gulp.src(folder.dist + '/**/*')
    .pipe(ghPages());
});

gulp.task('build', [ 'css', 'jade', 'script', 'worker-prod' ]);

gulp.task('default', ['css', 'jade', 'script', 'images', 'connect', 'watch']);
