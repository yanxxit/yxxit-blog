---
title: windows nginx natapp
---

## 实现目标
1. 通过nginx实现本地资源代理
2. https 学习及使用
3. 方便本地前端服务调试


## 相关环境
* windows 7 64
* nginx v 1.6
* [natapp](https://natapp.cn)
* phpStudy 
* 阿里云

## 基本操作

### 线上配置
1. 注册个人域名
2. 注册natapp
3. 域名和natapp进行绑定

### nginx 配置

常用命令

```
nginx -s stop 强制关闭 
nginx -s quit 安全关闭 
nginx -s reload 改变配置文件的时候，重启nginx工作进程，来时配置文件生效 
nginx -t  测试是否成功

.\nginx.exe -t # windows 下要添加.\
```

**http 代理配置** 
```
# 静态页面
location /html {
    alias   F:/HTML/year;
}
# 端口代理
location /demo {
    proxy_pass  http://127.0.0.1:6061;
}
# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
# php环境代理
location ~ \.php(.*)$  {
	root E:/WWW;# 这里是站点的根目录
    fastcgi_pass   127.0.0.1:9000;
    fastcgi_index  index.php;
    fastcgi_split_path_info  ^((?U).+\.php)(/?.+)$;
    fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
    fastcgi_param  PATH_INFO  $fastcgi_path_info;
    fastcgi_param  PATH_TRANSLATED  $document_root$fastcgi_path_info;
    include        fastcgi_params;
}
```


**https 代理配置** 

```
server {
    listen       443;
    server_name  localhost;

    ssl                  on;
    ssl_certificate      https/214009859140175.pem; # ssl 加密文件
    ssl_certificate_key  https/214009859140175.key; # ssl 加密文件

    ssl_session_timeout  5m;

    ssl_protocols  SSLv2 SSLv3 TLSv1;
    ssl_ciphers  HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers   on;

    location / {
        root   html;
        index  index.html index.htm;
    }

    # 静态页面
    location /html {
        alias   F:/HTML/year;
    }

    # https 功能测试
    location /https-demo {
        proxy_pass  http://127.0.0.1:6061;
    }

}

```

### phpStudy 列表
![phpStudy 配置](/view/img/phpStudy.jpg)

### Apache 服务配置

![Apache 环境配置](/view/img/Apache-edit.jpg)

### php 配置
```
php-cgi.exe -b 127.0.0.1:9000-c E:\WWW
```
不运行上面代码，无法访问php

### nssm 开机启动&后台运行
```
nssm install natapp # 安装服务
nssm edit natapp # 编辑服务器名
nssm restart natapp # 重启natapp服务
nssm remove natapp # 删除XX服务
```

![nssm 开机启动&后台运行](/view/img/nssm-edit.jpg)
![自定义服务](/view/img/background-list.jpg)

### 注意事项

1. window 执行exe
```
.\n
```

2. https 加密文件
> 这两块必须要有的，可以到阿里云去申请。
```
ssl_certificate      https/214009859140175.pem; # ssl 加密文件
ssl_certificate_key  https/214009859140175.key; # ssl 加密文件
```

3. [阿里云](https://www.aliyun.com)【管理控制台】下【证书服务】

## 参考
- [natapp](https://natapp.cn)
- [支持https泛域名以及本地(443端口)证书,支持http/2协议](https://natapp.cn/article/https)
- [Natapp(Ngrok) Windows下注册为服务,开机启动&后台运行](https://natapp.cn/article/windows_service)

- [nssm 用法](http://nssm.cc/usage)