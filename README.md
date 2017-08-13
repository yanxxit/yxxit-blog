# yxxit-blog
个人博客



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
新建一篇文章。如果没有设置 `layout` 的话，默认使用 `_config.yml`` 中的 `default_layout` 参数代替。如果标题包含空格的话，请使用引号括起来。


## generate 生成静态文件
```
hexo generate
```
选项	描述
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

选项	描述
-p, --port	重设端口
-s, --static	只使用静态文件
-l, --log	启动日记记录，使用覆盖记录格式

## deploy 部署网站。
```
hexo deploy
```
参数	描述
-g, --generate	部署之前预先生成静态文件

## render 渲染文件。
```
hexo render <file1> [file2] ...
```
-o, --output	设置输出路径

## clean
清除缓存文件 (db.json) 和已生成的静态文件 (public)。