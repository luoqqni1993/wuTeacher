//引入我们的React和ReactDom模块
var React = require("react");
//引入我们需要的组件模块
var Banner1 = require("./home/Banner1");//轮播组件
var ProList = require("./ProList");//首页产品列表组件
var Home = React.createClass({
	render:function(){
		return(
			<div >
				<Banner1/>
				<ProList/>
			</div>
		)
	}
})
//暴漏出去，你想用，你就拿去（但是你要require来用我）
module.exports = Home;