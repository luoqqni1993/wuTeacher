var Com = React.createClass({
	render:function(){
		return (
			<div>
				<p>我是react,欢迎来学习,记得把引入文件的type改为text/babel</p>{this.props.name ? this.props.name : "name去哪啦"}
				{this.props.test}
			</div>
		)
	}
});
//name="1628最棒，我就是一个属性而已" 
ReactDOM.render(<Com test="你感觉怎么样"></Com>,document.getElementById("app"));