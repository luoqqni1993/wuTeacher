var React = require("react");

var Banner1 = React.createClass({
	getInitialState:function(){
		return {
			//设置的默认的banner图的数据源
			bannerList:""
		}
	},
	componentWillMount:function(){
		//加载中使用
		var timer="";
		var count = 0;
		//_this供我们更换数据源时使用
		var _this = this;
		//ajax请求banner图
		$.ajax({
			method:"get",
			url:"http://datainfo.duapp.com/shopdata/getBanner.php?callback=",
			dataType:"JSONP",
			beforeSend:function(){
				//此函数就是我们用来提醒用户正在加载时使用的
				//记得在success或者error的时候进行相反饿操作
				timer = setInterval(function(){
					count++;
					console.log(count)

				},1000)
			},
			success:function(data){
				//取消上面等待的那个效果，实际开发中我们可以使用gif图代替，css3动画代替
				clearInterval(timer)
				//取出我们需要的数据----查看接下来的逻辑问题思路
				console.log(JSON.parse(data[0].goodsBenUrl)[0]);
				//定义一个空的数组，进行存放我们需要的数据
				var arr = [];
				var len = data.length;
				for(var i = 0; i < len; i++){
					arr.push(<div className="swiper-slide" key={i}><img src={JSON.parse(data[i].goodsBenUrl)[0]}/></div>);
				}
				console.log("arr",arr);
				//更改banner图的数据源,因为我们在ajax请求中更改，不可以直接使用this.setState(),只需重定向即可
				_this.setState({
					//将初始化状态的bannerList更改为我们的arr
					bannerList:	arr
				});
			}
		})
	},
	render:function(){
		console.log("render",this.state.bannerList)
		var data = this.state.bannerList;
		console.log("data",data)
		return (
				<div className="swiper-container">
					<div className="swiper-wrapper">
						{data}
					</div>
					<div className="swiper-pagination"></div>
				</div>
			)
	},
	// componentDidMount:function(){
	// 	//当我们的数据在ajax请求的时候进行加载的，我们就不能使用这个去实例化我们的数据
	// 	//我们需要在组件进行更新完毕之后再去实例化
	// 	var swiper = new Swiper(".swiper-container",{
	// 		pagination:".swiper-pagination"
	// 	})
	// }
	componentDidUpdate:function(){
		var swiper = new Swiper(".swiper-container",{
			loop:true,//循环变换
			pagination:".swiper-pagination",//小点。控制点。分页器
			autoplay:"2000",//自动轮播间隔
			autoplayDisableOnInteraction:false//用户操作之后换可以继续轮播
		})
	}
});
module.exports = Banner1;