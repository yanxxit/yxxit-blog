---
title: node.js 6.9.4 升级
---

## node.js 简介
Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。
Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。
Node.js 的包管理器 npm，是全球最大的开源库生态系统。

## node 升级
Node.js的开发非常活跃，它的最新稳定版本也频繁变化，你不时会发现，一个模块不能在你当前的Node版本上使用，此时你需要升级Node

## 方法一、使用源码，进行编译安装

### 下载源码，并上传到服务器

```
wget https://nodejs.org/dist/v6.9.2/node-v6.9.2-linux-x64.tar.xz
```

### 解压源码

```
tar xzvf node......gz
```

### 编译安装
```
./configuration
make
make install
```

### 安装完毕

```
node -v  # 结果：6.9.4
```

## 说明：
* npm 也会同时升级
* pm2 也要进行升级

## 方法二、apt-get 升级

### 1. 设置代理
```
export http_proxy=http://127.0.0.1:808
```

### apt-get update 更新系统
```
apt-get update
```

### 提示错误

```
已下载 247 kB，耗时 5秒 (41.5 kB/s)
正在读取软件包列表... 完成
W: GPG 错误：http://apt.oneapm.com stable Release: 由于没有公钥，无法验证下列签名： NO_PUBKEY 8CF9B240B421195B
W: 仓库 “http://apt.oneapm.com stable Release” 没有数字签名。
N: 无法认证来自该源的数据，所以使用它会带来潜在风险。
N: 参见 apt-secure(8) 手册以了解仓库创建和用户配置方面的细节
```
### 修复命令
```
gpg --keyserver pgpkeys.mit.edu --recv-key 8CF9B240B421195B

gpg -a --export  8CF9B240B421195B | sudo apt-key add -
```

### 重新更新源：
```
sudo apt-get update
```

### 安装源 更新所有的软件：

```
apt-get dist-upgrade
```

## 方法三、 node 切换版本 mvn

nvm 是 Mac 下的 node 管理工具，有点类似管理 Ruby 的 rvm，如果是需要管理 Windows 下的 node，官方推荐是使用 nvmw 或 nvm-windows 。

### 一、卸载已安装到全局的 node/npm

如果之前是在官网下载的 node 安装包，运行后会自动安装在全局目录，其中

node 命令在 /usr/local/bin/node ，npm 命令在全局 node_modules 目录中，具体路径为 /usr/local/lib/node_modules/npm

安装 nvm 之后最好先删除下已安装的 node 和全局 node 模块：

```
npm ls -g --depth=0 #查看已经安装在全局的模块，以便删除这些全局模块后再按照不同的 node 版本重新进行全局安装

sudo rm -rf /usr/local/lib/node_modules #删除全局 node_modules 目录
sudo rm /usr/local/bin/node #删除 node
cd  /usr/local/bin && ls -l | grep "../lib/node_modules/" | awk '{print $9}'| xargs rm #删除全局 node 模块注册的软链
```

### 二、安装 nvm
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
```

### 三、安装切换各版本 node/npm

```
nvm install stable #安装最新稳定版 node，现在是 5.0.0
nvm install 4.2.2 #安装 4.2.2 版本
nvm install 0.12.7 #安装 0.12.7 版本

# 特别说明：以下模块安装仅供演示说明，并非必须安装模块
nvm use 0 #切换至 0.12.7 版本
npm install -g mz-fis #安装 mz-fis 模块至全局目录，安装完成的路径是 /Users/<你的用户名>/.nvm/versions/node/v0.12.7/lib/mz-fis
nvm use 4 #切换至 4.2.2 版本
npm install -g react-native-cli #安装 react-native-cli 模块至全局目录，安装完成的路径是 /Users/<你的用户名>/.nvm/versions/node/v4.2.2/lib/react-native-cli

nvm alias default 0.12.7 #设置默认 node 版本为 0.12.7
```

### 四、使用 .nvmrc 文件配置项目所使用的 node 版本

如果你的默认 node 版本（通过 nvm alias 命令设置的）与项目所需的版本不同，则可在项目根目录或其任意父级目录中创建 .nvmrc 文件，在文件中指定使用的 node 版本号，例如：

```
cd <项目根目录>  #进入项目根目录
echo 4 > .nvmrc #添加 .nvmrc 文件
nvm use #无需指定版本号，会自动使用 .nvmrc 文件中配置的版本
node -v #查看 node 是否切换为对应版本
```

### 五、nvm 与 n 的区别

node 版本管理工具还有一个是 TJ 大神的 n 命令，n 命令是作为一个 node 的模块而存在，而 nvm 是一个独立于 node/npm 的外部 shell 脚本，因此 n 命令相比 nvm 更加局限。

由于 npm 安装的模块路径均为 /usr/local/lib/node_modules ，当使用 n 切换不同的 node 版本时，实际上会共用全局的 node/npm 目录。 因此不能很好的满足『按不同 node 版本使用不同全局 node 模块』的需求。

### 参考
[Ubuntu下如何使用命令行（apt-get）更新软件](http://jingyan.baidu.com/article/4853e1e53204251909f7260f.html)
[更新linux时候提示无法“由于没有公钥，无法验证下列签名 ***”的解决方案](http://blog.csdn.net/loovejava/article/details/21837935)
[使用 nvm 管理不同版本的 node 与 npm](http://www.tuicool.com/articles/Vzquy2)