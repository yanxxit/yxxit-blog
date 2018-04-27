---
layout: post
title: ES5 新增特性汇总
date: 2017-09-14 18:10:11
tags: node.js
---

> ES5 新增特性汇总

- Trailing commas are ok
多余的逗号不报错，比如 {a:1,b:2,}

- No reserved words for property names
属性名可以使用关键字和保留字了，比如 { if:1, else:2 }

- NaN, Infinity, undefined : are all constants
NaN、Infinity、undefined 都是常量了，不可更改。

- parseInt() defaults to radix 10
parseInt 第二个参数默认为 10（真好）

- /regexp/ produces new reg ex object every time
正则字面量每次都会产生一个新的对象

- JSON.parse(), JSON.stringify()
添加 JSON 序列化和反序列化

- Function.prototype.bind
函数新增 bind 方法（贺老说 bind 写在后面有点不好用）

- String.prototype.trim
字符串终于自带头尾去空格方法了，如 ' abc '.trim() === 'abc'

- Array.prototype.every, filter, forEach, indexOf, lastIndexOf, map, reduce, reduceRight, some
数组添加了一系列方法，终于能脱离 Underscore.js 了

- Date.now()
Date.now 现在才加进来的？可怕。

- Date.prototype.toISOString
日期新增 toISOString 方法

- new Date(string) and Date.parse(string) will try ISO format 1st
新增对 ISO 日期格式的支持

- Array.isArray()
判断一个对象是不是数组……以前苦了大家了

- Object.keys(), Object.create(), Object.defineProperty, Object.defineProperties,
Object.getOwnPropertyDescriptor(), Object.getOwnPropertyNames(obj), Object.getPrototypeOf(obj)
- Object.seal(), Object.freeze(), Object.preventExtensions(), Object.isSealed(), Object.isFrozen(),
Object.isExtensible()
对象新增一系列方法，使得在 JS 中模拟 Java 变得更丝滑。我最喜欢的还是 Object.create()

- Property attributes: writeable, value, enumerable, configurable, get, set
对象的属性可以添加各种配置了

- 'use strict';
- Strict Mode:
```text
  No more implied global variables within functions.
  this is not bound to the global object by function form.
  apply and call do not default to the global object.
  No with statement.
  Setting a writeable: false property will throw.
  Deleting a configurable: false property will throw.
  Restrictions on eval.
  eval and arguments are reserved.
  arguments not linked to parameters.
  No more arguments.caller or arguments.callee.
  No more octal literals.
  Duplicate names in an object literal or function parameters are a syntax error
```

严格模式
函数里没有隐式的全局变量了，你要创建全局变量必须是显式的。比如想用 a = 1 创建全局变量是不行的。
this 不会默认指向全局对象（比如 window 或者 global）了。
call 和 apply 也不会默认使用全局对象了。
不准用 with
如果一个属性的 writeable 是 false，那么你给这个属性赋值就会报错。
如果一个属性的 configurable 是 false，那么你 delete 这个属性就会报错。
对 eval 和 arguments 做出了限制。以下代码每行都会报错：
```js
  eval = 17;
  arguments++;
  ++eval;
  var obj = { set p(arguments) { } };
  var eval;
  try { } catch (arguments) { }
  function x(eval) { }
  function arguments() { }
  var y = function eval() { };
  var f = new Function("arguments", "'use strict'; return 17;");
```

arguments 只保存原始参数。对形参的赋值不会对 arguments 有影响。
不准用 arguments.caller 和 arguments.callee
不支持八进制字面量，比如 var a = 015 会报错。
对象字面量或者函数形参中，如果有重复的名字，就会报错。


## 参考
- [转载](https://zhuanlan.zhihu.com/p/24336831)
