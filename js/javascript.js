$(function(){

//banner轮播
var win=$(".banner_1")[0];
var imgs=$(".slider_pane");
var rans=$(".slider_item");
var haftL=$(".slider_prev")[0];
var haftR=$(".slider_next")[0];
var flag=true;
var num=0;
var t=setInterval(move,3000);
win.onmouseover=function(){
	clearInterval(t);
	haftL.style.display="block";
	haftR.style.display="block";
}
win.onmouseout=function(){
	clearInterval(t);
	t=setInterval(move,3000);
	haftL.style.display="none";
	haftR.style.display="none";
	
}
haftR.onclick=function(){
	move();
}
haftL.onclick=function(){
	moveL();
}
for(var i=0;i<rans.length;i++){
	rans[i].index=i;
    rans[i].onclick=function(){
    	num=this.index;
    	for(var j=0;j<rans.length;j++){
    	animate(imgs[j],{opacity:0},300);
		rans[j].style.background="#3e3e3e";
    	}
    animate(imgs[num],{opacity:1},300);
	rans[num].style.background="#b61b1f";
    }
	}
function move(){
	if(!flag){
		return;
	}
	flag=false;
	num++;
	if(num==imgs.length){
		num=0;
	}
	for(var i=0;i<imgs.length;i++){
		animate(imgs[i],{opacity:0},300,function(){flag=true});
		rans[i].style.background="#3e3e3e";
	}
	animate(imgs[num],{opacity:1},300,function(){flag=true});
	rans[num].style.background="#b61b1f";
}
function moveL(){
	if(!flag){
		return;
	}
	flag=false;
	num--;
	if(num<0){
		num=imgs.length-1;
	}
	for(var i=0;i<imgs.length;i++){
		animate(imgs[i],{opacity:0},300,function(){flag=true});
		rans[i].style.background="#3e3e3e";
	}
	animate(imgs[num],{opacity:1},300,function(){flag=true});
	rans[num].style.background="#b61b1f";
}

//////////////////////////////////////////////////

//1F轮播
// var bans1=$(".f1_banner")[0];
// var imgs1=$(".f1_pane");
// var rans1=$(".f1_slider");
// var imgs1W=parseInt(getStyle(imgs1[0],"width"));
// var index=0;
// for(var i=0;i<imgs1.length;i++){
//    imgs1[i].style.left=imgs1W+"px";
// }
// imgs1[0].style.left=0+"px";
// rans1[0].style.background="#b61b1f";
// var t1=setInterval(move1,1000);
// function move1(){
// 	if(!flag){
// 		return;
// 	}
// 	flag=false;
// 	num++;
// 	if(num==imgs.length){
// 		num=0;
// 	}
// 	imgs1[num].style.left=imgs1W+"px"
// }





})


