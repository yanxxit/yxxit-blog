---
title: hexo部署项目
date: 2017-01-19 19:57:39
---

## 命令行安装
```
npm install -g hexo-cli
```

## 初始化
```
hexo init <folder>
```

## new 新建一篇文章
```
hexo new [layout] <title>
```
新建一篇文章。如果没有设置 `layout` 的话，默认使用 `_config.yml` 中的 `default_layout` 参数代替。如果标题包含空格的话，请使用引号括起来。

## generate 生成静态文件
```
hexo generate
```
-d, --deploy	文件生成后立即部署网站
-w, --watch	监视文件变动

## publish 发表草稿。
```
hexo publish [layout] <filename>
```

## server
* 启动服务器。默认情况下，访问网址为： http://localhost:4000/。
```
hexo server
```
-p, --port	重设端口
-s, --static	只使用静态文件
-l, --log	启动日记记录，使用覆盖记录格式

## deploy 部署网站。
```
hexo deploy
```
-g, --generate	部署之前预先生成静态文件

## render 渲染文件。
```
hexo render <file1> [file2] ...
```
-o, --output	设置输出路径

## clean
清除缓存文件 (db.json) 和已生成的静态文件 (public)。

## 部署成功结果
- [http://blog.yxxit.com/](http://blog.yxxit.com/)

## 部署错误
```
> /usr/local/bin/jekyll build --safe
Configuration file: /data/_config.yml
jekyll 3.3.0 | Error:  The landscape theme could not be found.
```

在根目录下建一个.nojekyll空文件就可以了，因为Coding默认支持Jekyll搭建网站

## 参考
- [hexo.io 官网](https://hexo.io/zh-cn/docs/themes.html)
- [在 Coding 上搭建 Hexo 个人博客！](https://segmentfault.com/a/1190000002900848?utm_source=tuicool)
- [hexo 部署至Git遇到的坑](http://www.jianshu.com/p/67c57c70f275)
- [hexo常见问题解决方案](http://wp.huangshiyang.com/hexo%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88)
- [hexo博客搭建时遇到的一些问题](https://segmentfault.com/a/1190000003710962?_ea=336354)
- [玩转git之webhook应用初探](http://ued.ctrip.com/blog/play-with-git-webhook-application.html)
- [Hexo常见问题解决方案](https://xuanwo.org/2014/08/14/hexo-usual-problem/)