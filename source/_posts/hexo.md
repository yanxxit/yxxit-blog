---
title: hexo 
tags: node-tools
---
Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

## Quick Start

### 命令行安装

```bash
$ npm install -g hexo
```

### 初始化
```
hexo init <folder>
```

### 新建一篇文章
``` bash
$ hexo new "My New Post"
```
新建一篇文章。如果没有设置 `layout` 的话，默认使用 `_config.yml`` 中的 `default_layout` 参数代替。如果标题包含空格的话，请使用引号括起来。

More info: [Writing](https://hexo.io/docs/writing.html)

### Run server
启动服务器。默认情况下，访问网址为： http://localhost:4000/
``` bash
$ hexo server
```
选项	描述
-p, --port	重设端口
-s, --static	只使用静态文件
-l, --log	启动日记记录，使用覆盖记录格式

More info: [Server](https://hexo.io/docs/server.html)

### generate 生成静态文件

``` bash
$ hexo generate
```
选项	描述
-d, --deploy	文件生成后立即部署网站
-w, --watch	监视文件变动

More info: [Generating](https://hexo.io/docs/generating.html)

### deploy 部署网站。

``` bash
$ hexo deploy
```

More info: [Deployment](https://hexo.io/docs/deployment.html)

### render 渲染文件。
```
hexo render <file1> [file2] ...
```
-o, --output	设置输出路径

### clean
清除缓存文件 (db.json) 和已生成的静态文件 (public)。
