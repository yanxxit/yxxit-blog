---
title: npm 常用命令
---

## 简介NPM(Node Package Manger)
NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：
1. 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
2. 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
3. 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。
## npm 安装
* Windows 下，一般情况，安装node.js 的同时，npm 也会同时安装。
* Ubuntu 下
```
sudo apt-get install curl
curl http://npmjs.org/install.sh | sudo sh
#或者
sudo apt-get install npm
#查看npm被安装到哪里
whereis npm 
#设置成全局：
ln -s [文件位置/npm]  /usr/local/bin/npm
```
## 配置镜像
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
npm install  --registry=https://registry.npm.taobao.org
npm config set registry http://registry.npmjs.org/
```

## npm 升级
```
npm -g install npm ( 最新稳定版 ) 或
npm -g install npm@2.9.1 ( 指定版本 )
```


## 常用

```
npm install -g pm2
npm install -g nodemon
npm install -g vue-cli
npm install -g  webpack
npm i -g bower  ## 升级
```

## 常用命令

安装必要依赖
```
npm install --production
```

安装开发依赖
```
npm install --dev
```

安装全部依赖
```
npm install
```
#### 全局安装辅助模块
```
$ npm install pm2 -g # 命令行安装 pm2
npm install -g cnpm  # 国内开发必用
npm install -g nodemon 
```
#### 安装并更新package.json中的版本配置
* 添加–save 参数安装的模块的名字及其版本信息会出现在package.json的dependencies选项中
* 添加–save-dev 参数安装的模块的名字及其版本信息会出现在package.json的devDependencies选项中
* 添加–save-optional 参数安装的模块的名字及其版本信息会出现在package.json的optionalDependencies选项中
```
npm install <name> [–save|–save-dev|–save-optional]
```

#### 安装模块的config的tag配置中含有指定tag的版本
```
npm install <name>@<tag>
Example:
npm install sax@latest
安装模块的指定版本
npm install <name>@<version>
```

#### 显示npm的bin目录
```
npm bin
```

#### 设置npm配置
```
npm config set <key> <value> [–global]
```
使用–global参数，设置全局配置
Example:
设置代理
```
npm config set proxy=http://proxy.tencent.com:8080
```
#### 设置npm的镜像地址
```
npm config set registry http://npm.oa.com
```
获取npm配置
npm config get <key>
Example:
#### 获取npm当前镜像地址
```
npm config get registory
```
#### 删除npm配置
```
npm config delete <key>
```
Example:
#### 删除代理设置
```
npm config delete proxy
```
#### 在编辑器中打开npm配置文件
```
npm config edit
```
#### 交互式的创建package.json文件
```
npm init
```
#### 创建模块的压缩包
```
npm pack [<pkg> [<pkg> … ]]
```
如果没有参数，则npm会打包当前模块目录
发布模块，发布后可通过名称来安装该模块
```
npm publish <tarball>
npm publish <folder>
```
其中：
<folder>：包含package.json文件的目录
<tarball>：经过gzip压缩并归档的一个URL或文件路径，该压缩包包含单个目录，且该目录内有package.json文件
#### 删除模块
```
npm rm <name>
npm r <name>
npm uninstall <name>
npm un <name>
```
注意：不会删除package.json文件dependencies选项中对应的依赖配置
#### 查找模块
```
npm search [search terms ..]
npm s [search terms ..]
npm se [search terms ..]
```
查找匹配查找字符串的模块
#### 更新模块
```
npm update [-g] [<name> [<name> … ]]
```
更新指定name列表中的模块。-g参数更新全局安装的模块。
如果没有指定name，且不是在某个模块内，会更新当前目录依赖的所有包都会被更新（包括全局和模块内）；如果当前目录在某个模块目录内，会更新该模块依赖的模块，所以不指定name直接运行npm update时，最好在某个模块内运行，以免更新到其他不想更新的模块。
#### 执行脚本
```
npm start [<name>]
npm stop [<name>]
npm test [<name>]
npm run [<name>]
```
运行package的start脚本，该脚本写在package.json文件scripts的start字段中。
该字段的值可以是当前系统控制台可执行的脚本，也可以是当前系统可执行文件的路径。
如果不传name参数，则执行当前目录下package.json文件中定义的脚本。
详见https://npmjs.org/doc/misc/npm-scripts.html
#### package.json文件
模块的配置文件，详见https://npmjs.org/doc/files/package.json.html


## 发布项目到npm
1. 在[NPM官网](https://www.npmjs.com/)注册账号
2. 用户验证，命令行执行

```
npm adduser
npm login # 登录
npm who am i
```

3. 发布模块，在模块的根文件夹执行
```
npm publish
```
4. 更新版本
> 如果是git库时，会为新版本号创建一条提交信息，package版本号会自动递增。
```
npm version 0.0.4
npm publish
```

5. 将代码同步到github.com

## npm常用命令
```
npm search module_name 查找模块
npm docs module_name 查找模块文档
npm install 安装package.json指定的所有模块
npm start
npm test
cnpm install gulp --save-dev
```

## Package.json 属性说明
<pre>
   name - 包名。
   version - 包的版本号。
   description - 包的描述。
   homepage - 包的官网 url 。
   author - 包的作者姓名。
   contributors - 包的其他贡献者姓名。
   dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
   repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
   main - main 字段是一个模块ID，它是一个指向你程序的主要项目。就是说，如果你包的名字叫 express，然后用户安装它，然后require("express")。
   keywords - 关键字
</pre>



