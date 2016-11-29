//引入我们的React和ReactDom模块
var React = require("react");
var ReactDOM = require("react-dom");
//引入我们需要的组件模块
var Home1 = require("./Home1");
var Kind = require("./Kind");
var Foot = require("./Foot");
var HomeHeader = require("./HomeHeader");
//引入我们的css模块
require("./../css/main.less");
//主组件
var Main = React.createClass({
	render:function(){
		return (
			<div id="main">
				<header id="header">头部</header>
				<section id="section">内容</section>
				<footer id="footer">底部</footer>
			</div>
		)
	}
});
//渲染
ReactDOM.render(<Main></Main>,document.getElementById("app"));
ReactDOM.render(<HomeHeader/>,document.getElementById("header"))
ReactDOM.render(<Home1/>,document.getElementById("section"))
ReactDOM.render(<Foot/>,document.getElementById("footer"))
