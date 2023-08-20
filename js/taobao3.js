$(function(){
$(".service").hover(function(){
				//	console.log("ok");
					$(this).children(".tx").stop(false,true).slideDown();
				},function(){
					$(this).children(".tx").stop(false,true).slideUp();
				})
});
//广告轮播
	var i=0,z=0,k=0, timer3=null,timer4=null,timer5=null;//广告2
	var m=document.getElementById("go");
	$(function(){						
		$(".ig").eq(0).show().siblings().hide();  //开始时的显示
		$(".ad").eq(0).show().siblings().hide();  //开始时的显示
		$(".ad2").eq(0).show().siblings().hide();  //开始时的显示
		Showtime1(m);
		Showtime2();
		Showtime3();
		$(".tabs").hover(function(){    //鼠标进入执行的函数，获取下表，显示相应图片，停止定时器
			i=$(this).index();
			Show1();
			clearInterval(timer3);
			timer3=null;
		},function(){Showtime1()});	//鼠标进出执行的函数，启动定时器
		
		$("#ad_2").hover(function(){    //鼠标进入执行的函数，获取下表，显示相应图片，停止定时器
			clearInterval(timer4);
			timer4=null;
		},function(){Showtime2()});	//鼠标进出执行的函数，启动定时器
		
		$("#ad_4").hover(function(){    //鼠标进入执行的函数，获取下表，显示相应图片，停止定时器
			clearInterval(timer5);
			timer5=null;
		},function(){Showtime3()});	//鼠标进出执行的函数，启动定时器
		
		$(".btn1").click(function(){   //按键按下监听事件  停止定时器，i+1,启动show
			clearInterval(timer3);
			(i==0)?i=5:i--;
			Show1();
			Showtime1();
		});
		$(".btn2").click(function(){   //按键按下监听事件  停止定时器，i+1,启动show
			clearInterval(timer3);
			(i==5)?i=0:i++;
			Show1();
			Showtime1();
		});
	});
	function Show1(){		
		$(".ig").eq(i).slideDown(800).siblings().slideUp(800);  //图片显示隐藏特效
		$(".tabs").eq(i).addClass("bg").siblings().removeClass("bg");   ////指示栏显示隐藏特效
		m.innerHTML=i+1;
	};
	function Show2(){
		$(".ad").eq(z).fadeIn(800).siblings().fadeOut(800);  //图片显示隐藏特效
	};
	function Show3(){		
		$(".ad2").eq(k).fadeIn(800).siblings().fadeOut(800);  //图片显示隐藏特效
	};
	function Showtime1(){
		timer3=setInterval(function(){
			
			i++;
			if(i>5)
			i=0;
			Show1();			
		},6000);
	};
	function Showtime2(){
		timer4=setInterval(function(){
			z++;
			if(z==2)
			z=0;
			Show2();
		},15000);
	};
	function Showtime3(){
		timer5=setInterval(function(){
			k++;
			if(k==2)
			k=0;
			Show3();
		},10000);
	};
	
//向左移动广告特效
	var adimg=document.getElementById("adMiddle");	
	var li=document.querySelectorAll(".lm");
	var len=li.length;
	var num=0;
	var timer8=null;
window.onload=function(){	
	var run=document.getElementById("Middle");
	timer8=setInterval(adc,3000);
	run.onmouseover=function(){
		clearInterval(timer8);
		timer8=null;
	};
	run.onmouseout=function(){
		timer8=setInterval(adc,3000);
	};	
}
adimg.addEventListener("webkitTransitionEnd",function(){ //监听事件  ，监听渐变属性完成停止
			if(num==len-1)
			{
				num=0;				
				adimg.style.transition='none';
				adimg.style.left=0+"px";
			}
		});
function adc(){
			num++;	
			if(num>len-1)
			{	
				num=0;				
			}
			adimg.style.left=(-520*num)+"px";
			adimg.style.transition='0.8s';
	}	
adc();	
//飘雪
$(function(){
	var minSnow=5;
	var MaxSnow=100;	
	var speed=900;  //毫秒 	
	var windowwidth=$(document).width();
	var endheight=$(document).height();	
	var falt=$('#snow').html("❄");
	$(function(){		
		task();
	var timer=setInterval(task,speed);
		$(document).click(function(){  //单击事件,不在下雨
			console.log("stop");
			clearInterval(timer);
			timer=null;
		});
		$(document).dblclick(function(callback){  //双击事件,双击下雨
			console.log("go");
			timer=setInterval(task,speed);
		})		
	});
	var task=function(){
			var opac=0.7+Math.random()*0.3;
			var startleft=windowwidth*Math.random();	
			var endtleft=windowwidth*Math.random();
			var size=minSnow+Math.random()*MaxSnow;
			var startleft=windowwidth*Math.random();
		//	console.log(endheight);
			falt.clone().appendTo("body").css({
			"left":startleft,
			"opacity":opac,
			"font-size":size
			}).animate({
				"left":endtleft,
				"top":endheight,
				"opacity":0.2,
				"font-size":size
			},18000,function(){$(this).remove()});
		}
});
		