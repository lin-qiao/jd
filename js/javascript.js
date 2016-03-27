
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


var lunbo=function(win){
var imgs=win.firstElementChild.children;
var rou=$(".f1_slider",win);
var harfL=$(".f1_harfL",win)[0];  
var harfR=$(".f1_harfR",win)[0];
var num=0;
var flag=true;   //解决轮播快速显示bug 
var index=0;
var imgsW=parseInt(getStyle(imgs[0],"width"));  //获取图片宽度
for(var i=0; i<imgs.length;i++){  
	imgs[i].style.left=imgsW+"px";
}
imgs[0].style.left=0+"px"               //让第一张图片显示
rou[0].style.background='#b61b1f';    //第一个按钮显示

var t=setInterval(movef1R,3000);
win.onmouseover=function(){
	clearInterval(t);
	harfR.style.display="block";
	harfL.style.display="block";
}
win.onmouseout=function(){
	t=setInterval(movef1R,3000);
	harfR.style.display="none";
	harfL.style.display="none";
}
for(var i=0; i<rou.length;i++){     //for
  rou[i].index=i;              //用rou[i]的index来储存i的值
  rou[i].onclick=function(){
    for(var i=0; i<rou.length;i++){        //for让所有的rou圆变为灰色
    	rou[i].style.background='#3e3e3e'; 
    }
    rou[this.index].style.background='#b61b1f';    //让点击的圆（index）变为红色
    imgs[this.index].style.left=imgsW+"px";         //让点击要出现的图片准备好
    animate(imgs[index],{left:-imgsW},400,Tween.Quart.easeIn );       //让当前index图片移出
    animate(imgs[this.index],{left:0},400,Tween.Quart.easeIn);        //让num图片进入
    index=num=this.index;                    // 点击后num index 都为当前this.index
}
}

harfL.onclick=function(){
	movef1L();
}
harfR.onclick=function(){
	movef1R();
}

function movef1R(){
  if(!flag){    //  如果为假 证明门还是关的，直接返回 等执行完之后再处理
    return;     // 如果为真，证明函数已经执行完，可以进入
}
flag=false;       //进入后改为false 也就是把门关上
num++;    
if(num==imgs.length){    
	num=0;
}
  imgs[num].style.left=-imgsW+"px";  //让下一张图片到位准备轮播
  animate(imgs[index],{left:imgsW},400,Tween.Quart.easeIn,function(){  //让当前index图片移出
    flag=true;                  //利用回调函数返回true 证明门已开    
});
  animate(imgs[num],{left:0},400,Tween.Quart.easeIn,function(){   //让num图片进入
  	flag=true;
  });
  for(var i=0; i<imgs.length;i++){
      rou[i].style.background='#3e3e3e';   //for使圆都变灰
  }
    rou[num].style.background='#b61b1f';  //让num图片，也就是当前图片变色
  index=num;           //因为num图片已经进入，所以num赋值给Index

}
function movef1L(){
	if(!flag){
		return;
	}
flag=false;       //解决轮播快速显示bug
num--;    
if(num<0){    
	num=imgs.length-1;
}
  imgs[num].style.left=imgsW+"px";  //让下一张图片到位准备轮播
  animate(imgs[index],{left:-imgsW},400,Tween.Quart.easeIn,function(){  //让当前index图片移出
  	flag=true;         
  });
  animate(imgs[num],{left:0},400,Tween.Quart.easeIn,function(){   //让num图片进入
  	flag=true;
  });
  for(var i=0; i<imgs.length;i++){
      rou[i].style.background='#3e3e3e';   //for使圆都变灰
  }
    rou[num].style.background='#b61b1f';  //让num图片，也就是当前图片变色
  index=num;           //因为num图片已经进入，所以num赋值给Index

}

}
//1F轮播
var win1f=$(".f1_banner")[0]    
lunbo(win1f);

//2f轮播
var win2f=$('.ghmz_centra')[0];
lunbo(win2f);

//3f轮播
var win3f=$('.sliderBan')[0];
lunbo(win3f);

//4f轮播
var win4f=$('.sliderBanf4')[0];
lunbo(win4f);

//5f轮播
var win5f=$('.sliderBanf5')[0];
lunbo(win5f);

//6f 轮播
var win6f=$('.f6_banner')[0];
lunbo(win6f);

//7f 轮播
var win7f=$('.f7_banner')[0];
lunbo(win7f);

var win8f=$('.f8_banner')[0];
lunbo(win8f);

var win9f=$('.f9_banner')[0];
lunbo(win9f);

var win10f=$('.sliderBanf10')[0];
lunbo(win10f);

var win11f=$('.sliderBanf11')[0];
lunbo(win11f);

var win11fb=$('.sliderBanf11b')[0];
lunbo(win11fb);


//节点轮播
var wintt=$('.special_sd')[0];
var boxtt=$('.special_sdU')[0];
var imgstt=boxtt.children;
var imgsttH=imgstt[0].offsetHeight;
var time=setInterval(fn,5000);
function fn(){
	for(var i=0;i<2;i++){
		boxtt.insertBefore(boxtt.lastElementChild,boxtt.firstElementChild);
	}
	boxtt.style.top=-2*imgsttH+35+'px';
	animate(boxtt,{top:35},Tween.Linear);
}

//右浮动窗口



var cl=$('.f1')[0];
var down=$('.dorpdown')[0];
var tab=function(obj,down){
	obj.onmouseover=function(){
		obj.id='f1b';
		down.style.display="block";
	}
	obj.onmouseout=function(){
		obj.id='';
		down.style.display='none';
	}
}
tab(cl,down);

var frw=$('.fr_wdjd')[0];
var downw=$('.fr_wdjd_down')[0];
tab(frw,downw);

var frs=$('.fr_sj')[0];
var downs=$('.dorpdown_sj')[0];
var gh=$('.fr_icons',frs)[0];
	frs.onmouseover=function(){
		frs.id='sj';
		gh.style.right='7px'
		downs.style.display="block";
		frs.style.padding="0 24px";
	}
	frs.onmouseout=function(){
		gh.style.right='8px'
		frs.id='';
		downs.style.display='none';
		frs.style.padding="0 25px";
	}


var frg=$('.fr_wdjd')[1];
var downg=$('.gz-dorpdown')[0];
tab(frg,downg);

var frk=$('.fr_wdjd')[2];
var downk=$('.dorpdown_kf')[0];
tab(frk,downk);
