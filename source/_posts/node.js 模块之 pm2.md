---
title: node.js 模块之 pm2
tags: node-tools
---

## pm2 简介
pm2 是一个带有负载均衡功能的Node应用的进程管理器.
当你要把你的独立代码利用全部的服务器上的所有CPU，并保证进程永远都活着，0秒的重载， PM2是完美的。它非常适合IaaS结构，但不要把它用于PaaS方案（随后将开发Paas的解决方案）.
## 常用命令

## pm2 升级

```
pm2 save
npm install -g pm2
pm2 update
```
### 全局安装
```
npm install -g pm2
```

### 开启进程

```
pm2 start app.js -i 3 --name node-api # 开启3个名称为node-api的进程
pm2 start app.js -i max --name node-api # 根据有效CPU数目启动最大进程数目
pm2 monit # 监视所有进程
pm2 list # 显示所有进程状态
pm2 logs node-api # 查看进程日志 默认查看所有
pm2 stop all # 停止所有进程
pm2 restart all # 重启所有进程
pm2 reload all # 0秒停机重载进程 (用于 NETWORKED 进程)
pm2 delete all # 杀死全部进程
pm2 startup # 产生 init 脚本 保持进程活着
pm2 web # 运行健壮的 computer API endpoint (http://localhost:9615)
pm2 start app.js -x #用fork模式启动 app.js 而不是使用 cluster
pm2 start app.js -x -- -a 23 # 用fork模式启动 app.js 并且传递参数 (-a 23)
pm2 start app.json # 启动进程, 在 app.json里设置选项
```

### 支持CoffeeScript:
```
pm2 start my_app.coffee
```
## 参考

- [PM2 介绍](https://www.douban.com/note/314200231/)
- [PM2 官方文档](https://github.com/Unitech/pm2)
