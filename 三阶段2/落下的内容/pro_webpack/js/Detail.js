//引入哦我们的React和ReactDOM模块
var React = require("react");
var ReactDOM = require("react-dom");


var Detail = React.createClass({
	getInitialState:function(){
		//接收 需要渲染的产品的ID，并且把它放于我们的状态中
		console.log("goodsID",this.props.goodsID)
		return {
			goodsID:this.props.goodsID,
			proItem:""
		};
	},
	componentWillMount:function(){
		//加载中使用
		var timer2="";
		var count2 = 0;
		//ajax请求
		var _this = this;
		//请求数据
		$.ajax({
			method:"get",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
			dataType:"JSONP",
			data:{
				goodsID:this.state.goodsID
			},
			beforeSend:function(){
				//此函数就是我们用来提醒用户正在加载时使用的
				//记得在success或者error的时候进行相反饿操作
				timer2 = setInterval(function(){
					count2++;
					console.log(count2)

				},1000)
			},
			success:function(data){
				//取消上面等待的那个效果，实际开发中我们可以使用gif图代替，css3动画代替
				clearInterval(timer2)
				//取出我们需要的数据----查看接下来的逻辑问题思路
				console.log("proDetail",data);
				_this.setState({
					proItem:data[0]
				})
			}
		})
	},
	render:function(){
		console.log("proItem",this.state.proItem);
		var pro = this.state.proItem;
		return (
			<div >
				<img src={pro.goodsListImg}/>
				<p>name:{pro.goodsName}</p>
				<p>price:{pro.price}</p>
				<p>discount:{pro.discount}</p>
				<p>buyNum:{pro.buynumber}</p>
			</div>
		)
	},
});
module.exports = Detail;