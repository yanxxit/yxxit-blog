---
title: Spring.boot 项目创建之傻瓜教程
---

## 新建项目

#### 【File】-->【New】-->【Spring Starter Project】
![新建项目](/view/img/img-01.jpg)

#### 填写项目信息
* Name		项目名称
* Location 	文件位置
* Type		选择Maven
* Group		com.shaw.wap
* Artifact	wap
* version	0.0.1-SNAPSHOT
* Description	描述
* Package	包结构
![New Spring Start Project](/view/img/img-02.jpg)


#### 选择Spring Boot 版本

![New Spring Start Project](/view/img/img-03.jpg)

#### 导入架包
![New Spring Start Project](/view/img/img-04.jpg)

#### 项目结构
![project](/view/img/img-05.jpg)

#### 备注
application.properties 	配置信息
ShawSpringWapApplication main 方法

## 启动服务

#### 创建 HomeController.java

![创建HomeController](/view/img/img-06.jpg)

```
package com.shaw.wap;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	@RequestMapping(value="/hello",method=RequestMethod.GET)
	public String Say(){
		return "hello world!";
	}
}

```

#### 运行程序

![运行程序](/view/img/img-07.jpg)

#### 范围查看效果

访问链接：http://localhost:8080/hello

![查看结果](/view/img/img-08.jpg)