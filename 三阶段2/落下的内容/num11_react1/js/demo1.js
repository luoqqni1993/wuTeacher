var Com = React.createClass({
	render:function(){
		return (
			<div>
				<p>我是react,欢迎来学习,记得把引入文件的type改为text/babel</p>
			</div>
		)
	}
});
ReactDOM.render(<Com></Com>,document.getElementById("app"));