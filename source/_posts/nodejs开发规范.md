---
title: node.js 开发规范
date: 2017-01-19 19:56:53
tags: node.js
---

## 命名规范
### 命名法说明
1. camel命名法，形如 `thisIsAnApple`
2. pascal命名法，形如`ThisIsAnApple`
3. 下划线命名法，形如`this_is_an_apple`
4. 中划线命名法，形如`this-is-an-apple`
5. 匈牙利命名法，`变量名`＝`类型`＋`对象描述`

### 命名法说明
1. 变量名：必须使用camel命名法
2. 参数名：必须使用camel命名法
3. 函数名：必须使用camel命名法
4. 方法/属性：必须使用camel命名法
5. 私有（保护）成员：必须以下划线_开头
6. 常量名：必须使用全部大写的下划线命名法，如IS_DEBUG_ENABLED
7. 类名：必须使用pascal命名法
8. 枚举名：必须使用pascal命名法
9. 枚举的属性：必须使用全部大写的下划线命名法
10. 命名空间：必须使用camel命名法
11. 语义：命名同时还需要关注语义，如：
	* 变量名应当使用名词；
	* boolean类型的应当使用is、has等起头，表示其类型；
	* 函数名应当用动宾短语；getName
	* 类名应当用名词。Person

### 项目名称
```
mohoo-telecom-wechat-manager
```

### 文件目录
```
proxy
```

### proxy,rest,contr 文件名称
```
AuthProxy
AuthRest
AuthCtrl
```

### 接口地址

### 静态资源
1. js
2. css: page-alert-span
3. img: page-icon-add

### router
```
router.get('/index', auth.authWxUser, home.Index);
router.get('/rule', auth.authWxUser, home.Rule);

router.get('/query/devicename', auth.authWxUser, home.deviceName);//查询
router.get('/create/record', auth.authWxUser, home.record);//创建
router.get('/update/recordstatus', auth.authWxUser, home.recordStatus);//修改
router.get('/delete/recordbyid', auth.authWxUser, home.recordById);//删除
```

### URL接口命名-单词分割
```

```

### 类名，对象名

```
function Person(){

}

var BillAndPayProxy = {};
BillAndPayProxy.getWXPayData = function (param, callback) {
    httpUtil.post(apis.wxDiscPayUrl, param, function (error, response, content) {
        callback(error, content);
    });
};

```


### 方法名称
* getName
* addUserRecord
* get/set, add/remove, create/destroy, start/stop, insert/delete, begin/end。

```
var AuthProxy = {};

AuthProxy.getName();
```

### 私有变量
```
var AuthProxy = {
	_name: '',
	_age: ''
};
var person = {
	_setSext: function() {
		// ...
	},
	_setName: function() {
		// ...
	}
};
```
### 常量
```
var PI = '3.1415926';
var URL_BIND = 'http://wwww.baidu.com';
```

### 变量

> 总所周知，javascript是一种语法极其灵活的语言。javascript在设计之初就只是用来为HTML添加动态效果的。由于他动态，弱类型等特性，以及不同浏览器的兼容性问题，、
造成了开发成本要比java等语言要高很多。正因为它太灵活，我们制定了适用于网易邮箱的javascript编码规范，尽可能多的降低由于语法灵活造成的问题。
以下将具体介绍：


变量名包括`全局变量`，`局部变量`，`类变量`，`函数参数`等等

###### 基本规范

`变量命名`都以`类型前缀`+`有意义的单词`组成，单词首字母都需要大写。例如：`sUserName`，`nCount`。

###### 前缀规范

每个局部变量都需要有一个类型前缀，按照类型可以分为：

```
s：表示字符串。例如：sName，sHtml;

n：表示数字。例如：nPage，nTotal;

b：表示逻辑。例如：bChecked，bHasLogin;

a：表示数组。例如：aList，aGroup;

r：表示正则表达式。例如：rDomain，rEmail;

f：表示函数。例如：fGetHtml，fInit;

o：表示以上未涉及到的其他对象，例如：oButton，oDate;

g：global 全局变量 例如：gVersion
```
###### 例外情况：

1：作用域不大临时变量可以简写，比如：str，num，bol，obj，fun，arr。

2：循环变量可以简写，比如：i，j，k等。

为什么需要这样强制定义变量前缀?
正式因为javascript是弱语言造成的。在定义大量变量的时候，我们需要很明确的知道当前变量是什么属性，
如果只通过普通单词，是很难区分的。

2. 函数命名规范

统一使用`动词`或者`动词[+名词]`形式，例如：fGetVersion()，fSubmitForm()，fInit();
涉及返回逻辑值的函数可以使用is，has等表示逻辑的词语代替动词。

如果有内部函数，使用__f+动词[+名词]形式，内部函数必需在函数最后定义。例如：
```
function fGetNumber(nTotal) {
	if (nTotal < 100) {
		nTotal = 100;
	}
	return __fAdd(nTotal);

	function __fAdd(nNumber) {
		nNumber++;
		return nNumber;
	}
}
fGetNumber(30)
```
3.其他注意事项

