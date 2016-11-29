//引入我们的React和ReactDom模块
var React = require("react");
var ReactDOM = require("react-dom");
//引入我们需要的组件模块
var Kind ;
var Home1;
var Cart ;
var User ;
var More ;
var Login;
var HomeHeader = require("./HomeHeader")
var KindHeader = require("./KindHeader")
//Foot组件
var Foot = React.createClass({
	getInitialState:function(){
		// var icon = []
		var items = ["首页","分类","购物车","我的","更多"];
		localStorage.setItem("current","0");
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
				Home1 = require("./Home1");
				localStorage.setItem("current","0");
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<HomeHeader/>,document.getElementById("header"))
				//卸载
				ReactDOM.unmountComponentAtNode(document.getElementById("section"));
				//装载
				ReactDOM.render(<Home1/>,document.getElementById("section"))
				break;
			case "1":
				Kind  = require("./Kind");
				localStorage.setItem("current","1");
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<KindHeader/>,document.getElementById("header"))
				ReactDOM.unmountComponentAtNode(document.getElementById("section"));
				ReactDOM.render(<Kind/>,document.getElementById("section"))
				break;
			case "2":
				Cart = require("./Cart");
				localStorage.setItem("current","2");
				ReactDOM.unmountComponentAtNode(document.getElementById("section"));
				ReactDOM.render(<Cart/>,document.getElementById("section"))
				break;
			case "3":
				User = require("./User");
				Login = require("./Login");
				localStorage.setItem("current","3");
				if(localStorage.getItem("isLogin") == "false" || localStorage.getItem("isLogin") == undefined){
					ReactDOM.unmountComponentAtNode(document.getElementById("section"));
					ReactDOM.render(<Login/>,document.getElementById("section"))
				}else{
					ReactDOM.unmountComponentAtNode(document.getElementById("section"));
					ReactDOM.render(<User/>,document.getElementById("section"))
				}
				
				break;
			case "4":
				More = require("./More");
				localStorage.setItem("current","4");
				ReactDOM.unmountComponentAtNode(document.getElementById("section"));
				ReactDOM.render(<More/>,document.getElementById("section"))
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
			arr.push(<li key={i} onClick={this.clickHandle} title={i} className={localStorage.getItem("current")*1 == i ? 'active':''}>{data[i]}</li>)
		}
		return(
			<ul>
				{arr}
			</ul>
		)
	}
})
module.exports = Foot;