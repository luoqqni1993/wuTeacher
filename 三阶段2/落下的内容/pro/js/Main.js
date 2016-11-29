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
ReactDOM.render(<Main></Main>,document.getElementById("app"));
ReactDOM.render(<Home/>,document.getElementById("section"))
ReactDOM.render(<Foot/>,document.getElementById("footer"))
