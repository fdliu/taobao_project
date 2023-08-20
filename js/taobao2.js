//弹窗提示
var adv={
		DISTANCE:0,
		STEPS:400,     //距离400px;
		interval:0,
		step:0,
		msg:null,
		close:null,
		moved:0,
		timer1:null,
		init:function(){
			this.msg=document.getElementById("msg");
			this.DISTANCE=parseFloat(getComputedStyle(this.msg).height);    //div的高
			this.step=this.DISTANCE/this.STEPS;     
			this.move();   //启动移动函数
		},
		move:function(){   //启动定时器
			this.timer1=setInterval(this.moveUp.bind(this)//转移函数的this
			,this.interval);  //设置定时器开始执行时间为0
		},
		moveUp:function(){
			var bottom=parseFloat(getComputedStyle(this.msg).bottom) 
			//获取div底边距离，将字符串转为浮点型
			this.msg.style.bottom=bottom+this.step+"px";  //获取移动步数+底边距赋值给对象属性，实现移动

			if(this.msg.style.bottom=="0px"){
				clearInterval(this.timer1);
				this.timer1=null;
				this.moved=0;
			}					
		},
		movedown:function(){
			var bottom=parseFloat(getComputedStyle(this.msg).bottom) 
			//获取div底边距离，将字符串转为浮点型
			this.msg.style.bottom=bottom-this.step+"px";  //获取移动步数+底边距赋值给对象属性，实现移动
			if(this.msg.style.bottom=="-200px"){
				clearInterval(this.timer1);
				this.timer1=null;
				this.moved=0;
			}					
		},
		onfocu:function() {
			this.timer1=setInterval(this.movedown.bind(this)//转移函数的this
			,this.interval);	   //启动定时器
			}
	};
adv.init();
function moveD(dh){
	if(typeof(dh)=="object")
	adv.onfocu();
}

//漂浮的广告
	var OFFSET=65;  //窗口标题高度
	var img=document.getElementById("floatdiv");
	//设置div起始点坐标
	var w=document.documentElement.clientWidth-180,
		h=document.documentElement.clientHeight-200;
	var x=Math.floor(Math.random()*(w+1)),
		y=Math.floor(Math.random()*(h+1));
	//设置div行进速度
	var xSpeed=1,ySpeed=1;
	//设置图片移动	
	timer2=null;
	function floatdiv(){
			 //比较图片是否到达边界，如查到达边界 改变方向;如未到达边界
			 if(x>w||x<0) xSpeed= -xSpeed;
			 if(y>h||y<0) ySpeed= -ySpeed;	
			 x+=xSpeed; y+=ySpeed;
			 //设置坐标值，起始坐标+速度
			 img.style.top=y+"px";
			 img.style.left=x+"px";	
			 timer2=setTimeout("floatdiv()",20);
	}		
	img.onmouseover=function(){
		clearTimeout(timer2);
		timer2=null;
	}
	img.onmouseout=function(){
		timer2=setTimeout("floatdiv()",20);
	}
	floatdiv();
	var mm=document.querySelector("#floatdiv>a");
	function clo(){
		mm.style.display="none";
	}
	
