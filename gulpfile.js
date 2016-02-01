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
    swPrecache    = require('sw-precache');

// ===================================================
// Config
// ===================================================

var folder = {
  templates: 'templates',
  dist: 'dist',
  csssource: 'styles',
  cssdist: 'dist/css',
  jssource: 'scripts',
  jsdist: 'dist/js',
  data: './data'
}

var glob = {
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
  var processors = [
    autoprefixer({browsers: ['last 2 versions']}),
    lost(),
    mqpacker({sort: true})
  ];

  var stream = gulp.src(glob.css)
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

gulp.task('register-service-worker', function() {
  stream = gulp.src(folder.jssource + '/service-worker-registration.js')
    .pipe(gulp.dest(folder.dist))
    .pipe( connect.reload() );
  return stream;
});

gulp.task('generate-service-worker', function(callback) {

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

});

gulp.task('deploy', ['build'], function() {
  return gulp.src(folder.dist + '/**/*')
    .pipe(ghPages());
});

gulp.task('build', [ 'css', 'jade', 'script', 'generate-service-worker' ]);

gulp.task('default', ['css', 'jade', 'script', 'connect', 'watch']);
