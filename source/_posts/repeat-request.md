---
layout: post
title: 记前端按钮一次点击重复请求的问题处理 
date: 2017-08-17 17:55:03
tags: javascript
---

## 分析产生重复请求的原因
### 一、 前端js 未做限制 每点击一次就会请求一次

### 二、 jQuery 或者 vue.js 等重复 加载初始化方法，将用户点击事件累加
加载了三遍，点击btn事件了，其内部方法将会被触发3次
```js
var init = function(){
	$('#btn').click(function(){
		//请求事件
	});
};

init();
init();
init();

```
### 三、 jquery 本身处理有一定的延时性（时间极短）
1. 使用原生js，能够实时响应。设置isAllowSubmit为true,第一遍请求时，设置为false,在ajax未响应时，下面的点击事件是无发
重复调用ajax请求的。

```js

var GiveEntity = {};
var isAllowSubmit = true;

GiveEntity.submit = function (isShare) {
	if (isAllowSubmit) {
		isAllowSubmit = false;
		$('#btnConfirm').unbind('click').html('loading...');

		$.post('/' + app + '/create/record', params, function (data) {
			GiveEntity.isAllowSubmit = true;

			$('#btnConfirm').html('确认').click(function () {
				GiveEntity.loading(1)
				$(this).unbind('click').html('loading...');
				GiveEntity.submit();
			});
		})

	}
}

$('#btnConfirm').unbind('click').html('确认').click(function () {
	GiveEntity.loading(1)
	$(this).unbind('click').html('loading...');
	GiveEntity.submit();
});

