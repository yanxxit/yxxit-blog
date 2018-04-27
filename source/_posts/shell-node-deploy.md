---
layout: post
title: node.js 项目通过shell脚本部署实例
date: 2018-04-27 14:54:28
tags: shell
---



## 简介

在开发的过程中，项目环境通常分为开发环境，测试环境，还有线上环境等，发布流程比较复杂，项目少了问题还不大，但是，当项目比较多的情况，10多个项目统一上线，上线什么版本等等问题，让人在一个个去处理，需要消耗的人力时间就太多了，希望项目部署可以自动化，让开发人员将精力放在开发及业务上，也减少因部署不规范导致的各种问题。

常见的开发部署方案比较多，如**Jenkins**，如Docker。

我们当前讲解的是最基础的通过shell 脚本进行代码拉取的方法。



## 实现步骤

第一步：下载代码压缩包

第二步：解压

第三步：安装依赖

第四步：启动项目

## 实现代码

```bash
#/bin/sh
# 重新拉取时，需要将以往项目文件删除

# github_url=https://github.com/shawflying/node-express-example/archive/nee-1.2.tar.gz
echo "请输入github tag(http://github.com/username/projectName/archive/tagname.tar.gz)"
read github_url
url_list=(${github_url//// })  
dir_name_end=(${url_list[5]//.tar.gz/ }) 
dir_name="${url_list[3]}-${dir_name_end}"

echo "1. 下载安装包"
wget -nc ${github_url}

# 判断文件是否存在，存在则删除，不管存不存在直接删除
rm -rf ${dir_name} #node-express-example-nee-1.2
echo "2. 解压文件"
tar -xzf ${url_list[5]}
# 删除文件
# rm -rf nee-1.2.tar.gz
echo "3. 进入项目目录"
cd ${dir_name}
mkdir logs

echo "4. 查看依赖环境版本"
echo "node version：" `node -v`
echo "npm version:" `npm -v`
echo "cnpm version:" `cnpm -v`

echo "5. 安装生产环境依赖"
cnpm i --production 

echo "6. 启动项目"
npm run server
```

