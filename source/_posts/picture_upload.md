---
title: 图片上传
date: 2018-04-04 11:11:11
tags: upload
---

前端浏览器获取图片信息，上传到服务器上。

1. 跨域
2. ajax 请求
3. 图片大小压缩



## Base64 处理方式

1. 前端首先获取图片信息，将图片转换为base64
2. 通过**post**请求，将转换的base64数据提交给接口
3. 后端接口获取到数据，然后写成图片，返回图片链接



## jquery form 请求

https://www.cnblogs.com/liuhongfeng/p/5137027.html

```Html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>jquery form 表单请求信息</title>
    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/jquery.form/4.2.2/jquery.form.min.js"></script>
</head>

<body>
    <form id="tf" action="http://www.daoxila.com/GongJu/activity/1.0/marriage/upload" method="post" enctype="multipart/form-data"
        name="upload_form">
        <input name="photo" type="file" multiple accept="image/png,image/jpeg,video/mp4,audio/mp3" />
    </form>

    <input type="button" value="上传图片" class="btn-upload" />
    <script>
        $(".btn-upload").click(function () {
            $("#tf").ajaxSubmit(function () {
                console.log("11111");
            });
        })
    </script>
</body>

</html>
```



## 参考

- [使用ajax提交form表单，包括ajax文件上传](http://www.cnblogs.com/zhuxiaojie/p/4783939.html)