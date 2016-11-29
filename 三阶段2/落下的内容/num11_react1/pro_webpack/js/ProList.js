var React = require("react");

var ProItem = require("./ProItem");
//产品列表
var ProList = React.createClass({
	getInitialState:function(){
		return{
			pro:""
		}
	},
	componentWillMount:function(){
		//加载中使用
		var timer1="";
		var count1 = 0;
		//_this供我们更换数据源时使用
		var _this = this;
		//请求数据
		$.ajax({
			method:"get",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
			dataType:"JSONP",
			beforeSend:function(){
				//此函数就是我们用来提醒用户正在加载时使用的
				//记得在success或者error的时候进行相反饿操作
				timer1 = setInterval(function(){
					count1++;
					console.log(count1)

				},1000)
			},
			success:function(data){
				//取消上面等待的那个效果，实际开发中我们可以使用gif图代替，css3动画代替
				clearInterval(timer1)
				//取出我们需要的数据----查看接下来的逻辑问题思路
//				console.log("prolist",data);
				var len = data.length;
//				console.log("data0",data[0]);
				var arr = [];

				for(var i = 0; i < len; i++){
					/*pro={data[i]}就是把当前服务器提供的每一个数据都看做是一个对象，通过给子组件赋值于一个属性pro,这样子组件就可以通过this.props.pro拿到这个对象，继而可以进行下一步操作*/
					arr.push(<ProItem pro={data[i]} key={i}/>);
				}
				_this.setState({
					pro:arr
				})
			}
		})
	},
	render:function(){
		var arr = this.state.pro;
		return (
			<div className="proList">
				{arr}
				{/*<ProItem pro={this.state.pro}/>
								<ProItem pro={this.state.pro}/>*/}
				
			</div>
		)
	}
});
module.exports = ProList;