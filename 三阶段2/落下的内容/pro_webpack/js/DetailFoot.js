//引入我们的React和ReactDom模块
var React = require("react");
var ReactDOM = require("react-dom");
//引入我们需要的组件模块
var Kind = require("./Kind");
var Home = require("./Home");
var Cart = require("./Cart");
var User = require("./User");
var More = require("./More");
//Foot组件
var DetailFoot = React.createClass({
	getInitialState:function(){
		// var icon = []
		var items = ["介绍","详情","实拍"];
		return {
			items:items,//底部内容
			current:0//索引值当前选中值
		}
	},
	componentWillMount:function(){
		//ajax请求
		// var items1 = ["首页","分类","购物车","我的","更多"];
		// this.setState({
		// 	items:items1
		// })
	},
	//底部点击事件
	clickHandle:function(event){
		console.log(event)
		console.log(event.target)
		console.log(event.target.innerHTML)
		this.setState({
			//更改选中状态的值，标识为title
				current:event.target.title
			})
		//依据title进行我们的更换路由
		switch (event.target.title){
			case "0":
				//卸载
				break;
			default:
				break;
		}
	},
	render:function(){
		//通过循环我们把数据进行进一步解析，并且把它放入一个数组中，供我们渲染页面使用（{arr}）
		console.log(this.state.items)
		var data = this.state.items;
		var len = data.length;
		var arr = [];
		for(var i = 0; i < len; i++){
			//className={this.state.current == i ? 'active':''}通过此进行判断当前是哪一个备选中
			arr.push(<li key={i} onClick={this.clickHandle} title={i} className={this.state.current == i ? 'active':''}>{data[i]}</li>)
		}
		return(
			<ul>
				{arr}
			</ul>
		)
	}
})
module.exports = DetailFoot;