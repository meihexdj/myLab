# 浙江理工大学企业智能实验室web系统

基于nodeclub的web系统。系统尚未使用

## 介绍

Node Club 是用 **Node.js** 和 **MongoDB** 开发的新型社区软件，界面优雅，功能丰富，小巧迅速，
已在Node.js 中文技术社区 [CNode](http://cnodejs.org) 得到应用，但你完全可以用它搭建自己的社区。

本系统主要使用它的话题讨论模块，添加了tags功能。并且把bootstrap升级到了3.X进行了页面重构。
因为是内部使用，也取消了注册邮件发送激活功能。

## 安装部署

```bash
// install node npm mongodb
// run mongod
$ npm install
// modify the config file as yours
$ node app.js
```

## 关于pull request


从现在开始，所有提交都要严格遵循[代码规范](https://github.com/dead-horse/node-style-guide)。