```
1：所有命名最好使用英语表示。

2：所有变量名应该明确而必要，尽量避免不必要的容易混淆的缩写。

3：netease.events.mouse.Handler，而不是 netease.events.mouse.MouseEventHandler。

4：对应的方法应该使用对应的动词，例如：get/set, add/remove, create/destroy, start/stop, insert/delete, begin/end。

5：应该避免双重否定意义的变量，例如：bIsNotError, bIsNotFound，不可取。

6：变量应该在最小的范围内定义，并尽可能的保持最少的活动时间。

7：尽量避免复杂的条件语句，可以使用临时的boolean变量代替。

8：一定要避免在条件中执行语句，例如：if((i=3)>2){}，不可取。

```

## 匈牙利命名法

### 匈牙利命名法语法：

`变量名`＝`类型`＋`对象描述`
**类型**指变量的类型
**对象描述**指对象名字全称或名字的一部分，要求有明确含义，命名要容易记忆容易理解。
提示: 虽然JavaScript变量表面上没有类型，但是JavaScript内部还是会为变量赋予相应的类型。

提示: 匈牙利命名法是一位微软程序员发明的，多数的C,C++程序都使用此命名法。

JavaScript变量匈牙利命名类型
JavaScript变量起名类型	变量命名前缀
Array 数组	a
Float 浮点	l
Function 函数	f
Integer(int) 整型	n
Object 对象	o
Regular Expression 正则	r
String 字符串	s
g全局变量		g
JavaScript变量名匈牙利命名法示例
```
var sWebURL="www.jb51.net";
```
从变量的名字可以看出s代表字符串WebURL是网址。
```
var nCheckCount=5;
```
从变量的名字可以看出n代表Integer(整型)，CheckCount代表某种数量。

使用匈牙利命名法非常简单直观，方便判断变量的类型，而且方便程序的阅读与维护。


## 限制
1. 尽量不要使用 eval()，冗余产生入侵
2. 缩进 在同一系统中应采用同一种缩进标准，本文提倡缩进大小为4个空格。
3. 花括号{}
4. 空格  任何“;”后空一格、for循环中初始化“,”后空一格、数组中","后空一格、对象中“:”后空一格、如：
```
for (var i = 0, j = 1; i < 10; i += 1){
  var some = [1, 2, 3];
  var obj = {aa: 1, bb: 2}
}
```
5. 函数参数里“,”后空一格、函数声明中花括号前空一格、函数表达式中括号前后各空一格，如：
```
func(a, b, c){};
function func() {};
var func = function () {};
```

6. 所有的操作符前后都跟一个空格，如：
```
var d = 0,
    a = b + 1;
if (a && b && c) {
    d = a % c;
    a += d;
}
```

7. 换行
在以下位置必须换行：
  * 每个独立语句结束后；
  * if、else、catch、finally、while等关键字前；
  * 运算符处换行时，运算符必须在新行的行首。
  * 对于因为单行长度超过限制时产生的换行，参考行长度中的策略进行分隔。

8. 三元运算符过长
```
//无需换行
var result = content?result1:result2;

//换行
var data = _.isEmpty(content)
  ? _.isEmpty(content2)
    ?content3:content2
  :content;
```


## Interface 接口返回参数规范
1. 接口名称：大驼峰吗？
1. 返回参数，小驼峰
```
{status:200,data:{name:'admin',list:[]},info:''}
{status:0,data:'查询失败',info:''}
{status:5005,data:'服务器繁忙',info:''}
```


## Proxy 代理层
1. 注释：标记入参，出参
2. 将接口参数返回为标准模式参数
3. 在备注中添加，功能简介，
```
/**
 * 录入赠送记录
 * 1. 通过。。。。
 * @param params
 * {"openid":"微信唯一标识","from_deviceno":"发起人设备号 必传","to_deviceno":"接受人设备号 必传","gifts":"礼物 [50M、100G] 必传","type":"类型 [1]流量 必传","remark":"备注 一个有规则的json串"}
 * @param callback
 *  {"data":"赠送记录唯一标识","status":200,"info":0}
 * @constructor
 */
GiveFlowProxy.GfCreateGivingGiftsRecord = function (params, callback) {
    var url = urlKit.GfCreateGivingGiftsRecord;
    httpUtil.post(url, params, function (error, response, content) {
        callback(error, content);
    });
};
```

## 写注释
1. 注释规范
2. 包含那些信息

```
/**
 * 方法名
 1. 简要写一下功能操作
 * @param  {[type]}   param    [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
BillAndPayProxy.getWXPayData = function (param, callback) {
    httpUtil.post(apis.wxDiscPayUrl, param, function (error, response, content) {
        logger.info("获取微信支付数据返回结果：" + JSON.stringify(param) + JSON.stringify(content));
        callback(error, content);
    });
};
```

## 参考
- [网易前端JavaScript编码规范](http://www.php100.com/html/webkaifa/javascript/2012/0616/10550.html)
- [最全的Javascript编码规范(推荐)](http://www.jb51.net/article/87142.htm)
- [javascript 命名规则 变量命名规则](http://www.jb51.net/article/22229.htm)

