---
layout: post
title: deepin
date: 2018-04-27 15:55:49
tags: linux
---

# deepin 深度系统
一个全新的简单、易用、美观的 Linux 操作系统。

* 国产桌面系统，对中国用户做了很多优化
* 使用的时候，可以不折腾，能够快速的上手。
* 首先因为基于 Debian，软件源和 ppa 不是太偏门的基本都有。
* 和 CrossOver 合作，所以 QQ 的体验也不错。不太懂 Linux 的同学终于不用苦于给 Wine 打补丁/升级之类的操作了。一些小小的软件通过 CrossOver 也能在 Deepin 上跑跑（看运气）。然而我是作为一个程序员的角度看的，Deepin 真的已经很易用了。
* Deepin 的历史可以追溯到 2004年，其前身 Hiweed Linux 是中国第一个基于 Debian的本地化衍生版，并提供轻量级的可用LiveCD，旨在创造
## 系统安装
1. 需要一个优盘
2. 下载最新镜像deepin-15.5-amd64.iso
3. 启动优盘，设置U盘启动
4. 安装部署系统，完成之后，去掉优盘
5. 重启进入系统
## 软件安装
### 安装方式
* 可以通过 apt-get install 命令，安装各种 linux 上的软件
* 可以通过官方自带的 **深度商店** 安装常见的软件
* 获取源码编译安装
* 支持deb安装包安装 code_1.20.0-1518023506_amd64.deb
* 可以通过 CrossOver 安装 windows 软件
* wget -qO- https://get.docker.com/ | sh 下载安装方式

### 安装问题
1. apt-get install 安装时，需要阅读内容，删除也是要注意的
2. 删除或安装时，有时候会删除一些**其他有用的模块**

#### 深度软件中心
深度软件中心（Software Center）是Linux平台通用的软件管理中心，安装软件。

#### CrossOver 安装 windows 软件
home目录隐藏的.cxoffice目录下，在你安装的容器名里
目录位置/home/mohoo/.cxoffice

#### wine 安装程序目录
百度云盘：
/home/mohoo/.deepinwine/Deepin-BaiduNetDisk/dosdevices/c:/BaiduNetdiskDownload

#### deb 安装包
Debian包是Unixar的标准归档，将包文件信息以及包内容，经过gzip和tar打包而成。
处理这些包的经典程序是dpkg，经常是通过Debian的apt-get来运作。
通过**Alien**工具，可以将deb包转换成rpm、tar.gz格式。
deb包在Linux操作系统中类似于windows中的软件包（exe)，几乎不需要什么复杂的编译即可通过鼠标点击安装使用。此外,deb广泛应用于越狱后iOS软件及MeeGo（含Maemo软件）中。

deb 格式是 Debian 系统(包含 Debian 和 Ubuntu )专属安装包格式，配合 APT 软件管理系统，成为了当前在 Linux 下非常流行的一种安装包。进入 2.x 时代之后有 Cydia 作者 Jay Freeman（saurik） 移植到 iPhone 平台上，一起的还有 APT 软件管理系统。

deepin 源于 Debian   
dpkg 是Debian Package的简写，是为Debian 专门开发的套件管理系统，方便软件的安装、更新及移除。
所有源自Debian的Linux发行版都使用dpkg，例如Ubuntu、Knoppix 等。
#### dep 平台
* Debian
* Ubuntu
* Deepin
* Knoppix
* 越狱后iOS软件及MeeGo:苹果iPhone应用格式   

