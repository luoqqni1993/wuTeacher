var  myScroll;
var pullDownFlag = 0;
var pullUpFlag = 0;
var isTrue = false;
var pageCode = 0;
function loaded(){
	myScroll = new IScroll("#wrapper",{
		/*probeType：1  滚动不繁忙的时候触发
		probeType：2  滚动时每隔一定时间触发
		probeType：3  每滚动一像素触发一次*/
		probeType: 3,
		//        momentum: false,//关闭惯性滑动
		mouseWheel: true, //鼠标滑轮开启
		scrollbars: false, //滚动条可见
		fadeScrollbars: true, //滚动条渐隐
		interactiveScrollbars: true, //滚动条可拖动
		shrinkScrollbars: 'scale', // 当滚动边界之外的滚动条是由少量的收缩
		useTransform: true, //CSS转化
		useTransition: true, //CSS过渡
		bounce: true, //反弹-----切记不要设置为false,否则不会上拉和下拉
		freeScroll: false, //只能在一个方向上滑动
		startX: 0,
		startY: 0
	});
	pllUpAction(pageCode,6);
	pageCode = 1;
	myScroll.on("scroll",judgedPostion);
	myScroll.on("scrollEnd",action);
	
}

//myScroll.y

//scroll ---滚动事件
function judgedPostion(){
//	console.log("我在滚动"+myScroll.y)
//	console.log("我在滚动"+myScroll.maxScrollY)
	if(myScroll.y > 40){//40是指下拉刷新的高度
//		console.log("可以刷新啦");
		pullDownFlag = 1;
		isTrue = true;
		document.getElementById("pullDown").innerHTML = "松开即可刷新";
	}else if(myScroll.y < myScroll.maxScrollY - 40){//40是指上拉加载的高度
//		console.log("可以加载啦");
		pullUpFlag = 1;
		isTrue = true;
		if(pageCode > 2){
			document.getElementById("pullUp").innerHTML = "没有更多内容了";
		}else{
			document.getElementById("pullUp").innerHTML = "松开即可加载";
		}
	}else{
//		console.log("你消停会吧")
		isTrue = false;
//		document.getElementById("pullDown").innerHTML = "下拉刷新";
//		document.getElementById("pullUp").innerHTML = "上拉加载";
	}
}
//scrollEnd  ---滚动结束事件
function action(){
	console.log("我滚动完了")
	
	if(pullDownFlag == 1){
		console.log("刷新操作");
		pageCode = 0;
		pllDownAction(pageCode,6);
		pageCode++;
		document.getElementById("pullDown").innerHTML = "下拉刷新";
		pullDownFlag = 0;
	}else if(pullUpFlag == 1){
		console.log("加载操作");
		console.log(pageCode)
		
		if(pageCode > 2){
			document.getElementById("pullUp").innerHTML = "没有更多内容了";
		}else{
			pllUpAction(pageCode,6);
			pageCode++;
			document.getElementById("pullUp").innerHTML = "上拉加载";
		}
		
		
		pullUpFlag = 0;
	}
}
/**
 * 下拉刷新函数，pageCode指第几页，num指每页显示多少个
 * @param {Number} pageCode
 * @param {Number} num
 */
function pllDownAction(pageCode,num){
	setTimeout(function(){
		$(".proList").html("");
		for(var i = pageCode; i < num; i++){
			$(".proList").append("<li>新的第"+i+"项</li>")
		}
		myScroll.refresh();//加载结束之后更新可滚动区域，必须有这个
		
	},3000);
	
	
	
}

/**
 * 上拉加载函数，pageCode指第几页，num指每页显示多少个
 * @param {Number} pageCode
 * @param {Number} num
 */
function pllUpAction(pageCode,num){
	setTimeout(function(){
		for(var i = pageCode*num; i < pageCode*num + num; i++){
			$(".proList").append("<li>新的第"+i+"项</li>")
		}
		myScroll.refresh();//加载结束之后更新可滚动区域，必须有这个
		
	},3000);
	
}


/**
 * 这是一个加法函数,eg:add(2,3),结果就是5
 * @param {Number} a
 * @param {Number} b
 */
function add(a,b){
	return a+b;
}
