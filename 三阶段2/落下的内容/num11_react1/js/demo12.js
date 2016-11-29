var SecondCom = React.createClass({
	render:function(){
		return (
			<p>我是子组件</p>
		)
	}
})
var Com = React.createClass({
	render:function(){
		return (
			<div>
				<p >我是父组件</p>
				<SecondCom/>
			</div>
		)
	}
});
//name="1628最棒，我就是一个属性而已" 
//test="你感觉怎么样"
ReactDOM.render(<div className="myCss"><Com></Com></div>,document.getElementById("app"));