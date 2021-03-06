#! /usr/bin/env node

const Alphabet = require('alphabetjs');//引入装逼利器
const Chalk = require('chalk');//引入变化颜色的
const program = require('commander')//引入插件，命令编写

//本地文件的引入
const initAction = require('../utils')

//声明的常量
const logo = Alphabet('vvmily','stereo');//创建装逼利器，大字母展示~~~
const version = require('../package.json').version;//获取版本号

console.log(Chalk.yellow('欢迎使用,vvmily-cli脚手架'));
console.log(Chalk.green(logo));

program
  .version(version)
  .command('init','初始化模块')
  .option('-I, --init [name]', '初始化模块')
  .action(initAction)
  .parse(process.argv)