---
title: node.js下用window.onerror捕获并上报Js错误
---

## 使用场景
1. 捕获前端js异常信息，方便后期优化
2. 方便前端交互持续优化
3. 方便问题重现


## 环境
* node.js
* 框架：koa
* 日志模块：log4js

## 前端代码
1. 使用前端的window.onerror 事件进行监听前端代码的异常。
2. 当前端代码发生异常时，通过post并将异常信息上传服务器。

```js
window.onerror = function(errorMessage, scriptURI, lineNumber, columnNumber, errorObj) {
    var params = {
        errorMessage: errorMessage,
        scriptURI: scriptURI,
        lineNumber: lineNumber,
        columnNumber: columnNumber,
        errorObj: errorObj
    };
    $.post('/yourserver/error', params, function(data) {
        console.log(JSON.stringify(data));
    });
}
```

## 后端代码
1. 记录前端异常信息
2. 记录发生异常时设备、浏览器信息
3. 记录发生异常的ip地址

```js
var body = this.request.body;
var userAgent = this.headers['user-agent'];
var cookie = this.headers['cookie'];
logger.error('--------------------前端异常信息----------------------');
logger.error("手机及浏览器环境：" + userAgent);
logger.error("ip地址：" + this.ip);
logger.error("cookie：" + cookie);
logger.error("错误信息：" + body.errorMessage);
logger.error("出错文件：" + body.scriptURI);
logger.error("出错行号：" + body.lineNumber);
logger.error("出错列号：" + body.columnNumber);
logger.error("错误详情：" + body.errorObj);
logger.error("----------------------end-----------------------------");
this.body = {status:200,data:'ok'};

```

## 结果

浏览器端：
![浏览器端异常信息](/view/img/window-err-b.jpg)

服务器端：
![服务器异常信息](/view/img/window.error.png)

