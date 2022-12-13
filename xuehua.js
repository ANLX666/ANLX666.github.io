setInterval(function(){

	var img = $("<img src='./xuehua.png'>");
	
	$("body").append(img);
	var size = parseInt(Math.random()*11)+10;

img.css("width",size+"px");
var w = $(window).width();
var left =parseInt(Math.random()*(w-size));
img.css("left",left+"px");
var top = $(window).height()-size;
img.animate({"top":top+"px"},size*100)

/* .fadeOut(1000,function(){

    //当动画完成时执行此代码，清除缓存

    img.remove();

    //console.log($("img").length);

}); */

},10)