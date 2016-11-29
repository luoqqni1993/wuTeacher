var Com = React.createClass({
	getProps:function(type){
		if(this.props[type]){
			return this.props[type];
		}else{
			return type+"去哪啦";
		}
	},
	render:function(){
		var name = this.getProps('name');
		var test = this.getProps('test');
		return (
			<div>
				<p>我是react,欢迎来学习,记得把引入文件的type改为text/babel</p>{name}
				{test}
			</div>
		)
	}
});
//name="1628最棒，我就是一个属性而已" 
//test="你感觉怎么样"
ReactDOM.render(<Com name="1628最棒，我就是一个属性而已" ></Com>,document.getElementById("app"));