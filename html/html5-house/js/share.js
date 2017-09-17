// JavaScript Document
//微信分享
var _Conf = {
            img: "http://lido2046.com/2014/creative/images/share.jpg",
            w: 100,
            h: 100,
            url: 'http://lido2046.com/2014/creative/index.shtml',
            title: "一套理想居室的自我修养",
            desc: "这应该是最能触动你心的居室大片了--来自丽岛·2046。",<!---->
            appid: '' };

function _ShareFriend() {
    WeixinJSBridge.invoke('sendAppMessage',{
          'appid': _Conf.appid,
          'img_url': _Conf.img,
          'img_width': _Conf.w,
          'img_height': _Conf.h,
          'link': _Conf.url,
          'desc': _Conf.desc,
          'title': _Conf.title
          }, function(res){
            _report('send_msg', res.err_msg);
      })
}
function _ShareTL() {
    WeixinJSBridge.invoke('shareTimeline',{
          'img_url': _Conf.img,
          'img_width': _Conf.w,
          'img_height': _Conf.h,
          'link': _Conf.url,
          'desc': _Conf.desc,
          'title': _Conf.title
          }, function(res) {
          _report('timeline', res.err_msg);
          });
}
function _ShareWB() {
    WeixinJSBridge.invoke('shareWeibo',{
          'content': _Conf.desc,
          'url': _Conf.url,
          }, function(res) {
          _report('weibo', res.err_msg);
          });
}

// 当微信内置浏览器初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
		//隐藏下方工具栏，需要显示顶部导航栏，请把hideToolbar换成showToolbar
		WeixinJSBridge.call('showToolbar');
		//隐藏右上角菜单，需要显示请把hideOptionMenu换成showOptionMenu
		WeixinJSBridge.call('showOptionMenu');
	
        // 发送给好友
        WeixinJSBridge.on('menu:share:appmessage', function(argv){
            _ShareFriend();
      		});

        // 分享到朋友圈
        WeixinJSBridge.on('menu:share:timeline', function(argv){
            _ShareTL();
            });

        // 分享到微博
        WeixinJSBridge.on('menu:share:weibo', function(argv){
            _ShareWB();
      		});
}, false);