#!/usr/bin/env node

const { Command } = require('commander');
const api = require('./index.js')


const program = new Command();
const pkg = require('./package.json')

program
  .version(pkg.version)
  .option('-c, --cheese <type>', 'Add the specified type of cheese', 'blue');

program
.command('add')
.description('add a task')
.action((...args) => {
  const task = args[1].join()
  api.add(task).then(re => {
    console.log('添加成功!')
  }, () => {
    console.log('添加失败!')
  })
});

program
.command('clear')
.description('clear all tasks')
.action((...args) => {
  api.clear().then(res => {
    console.log('清除完毕!')
  }, () => {
    console.log('清除失败!')
  })
});

program
.command('list')
.description('show all todo list')
.action((...args) => {
  api.showAll().then(res => {
    // console.log('显示任务完毕!')
  }, () => {
    console.log('显示任务失败!')
  })
});


program.parse(process.argv);

