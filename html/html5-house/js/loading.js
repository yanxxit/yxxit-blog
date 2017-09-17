//分步加载
// window.onload=function() {
//   var oImage1=new Image();
//   oImage1.src="/2013/music2013/Images/upbox_bj.png";
//  }
//进度条ID
var numid = "#loginnum";
var totaljidu=0;
var time=null;
var start=0;/*晃动控制开关*/
function aa(loadingnum2,num) {
	if(totaljidu>=100)
	{
		clearInterval(time);
		return;
	}
    if (loadingnum2 < num) {
		clearInterval(time);
       time= setInterval(function () {
            loadingnum2++;
			totaljidu=loadingnum2;
            if (loadingnum2>=100)
            {
                $(numid).html("加载完毕");
				
            }
            else
            {
                $(numid).html(loadingnum2 + "%");
				
            }
			
			if(loadingnum2>=num)
		   {
				clearInterval(time);
				return;
			}
           
        }, 10)
    }
}
//图片预加载
function loadImages(sources, callback) {
	var count = 0,
	images = {},
	imgNum = 0;
	for (src in sources) {
		imgNum++;
	}
    //数组长度
	var listlength=sources.length;
    //完成数量
    var loadingnum=0;
    var nextloadingnum=0;
    //完成一个加载数量
   var unum= parseInt(100/listlength)+1;
//alert(unum);
   var timer=null;
	for (src in sources) {
		images[src] = new Image();
		images[src].onload = function () {
			
		    nextloadingnum += unum;
		    if (nextloadingnum <= 100) {
				
		        aa(loadingnum, nextloadingnum);
		    }
		    else {
		        aa(loadingnum, 100);
				  callback(images);
				return ;
		    }
		
		    if (++count >= imgNum) {
		        callback(images);
		    }

			loadingnum=nextloadingnum;
		}
		images[src].src = sources[src];
	}
}

loadImages(['images/bottom_box01.gif',
			'images/img/img_1.png',
			'images/img/img_2.png',
			'images/img/img_3.png',
			'images/img/img_3_1_0.png',
			'images/img/img_4.png',
			'images/img/img_5.png',
			'images/img/img_3_11.png',
			'images/img/img_3_12.png',
			'images/img/img_3_13.png',
			'images/img/img_3_14.png',
			'images/img/img_3_15.png',
			'images/img/img_1_2.png',
			'images/img/img_2_2.png',
			'images/img/img_4_2.png',
			'images/img/img_5_2.png'],
function() {
	//回调方法
	$("#loadDiv").stop().delay(500).fadeOut(1000);
	$(".bj_box").stop().delay(1000).fadeIn(1000);
	
	//第三屏动画
	$(".page3_4_1").stop().delay(3000).fadeIn(0);  
	$(".page3_4_2").stop().delay(3500).fadeIn(0);  
	$(".page3_4_3").stop().delay(3200).fadeIn(0);  
	$(".page3_4_4").stop().delay(3800).fadeIn(0);  
	$(".page3_4_5").stop().delay(3300).fadeIn(0);  
	
	//$(".tankuang").stop().delay(4300).fadeIn(0);
	$(".tankuang").click(function(){
		$(this).hide();
		start=1;
	});
	function yourFunction(){
		$(".tankuang").show();
		//setTimeout(yourFunction1,1500); 
	}
	setTimeout(yourFunction,3500); 
	
});
	
	
