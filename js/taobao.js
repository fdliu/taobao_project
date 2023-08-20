//登录
$(function(){
	if (sessionStorage['LoginName']) 
	{
		$(".my_login").html('<span class="lf">欢迎您:'+sessionStorage['LoginName']+'</span>'  <a id='out' class='log lf' href='#'>退出</a>);
	}
});

//新闻滚动
var	interval;
var runner=document.querySelector("#new_top");
var runner2=document.querySelector("#new_top ul:first-child");
var steptop2=runner2.offsetHeight;
window.onload=function(){
	
	runner.onmouseover=function(){
		clearInterval(interval);
		interval
	};
	runner.onmouseout=function(){
		interval=setInterval(scrollText,50);
	};	
}
	
function scrollText(){
	//debugger;
//	var steptop=runner.scrollTop;
//	console.log(steptop);
	runner.scrollTop=runner.scrollTop+1;
	if(runner.scrollTop>=steptop2){   //runner的高度和runner的高度需要设置    111    112-1
		runner.scrollTop=0;		
	}
}
scrollText();
interval=setInterval(scrollText,50);
//	console.log("ok");

var classover=new Date("2017/11/11/ 00:00:00");
	function task(){
		var now=new Date();
		var s=Math.round((classover-now)/1000);
		//console.log(s);
		var hs=Math.floor(s/3600);
		var m=Math.floor(s%3600/60);
		var soc=Math.floor(s%60);
		var ms=now.getMilliseconds();
		var h=hs%24;
	//	var day=now.getDate();
		var day=parseInt(hs/24);
	//	console.log(day,h);  //算天数
		(hs<10)&&(hs="0"+hs);
	//	h<10?h:(h="0"+h);
		(m<10)&&(m="0"+m);
		(soc<10)&&(soc="0"+soc);				
		document.querySelector("#timer span").innerHTML=day+"天"+h+((soc%2==0)?":":" ")+m+((soc%2==0)?":":" ")+soc;
		document.querySelector("#timer a").innerHTML=((soc%2==0)?":":" ")+ms;
		if((h==00&&m==00&&soc==00)||s<0){ 
			 clearInterval(timer);
			 timer=null;
		document.querySelector("#timer").style.display="none"; 
		}
	}
	task();
var timer=setInterval(task,10);



