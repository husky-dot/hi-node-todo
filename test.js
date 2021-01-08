const program = require('commander');

program
  .command('build')
  .description('build web site for deployment')
  .action(() => {
    console.log('build');
  });

program
  .command('deploy')
  .description('deploy web site to production')
  .action(() => {
    console.log('deploy');
  });

program.parse(process.argv);