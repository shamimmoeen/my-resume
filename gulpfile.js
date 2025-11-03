const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const cleanCss = require("gulp-clean-css");
const rename = require("gulp-rename");

const src = {
  scss: "assets/scss/**/*.scss",
  css: "assets/css",
  js: "assets/js/*.js",
  html: "*.html",
};

// Static Server + watching scss/html/js files
function serve() {
  browserSync.init({
    server: "./",
    open: false,
  });

  gulp.watch(src.scss, sassTask);
  gulp.watch(src.js).on("change", browserSync.reload); // Watch JavaScript changes
  gulp.watch(src.html).on("change", browserSync.reload);
}

// Compile sass into CSS with sourcemaps
function sassTask() {
  return gulp
    .src(src.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(src.css))
    .pipe(browserSync.stream());
}

// Optimize CSS for production
function buildCss() {
  return gulp
    .src(src.css + "/*.css")
    .pipe(cleanCss())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(src.css));
}

// Build task for production
gulp.task("build", gulp.series(sassTask, buildCss));

// Define default task
gulp.task("default", gulp.series(sassTask, serve));
