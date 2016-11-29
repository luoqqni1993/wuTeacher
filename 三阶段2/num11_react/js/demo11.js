var cssStyle = {
	color:"#00f",
	fontSize:"30px"
}


var Com = React.createClass({
	render:function(){
		return (
			<div>
				<p >我是react,欢迎来学习,记得把引入文件的type改为text/babel</p>
				{function(obj){
					if(obj.props.name){
						return obj.props.name;
					}else{
						return "******";
					}
				}(this)}
			</div>
		)
	}
});
//name="1628最棒，我就是一个属性而已" 
//test="你感觉怎么样"
ReactDOM.render(<div style={{background:"#0f0"}}><Com></Com></div>,document.getElementById("app"));