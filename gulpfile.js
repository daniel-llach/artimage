var gulp = require('gulp');
var responsive = require('gulp-responsive');

gulp.task('default', function () {
  return gulp.src('images/*.jpg')
    .pipe(responsive([{
      name: '*.jpg',
      width: 200,
      height: 200,
      rename: function(path){
        path.basename += '@1x.jpg';
        return path;
      }

    },
    {
      name: '*.jpg',
      width: 200 * 2,
      height: 200 * 2,
      rename: function(path){
        path.basename += '@2x.jpg';
        return path;
      }
    },
    {
      name: '*.jpg',
      width: 200 * 8,
      height: 200 * 8,
      rename: function(path){
        path.basename += '@8x.jpg';
        return path;
      },
      withoutEnlargement: true,
      quality: 50
    }]))
    .pipe(gulp.dest('dist'));
});
