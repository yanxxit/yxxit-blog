---
title: 图片上传
date: 2018-04-04 11:11:11
updated: 2018-05-04 10:55:49
tags: upload
---

图片上传是当前wap开发中常用的业务场景，然而，不同的业务场景，需求也是不同的，有些业务需要将完整图片上传，有些需要将图片资源进行压缩。在当前前后端完全分离的模式下，前后端如何解决下列问题呢？

1. 跨域
2. ajax 请求
3. 图片大小压缩


## 解决方案一、formidable

formidable模块实现了上传和编码图片和视频。它支持GB级上传数据处理，支持多种客户端数据提交。有极高的测试覆盖率，非常适合在生产环境中使用。

maxFieldsSize属性限制了所有字段所占的字节数。如果超过了该字节数，将会报错。默认的字节数为2MB

```
form.maxFieldsSize = 2*1024*1024
```

maxFields属性限制了解析请求字段的的数量。默认为1000个

```
form.maxFields = 1000;
```

### modules

```js
var formidable = require('formidable');
var fs = require('fs');

class dxlUpdate {
    constructor(par){
        this.root = par.root;
        this.path = par.path;
        this.name = par.name;
    }
    upload(req){
        var _this = this;
        return new Promise((resolve, reject) => {
            let form = new formidable.IncomingForm();

            let imgName = this.name;
            form.encoding = 'utf-8';
            form.maxFieldsSize = 1024 * 1024 * 1024;
            form.uploadDir = this.root;
            form.keepExtensions = true;
            form.parse(req, function(err, fields, files) {
                if(!err){
                    console.log("上传完成");
                    // console.log(files[imgName].path);
                    _this.fileMv(files[imgName]).then(d =>{
                        return resolve(d);
                    })

                    
                }else{
                    return resolve(err);
                }
            });
            form.on('progress', function(bytesReceived, bytesExpected) {
                console.log(((bytesReceived/bytesExpected)*100).toFixed(2) + "%");
            });
        });
    }
    fileMv(files){
        let imgPath = `${this.path}${this.fileName()}${this.suffix(files)}`;
        let url = `${this.root}${imgPath}`;
        return new Promise((resolve, reject) => {
            fs.rename(files.path,url,function(err,d){
                if(!err){
                    return resolve(imgPath)
                }else{
                    console.error(err);
                    return reject(err)
                }
            })
        });
    }
    fileName(){
        let d = new Date();
        let yue = d.getMonth() + 1;
        let riqi =  (yue > 9 ? yue : ("0" + yue) + d.getDate());
        return `/${d.getFullYear()}${riqi}${d.getTime()}${parseInt(Math.random()*10)}`; 
    }
    suffix(img){
        if(img.name.toLowerCase().indexOf(".jpeg") != -1) return ".jpg";
        if(img.name.toLowerCase().indexOf(".jpg") != -1) return ".jpg";
        if(img.name.toLowerCase().indexOf(".png") != -1) return ".png";
        if(img.name.toLowerCase().indexOf(".gif") != -1) return ".gif";    
        return false;
    }
}
module.exports = dxlUpdate;
```

### controller

```js
//图片上传
exports.upload = (req, res) => {
    co(function* () {
        let img = new dxlUpload({
            root: nodeServer.path["oss-img"],
            path: "/happy_train",
            name: "photo"
          //对应着前端的字段 <input name="photo" type="file" multiple accept="image/png,image/jpeg,video/mp4,audio/mp3"/>
        });
        img.upload(req).then(imgUrl => {
            console.log(imgUrl);
            return res.jsonp(jsonpData(1, 'success', BaseStaticUrl + imgUrl));//助力失败
        }).catch(e => {
            return res.jsonp(jsonpData(-1, '图片上传失败', e.toString()));
        })
    }).catch(e => {
        return res.jsonp(jsonpData(-1, '图片上传失败', e.toString()));
    });
}
```

### 前端页面

#### Form 表单请求

需要跳转新的页面

#### jquery.form ajax 请求

```html
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

https://www.cnblogs.com/liuhongfeng/p/5137027.html




## 解决方案二、Base64 处理方式

1. 前端首先获取图片信息，将图片转换为base64
2. 通过**post**请求，将转换的base64数据提交给接口
3. 后端接口获取到数据，然后写成图片，返回图片链接


### 后端处理

```js
//base64 图片下载
const fs = require('fs');
exports.down_base64 = (req, res) => {
    var imgData = req.body.imgUrl;
    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");//过滤data:URL
    var dataBuffer = new Buffer(base64Data, 'base64');
    let name = (moment().format("YYYYMMDDHHmmss") + new Date().getTime()) + ".jpg"
    let dist = path.join(nodeServer.path["oss-img"], "/happy_train/" + name)

    fs.writeFile(dist, dataBuffer, function (err) {
        if (err) return res.jsonp(jsonpData(-1, 'fail', err));
        return res.jsonp(jsonpData(1, 'success', BaseStaticUrl + "/happy_train/" + name));
    });
}
```

### 前端请求

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>图片资源上传</title>
    <script type="text/javascript" src="http://cdn.bootcss.com/jquery/2.2.1/jquery.min.js"></script>
    <script src="./exif.min.js" type="text/javascript"></script>
    <script src="./processImg.min.js" type="text/javascript"></script>
</head>
<body>
    <h3>图片上传：</h3>
    <div class="up-id">
        <img id="showimage1" src="" alt="">
        <input id="upface1" class="UpFaceInput" type="file">
    </div>
</body>
<script>
    //按钮 显示图片节点  图片质量
    //iphone X 宽带设置为290时崩溃
    compressImg('upface1', 'showimage1', 640, function (src) {
        var imgUrl = src.split(',')[1]
        $.post("http://127.0.0.1/GongJu/activity/1.0/marriage/down_base64", { imgUrl: imgUrl }, function (data) {
            console.log('上传并下载：' + JSON.stringify(data))
        })
    });
</script>
</html>
```

1. 引用exif.min.js 和processImg.min.js 依赖
2. compressImg 设置宽带，实现等比例压缩，减少上传图片的体积
3. 若解析的base64数据量过多，可以设置bodyParser 解析请求数据的大小

```js
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({
    limit: '10mb',
    extended: false
}));
```



## 参考

- [使用ajax提交form表单，包括ajax文件上传](http://www.cnblogs.com/zhuxiaojie/p/4783939.html)