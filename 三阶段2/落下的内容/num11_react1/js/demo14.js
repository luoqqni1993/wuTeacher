var data = ["1","2","3"];
var Com = React.createClass({
	render:function(){
		var arr = [];
		var len = data.length;
		for(var i = 0; i < len; i++){
			arr.push(<div className="swiper-slide" key={i}>我是第{i+1}个</div>)
		}
		return (
			<div className="swiper-container">
				<div className="swiper-wrapper">
				{arr}
				{/*	<div className="swiper-slide">我是第1个</div>
					<div className="swiper-slide">我是第2个</div>
					<div className="swiper-slide">我是第3个</div>*/}
				</div>
				<div className="swiper-pagination"></div>		
			</div>
		)
	},
	componentDidMount:function(){
		var swiper = new Swiper(".swiper-container",{
			 pagination: '.swiper-pagination',
		});
		var _html = document.getElementById("app").innerHTML;
		document.getElementById("app").innerHTML += "我完成啦"
		
	}
});
//name="1628最棒，我就是一个属性而已" 
//test="你感觉怎么样"
ReactDOM.render(<div className="myCss"><Com></Com></div>,document.getElementById("app"));