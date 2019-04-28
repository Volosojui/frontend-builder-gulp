import gulp from 'gulp';

import clean from './gulp/tasks/clean';
import scripts from './gulp/tasks/scripts';
import iconfont from './gulp/tasks/iconfont';
import copy from './gulp/tasks/copy';
import assets from './gulp/tasks/assets';
import svgs from './gulp/tasks/svgs';
import styles from './gulp/tasks/styles';
import html from './gulp/tasks/html';

import server from './gulp/tasks/server';
import watch from './gulp/tasks/watch';
import ghPages from './gulp/tasks/ghPages';

const tasks = (cb) => {
  gulp.series(
    gulp.parallel(
      scripts,
      iconfont,
      copy,
      assets,
      svgs
    ),
    styles,
    html
  )(cb)
}

gulp.task('build', gulp.series(clean, tasks));

gulp.task('deploy', gulp.series('build', ghPages));

gulp.task('server', gulp.series('build', server.serve, watch));
gulp.task('default', gulp.series('server'));