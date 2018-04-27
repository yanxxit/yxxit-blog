---
title: Git 常用命令
tags: tools
---

> Git是一款免费、开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。Git是一个开源的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。

## 安装

## 命令

#### 拉取远程代码
git clone https://github.com/shawflying/reskit.git

#### 拉取分支代码
git fetch
git checkout -b fly origin/fly

#### 查看远程分支
git branch -r

#### 拉取远程分支并创建本地分支
1. 方法1
git checkout -b 本地分支名x origin/远程分支名x
使用该方式会在本地新建分支x，并自动切换到该本地分支x。

2. 方法2
git fetch origin 远程分支名x:本地分支名x
使用该方式会在本地新建分支x，但是不会自动切换到该本地分支x，需要手动checkout。

#### 分支合并
如果无冲突，OK
如果有冲突，该如何解决
git log --author="yanxxmh" --after="1 week ago" --oneline

#### checkout
```
git checkout . #本地所有修改的。没有的提交的，都返回到原来的状态
git stash #把所有没有提交的修改暂存到stash里面。可用git stash pop回复。
git reset --hard HASH #返回到某个节点，不保留修改。
git reset --soft HASH #返回到某个节点。保留修改
```

#### 拉取制定版本代码
1. 将制定版本闯将一个分支
2. 使用下面命令下载指定分支信息
```
git clone -b v1 --depth 1 https://github.com/shawflying/reskit.git
git clone -b vue.js2.0 --depth 1 https://github.com/shawflying/reskit.git
```

### 切换分支

查询所有分支
```
git branch -a
```

查询当前分支
```
git branch
```

切换分支
```
git checkout devlop

git branch --set-upstream-to=origin/master origin/账单详情添加跳转链接

git branch --set-upstream-to=origin/账单详情添加跳转链接 origin/master
```

```
root@ubuntu-129:/data/code/mohoo-telecom-wechat-mobile# git pull
Username for 'https://git.coding.net': xxxxx
Password for 'https://yanxxmh@git.coding.net': 
remote: Counting objects: 4, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 2), reused 0 (delta 0)
Unpacking objects: 100% (4/4), done.
From https://github.com/shawflying/reskit
   eb8b3be..fa2f6d5  账单详情添加跳转链接 -> origin/账单详情添加跳转链接
Already up-to-date.
```

切换到master
```
git checkout master
```

切换到其他
```
git checkout 
```

拉取代码
```
git pull <remote> <branch>
```

当前分支状态
```
git status
```