- [百度经验](https://baike.baidu.com/item/deb/7025498?fr=aladdin#1)
### 开发环境
* golang
* docker 
* mysql
* mongodb
* redis
* php
* nginx
* python
* java

### 服务软件
* ssh 自带
* htop
* curl 访问网站 请求接口
* xterm
* Oh-my-zsh
* Tmux
* Metasploit Metasploit是一款开源的安全漏洞检测工具
* nautilus 命令行打开文件
* git
* zsh 命令行插件
* sysv-rc-conf
* [janus是⼀个⾮常好⽤的vim集成开发环境](https://www.cnblogs.com/ishell/p/4546169.html)
* autojump 终端下多⽬录跳转神器
* cheat python 命令行函数提示工具
* apache2-utils ab压力测试
* xdg-open 命令行快速打开各类型文件
* imagemagick  apt-get install imagemagick    
* pandoc 文档转换工具

### 软件工具
* **gedit** 编辑器 自带 gedit ./nginx.conf
* gvim 安装后  gvim ./nginx.conf
* sublime text 3
* vscode
* qq
* 微信
* foxmail
* 钉钉
* 百度网盘
* Shadowsocks-Qt5
* XMind
* FileZilla
* 有道云笔记网页版
* Virtual Box
* Synapse 快速搜索 工具  ctrl + space
* MongoDB Compass 不错，很强大
* Typora MD编写阅读能力非常棒,支持table 直接黏贴
* Zeal API 文档
* Remmina 远程桌面

* https://www.gitkraken.com/download/linux-deb
* http://blog.csdn.net/FungLeo/article/details/78439337
## 系统更新
1. 在设置更新选项时进行更新
2. 命令行方式更新
```
sudo apt-get update && sudo apt-get dist-upgrade -y
```
https://www.cnblogs.com/gglin/p/7016454.html

## 快捷键
```sh
# 截图
Ctrl + Alt + A
# 终端
Ctrl + Alt + T
# 雷神模式
Alt + F2
# 工作区
Win + -> | <-
Win + Shift + -> | <-
```

## Remmina 远程桌面

### 链接windows
1. 设置rdp协议
2. 设置远程ip地址
3. 设置全屏 + 设置设置鼠标
http://blog.csdn.net/skykingf/article/details/71539237

## xdg-open 命令行快速打开各类型文件
在Ubuntu下，当需要打开其他格式文件时，咱们通常做法是进入到文件所在的目录，双击打开，很影响效率。事实上，可以通过命令xdg-open打开这些格式文件，甚至是网页，像打开文件一样简单

xdg-open { file | URL } 
xdg-open { --help | --manual | --version } 

xdg-open la_isla_bonita.mp3 
xdg-open http://baidu.com 
已在现有的浏览器会话中创建新的窗口。 

## apache2-utils
sudo apt-get install -y apache2-utils
-n 1000 表示总请求数位1000
-c 表示并发用户数为10
```sh
ab -n 1000 -c 100 http://127.0.0.1:8080/api/get
ab -n 1000 -c 100 http://127.0.0.1:8888/api
# 将内容转换为html
ab -n 10000 -c 1000 -t 1 -w http://127.0.0.1:8888/api >> 1.html
```
- [apache ab测试命令详解](https://www.cnblogs.com/dragonflyer/p/6137514.html)
## pandoc 文件格式转换神器
Pandoc生成epub、html与在线电子书

```sh
pandoc --version
pandoc --help
# 转html格式
pandoc 01-chapter2.markdown -o chapter2.html -c Github.css
# 转word格式
pandoc 01-chapter2.markdown -o chapter2.docx -c Github.css
# 转pdf格式
pandoc  01-chapter2.markdown -o 01-chapter2.pdf --latex-engine=xelatex -V mainfont=heiti\ 
```
https://github.com/jgm/pandoc
https://github.com/jgm/pandoc/releases/tag/2.1.1

### github 下载
对于 Linux以及 macOS，则修改 /etc/hosts 
```
219.76.4.4 s3.amazonaws.com
219.76.4.4 github-cloud.s3.amazonaws.com
```
## Cheat ： 一个实用 Linux 命令示例集合
### 简介
cheat 允许你在命令行中创建和查看交互式的速查表cheatsheet。它旨在帮助提醒 *nix 系统管理员他们经常使用但还没频繁到会记住的命令的选项。
cheat 是使用 python 开发的，所以可以用 pip 来在你的系统上安装 cheat。
pip 是一个与 setuptools 捆绑在一起的 Python 模块，它是在 Linux 中安装 Python 包推荐的工具之一。

对于 Debian/Ubuntu 用户，请使用 apt-get 命令或apt 命令来安装 pip。
### 如何使用 Cheat
```sh
pip install docopt pygments
# 命令来查看速查表
cheat tar
# 运行下面的命令查看可用的速查表。
$ cheat -l
# 进入帮助页面获取更多详细信息。
$ cheat -h
```
- [Cheat ： 一个实用 Linux 命令示例集合](https://linux.cn/article-9193-1.html)

- [Cheat](https://linux.cn/article-3760-1.html)—— 给Linux初学者和管理员一个终极命令行"备忘单"
## autojump
一个可以在 Linux 文件系统快速导航的高级 cd 命令
```sh
# 安装
sudo apt-get install autojump
# 配置 为了使得 autojump 在 BASH shell 中永久有效，你需要运行下面的命令。
echo '. /usr/share/autojump/autojump.sh' >> ~/.bashrc
# 使用
$ j -v
$ autojump -v
# 跳到先前到过的目录 ‘/var/www‘ j ww 才能到什么目录
```
参考：
https://linux.cn/article-5983-1.html

## 超棒的离线文档阅读器：Zeal
一开始 Zeal 是不带 API 文档的, 需要你自己按需下载. 
Zeal 可以定义全局快捷键, 另外还有大量的插件可以配合大多数编辑器以及 IDE 使用, 我用的是 Visual Studio Code, 搜索安装 Dash, 在编辑器内就可以直接打开 Zeal 查看 API . 默认快捷键是 Ctrl + H, 跟编辑器默认的替换快捷键有冲突, 自己可以修改.
下载：直接在应用商店下载
使用：`Tools > Docsets > Available`

参考：
https://zealdocs.org/usage.html
http://blog.csdn.net/xlinsist/article/details/51014532
https://zealdocs.org/

## sysv-rc-conf
sysv-rc-conf是一个强大的服务管理程序，群众的意见是sysv-rc-conf比chkconfig、rcconf好用。

```sh
# 安装：
sudo apt-get install sysv-rc-conf
# 运行
sudo sysv-rc-conf
```
http://blog.csdn.net/gatieme/article/details/45251389

## zsh
```sh
sudo apt-get install zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# 设置输入命令，按tab键
# 安装时，有可能导致，git 等失效！
```
[为什么说 zsh 是 shell 中的极品？](https://www.zhihu.com/question/21418449)

https://www.zhihu.com/question/21418449 
## MongoDB Compass
```
wget https://downloads.mongodb.com/compass/mongodb-compass_1.6.0_amd64.deb;    
sudo dpkg -i mongodb-compass_1.6.0_amd64.deb
```
## phpStudy for Linux 不建议安装，会导致deepin的其他逐渐被删掉

## node.js
Ubuntu下安装使用nvm
/home/mohoo/.bashrc
#### 安装
```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```
#### 使用

安装成功后,**需要关闭xshell**，重新启动。nvm才会生效。

查看nvm是否安装成功

```sh
# 查看nvm是否安装成功
root@linuxidc:~# command -v nvm
nvm
# 查看Java命令
command -v java
/usr/bin/java
# nvm 安装node.js 
nvm install v9.3.0
# node.js 版本存放位置
/home/mohoo/.nvm/versions
```
### npm install 安装模块
* npm install -g yarn pm2 http-server eslint
* npm install -g gitbook gitbook-cli
* npm install -g webpack gulp parcel-bundler
* npm install -g nodeppt
* npm install -g hexo hexo-cli
* npm install -g phantomjs browsersync

## golang

### 安装及配置
下载压缩包 go1.9.2.linux-amd64.tar.gz
```
wget https://www.golangtc.com/static/go/1.9.2/go1.9.2.linux-amd64.tar.gz
```
解压该文件，由于默认的go路径，在/usr/local下， 所以用如下命令，解压创建/usr/local/go
```sh
tar -C /usr/local -xzf go1.9.2.linux-amd64.tar.gz
```
配置环境变量，`sudo vim /etc/profile`下，添加对应的goroot和gopath的配置环境
```sh
## 环境目录
export GOROOT=/usr/local/go
## 工作目录
export GOPATH=/home/mohoo/data/godev  
export PATH=$PATH:$GOROOT/bin  
```
之后，`source /etc/profile` 使得其配置文件有效.

检查go的版本，`$ go version `
### 编辑文件
/home/mohoo/data/godev/src/helloword.go 
```go
package main
import "fmt" 
func main() { 
    fmt.Printf("Hello, world.\n") 
}
```
### 运行代码
1. go run helloworld.go 直接可以看到结果
2. go bulid helloworld.go，生成了helloworld的文件, ./helloworld 直接执行，输出了 Hello world

### 参考：
[linux下安装go](https://www.cnblogs.com/unqiang/p/6594451.html)
[Linux上go的安装配置以及简单使用](http://blog.csdn.net/u011054678/article/details/72877465)

## vscode
在linux系统中安装VSCode(Visual Studio Code)

### 方法一、从deepin 官网下载

### 方法二、从软件中心，输入`Visual Studio Code`，下载安装

### 方法三、下载源码，安装一下

1. 从官网下载压缩包(话说下载下来解压就直接可以运行了咧,都不需要make)
  访问Visual Studio Code官网 https://code.visualstudio.com/docs?dv=linux64 即可下载最新版本

2. 解压 ,如果文件名不对,可能解压不出来的(扩展名:tar.gz)
```ｓｈ
tar jxcv code-stable-code_1.7.2-1479766213_amd64.tar.gz
```
3. 然后移动到 /usr/local/ 目录
```sh
mv VSCode-linux-x64 /usr/local/
```
4. 可能还需要给可执行的权限, 然后就已经可以运行了
```sh
chmod +x /usr/local/VSCode-linux-x64/code
```
5. 复制一个VScode图标文件到 /usr/share/icons/ 目录(后面会有用)
```sh
cp /usr/local/VSCode-linux-x64/resources/app/resources/linux/code.png /usr/share/icons/
```
6. 创建启动器, 在/usr/share/applications/ 目录, 也可以将它复制到桌面目录直接在中断使用命令: 
```sh
vim /usr/share/applications/VSCode.desktop
```
然后输入以下文本:

```
[Desktop Entry]
Name=Visual Studio Code
Comment=Multi-platform code editor for Linux
Exec=/usr/local/VSCode-linux-x64/code
Icon=/usr/share/icons/code.png
Type=Application
StartupNotify=true
Categories=TextEditor;Development;Utility;
MimeType=text/plain;
```
保存后退出, 然后可以复制到桌面:
```
cp /usr/share/applications/VSCode.desktop ~/桌面/
```
之后 就会发现 桌面和 应用程序菜单都有了 VSCode的快捷方式了

参考：
- [在linux系统中安装VSCode(Visual Studio Code)](https://www.cnblogs.com/lzpong/p/6145511.html)

## docker
1、卸载老版本，较老版本的Docker被称为docker或docker-engine。如果这些已安装，请卸载它们以及关联的依赖关系。

```sh
sudo apt-get remove docker \
                  docker-common \
                  docker-selinux \
                  docker-engine
```
### 安装docker
安装源切换为：网易云
```sh
# 建议使用方式，直接最新版本
wget -qO- https://get.docker.com/ | sh
sudo usermod -aG docker mohoo
# apt-get install -y docker-engine
```

### 启动docker

问题：
Cannot connect to the Docker daemon. Is the docker daemon running on this host?
原因：权限不够，使用sudo docker ps 就可以了
参考：

http://www.jb51.net/article/94801.htm
https://www.cnblogs.com/lxjshuju/p/7183689.html

## mysql
```sh
# mysql 安装
sudo apt-get install -y mysql-server

mysql -V

# 启动mysql命令(其它关闭，重启等功能只需将start换成相应的stop,restart等字母即可)：
sudo service mysql start 

mysql -u用户名 -p密码
# 设置 root的密码
mysql -uroot -p
root root
```
http://www.jb51.net/article/84399.htm

## mongodb

MongoDB 是一个基于分布式文件存储的数据库。由C++语言编写。旨在为WEB应用提供可扩展的高性能数据存储解决方案。

MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。他支持的数据结构非常松散，是类似json的bson格式，因此可以存储比较复杂的数据类型。Mongo最大的特点是他支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。

它的特点是高性能、易部署、易使用，存储数据非常方便。主要功能特性有：
* 面向集合存储，易存储对象类型的数据。
* 模式自由。
* 支持动态查询。
* 支持完全索引，包含内部对象。
* 支持查询。
* 支持复制和故障恢复。
* 使用高效的二进制数据存储，包括大型对象（如视频等）。
* 自动处理碎片，以支持云计算层次的扩展性。
* 支持RUBY，PYTHON，JAVA，C++，PHP，C#等多种语言。
* 文件存储格式为BSON（一种JSON的扩展）。
* 可通过网络访问。

###　下载完安装包，并解压 tgz（以下演示的是 64 位 Linux上的安装） 。
```
curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.6.tgz    # 下载
tar -zxvf mongodb-linux-x86_64-3.0.6.tgz                                   # 解压

mv  mongodb-linux-x86_64-3.0.6/ /usr/local/mongodb                         # 将解压包拷贝到指定目录
```
###　MongoDB 的可执行文件位于 bin 目录下，所以可以将其添加到 PATH 路径中：
```
export PATH=/usr/local/mongodb/bin:$PATH
```
###　创建数据库目录
MongoDB的数据存储在data目录的db目录下，但是这个目录在安装过程不会自动创建，所以你需要手动创建data目录，并在data目录中创建db目录。
以下实例中我们将data目录创建于根目录下(/)。
注意：/data/db 是 MongoDB 默认的启动的数据库路径(--dbpath)。
```
mkdir -p /data/db
```
###　命令行中运行 MongoDB 服务
你可以再命令行中执行mongo安装目录中的bin目录执行mongod命令来启动mongdb服务。
注意：如果你的数据库目录不是/data/db，可以通过 --dbpath 来指定。

```
/usr/local/mongodb/bin/
/usr/local/mongodb/bin/mongod --dbpath /home/mohoo/data/mongodb
```
### 自启动配置                                                               
sudo vim /etc/rc.local

## redis
### 安装 Redis
```
$sudo apt-get update
$sudo apt-get install redis-server
```
### 启动 Redis
$ redis-server
### 查看 redis 是否启动？
$ redis-cli
以上命令将打开以下终端：
redis 127.0.0.1:6379>

## php
nginx 本地配置不太清楚怎么配置

docker pull registry.docker-cn.com/library/ubuntu:16.04

解决方案：使用docker
http://www.51testing.com/html/87/15091687-3649846.html
http://www.runoob.com/docker/docker-install-php.html

## python
###　下载
```sh
wget https://www.python.org/ftp/python/3.6.4/Python-3.6.4.tar.xz
```
### 安装及配置
1. 打开WEB浏览器访问http://www.python.org/download/
2. 选择适用于Unix/Linux的源码压缩包。
3. 下载及解压压缩包。
4. 如果你需要自定义一些选项修改Modules/Setup
5. 执行 ./configure 脚本
6. make
7. make install
8. 执行以上操作后，Python会安装在 /usr/local/bin 目录中，Python库安装在/usr/local/lib/pythonXX，XX为你使用的Python的版本号。
## java 默认安装了
https://www.cnblogs.com/yuanbo123/p/5819564.html

### 下载资源
http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
### 解压
tar -zxvf jdk-8u102-linux-x64.tar.gz
### 移动目录
sudo mv jdk1.8.0_161/ /usr/local/java
### 配置环境
sudo vim /etc/profile
```shell
export JAVA_HOME=/usr/local/java/
export JRE_HOME=/usr/local/java/jre
export CLASSPATH=.:$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
```
### 刷新配置
source /etc/profile

### 校验
java

## nginx

### 安装
```sh
# 下载源文件
wget -c https://nginx.org/download/nginx-1.10.1.tar.gz
# 解压
tar -zxvf nginx-1.10.1.tar.gz
cd nginx-1.10.1
# configure
./configure --conf-path=/home/mohoo/data/Project/work/nginx/nginx.conf
# 编译安装
make
make install
# 查找安装路径：
whereis nginx
```

### 启动、停止nginx
使用sudo 权限

```sh
# 校验nginx 配置信息
./nginx -t 
# 启动nginx
./nginx  
# 配置信息重载
./nginx -s reload nginx
curl http://localhost
```
### nginx 自定义配置

```sh
# 自定义配置（不推荐）安装时进行配置,自定义配置
./configure --conf-path=/usr/local/nginx/conf/nginx.conf
# 配置信息
./configure \
--prefix=/usr/local/nginx \
--conf-path=/usr/local/nginx/conf/nginx.conf \
--pid-path=/usr/local/nginx/conf/nginx.pid \
--lock-path=/var/lock/nginx.lock \
--error-log-path=/var/log/nginx/error.log \
--http-log-path=/var/log/nginx/access.log \
--with-http_gzip_static_module \
--http-client-body-temp-path=/var/temp/nginx/client \
--http-proxy-temp-path=/var/temp/nginx/proxy \
--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \
--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \
--http-scgi-temp-path=/var/temp/nginx/scgi
```


```conf
http {
    include       mime.types;
    default_type  application/octet-stream;
    server_tokens  off;  
    fastcgi_intercept_errors on;
    log_format logstash '$http_host $remote_addr - $remote_user [$time_local] "$request" $status $body_bytes_sent "$http_referer" "$http_user_agent" "http_x_forwarded_for" $request_time $upstream_response_time';

	access_log logs/access.log logstash;
   	access_log  /data/wwwlog/access.log  logstash;
	error_log  /data/wwwlog/error.log;

   geo $white_ip {
        #ranges;
        default no;
    }
	
    include gzip.conf;    
    keepalive_timeout           60 20;
    client_header_timeout       3m;
    client_body_timeout         3m;
    send_timeout                3m;

    client_header_buffer_size           16k;
    large_client_header_buffers         4 32k;
    server_names_hash_max_size          512;
    server_names_hash_bucket_size       64;

    sendfile        on;
    tcp_nopush      on;
    tcp_nodelay     on;

    limit_req_zone $binary_remote_addr zone=http:10m rate=100r/s;
    limit_req_zone $http_user_agent zone=useragenttrack:10m rate=100r/s;
    

    server {
        listen       80;
	    root /data/wwwroot/html;
        index index.html index.htm;
        server_name  localhost;
        error_page  404              /404.html;
        error_page   500 502 503 504  /50x.html;

        location /design/html/ {
            root /home/data/graduation-design/client/;
        }

        location /mwechat{
            proxy_pass http://127.0.0.1:8765;
        }
	
    }
}
```

注：将临时文件目录指定为/var/temp/nginx，需要在/var下创建temp及nginx目录
https://www.cnblogs.com/hdnav/p/7941165.html

```sh
# 访问登录页面
curl http://localhost/design/html/login.html
# 访问用户接口
curl http://localhost/design/users/info
```

### 多捣腾捣腾就可以了解很多之前想的东西
很多人,很多知识点是相通的,可以借鉴别人的知识体系,查漏补缺.


## sublime_text
http://www.sublimetext.com/docs/3/linux_repositories.html
https://jingyan.baidu.com/article/e5c39bf5c840d039d7603336.html

apt
Install the GPG key:

```sh
wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -
```
Ensure apt is set up to work with https sources:

sudo apt-get install apt-transport-https
Select the channel to use:

Stable
```sh
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
```
Dev
```sh
echo "deb https://download.sublimetext.com/ apt/dev/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
```
Update apt sources and install Sublime Text

```sh
sudo apt-get update
sudo apt-get install sublime-text
```

https://www.cnblogs.com/shenckicc/p/6032998.html

解决无法输入中文：

http://blog.csdn.net/cywosp/article/details/32350899

## php


### 系统性能配置优化
* 设置> 个性化 > 开启窗口特效  主要作用，边框圆角美化，背景设置为毛玻璃，会导致不太美观
* 开启高效模式
* 热区优化
* 模式选择:高效模式,时尚模式:不习惯
* 大小设置为小
* 系统注销后，长时间不处理，系统无法唤起。
* 代码存放在home下面，不需要反复授权
https://lanseyujie.com/post/deepin-optimization-techniques.html
https://lanseyujie.com/post/deepin-install-shadowsocks.html
- [ubuntu 安装 GCC 和 G++ C++ 开发环境](https://www.cnblogs.com/felixzh/p/5110939.html)

### linux 场景
1. 可以安装在各种计算机硬件设备中,手机,平板电脑,**路由器**,视频游戏控制台,台式计算机,大型机和超级计算机
2. 严格来讲，Linux这个词本身只表示Linux内核，但实际上人们已经习惯了用Linux来形容整个基于Linux内核，并且使用GNU 工程各种工具和数据库的操作系统。

### 现在几乎所有开源的系统都是基于linux/unix 系统
1. 深入学习这个还是非常有必要的
2. 到了知其然,知其所以然的时候
3. 很多软件在linux 都能得到很好的支持.
4. 服务器端基本上都是Linux ,如果可以在本地开发环境就原生拥有这些特性,那么后续的开发维护都比较方便
5. docker等服务都是基于Linux系统,1. 是开源的 2. win 使用docker环境比较麻烦,不如直接使用docker
6. linux 的配置命令 可以脚本化,方便于维护.
7. 在接下来的一段时间里,我争取使用linux 简单而强大,配置完成后可以很方便的进行配置维护
8. 在window下,你配置的东西,每次做系统,都会变更很多东西,这些东西不能同步,而Linux不同,可以脚本化.
9. linux 下默认的编辑器是vim 那么可以有意识的去尝试使用 
10. 尝试deepin 系统的有点和不足 尝试在linux 下进行办公

### deepin 优点
linux:应用范围更广, 移动端:Android ,服务器端:几乎占据绝对主流,
1. 命令行终端不错 支持很多特性 ssh 多屏幕 不需要使用第三方的东西了
2. 输入法也还可以,不会让人适应很长时间
3. 性能还可以，至少 windows 系统没有那么流畅。
4. 开发状态和服务器状态保持一致，减少平台切换的麻烦
5. 针对自己常用到的场景，已经妥妥的支持了
6. 入门比较轻松，切换成本比较低。
