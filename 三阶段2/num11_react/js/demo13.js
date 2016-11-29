var data = ["1","2","3"];
var Com = React.createClass({
	render:function(){
		var arr = [];
		var len = data.length;
		for(var i = 0; i < len; i++){
			arr.push(<p key={i}>我是第{i+1}个</p>)
		}
		return (
			<div>
				<p >我是父组件</p>
				{arr}
			</div>
		)
	}
});
//name="1628最棒，我就是一个属性而已" 
//test="你感觉怎么样"
ReactDOM.render(<div className="myCss"><Com></Com></div>,document.getElementById("app"));