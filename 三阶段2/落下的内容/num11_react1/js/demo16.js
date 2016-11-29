var count = 0;
var Com = React.createClass({
	getDefaultProps:function(){
//		console.log("getDefaultProps","1");
		return {
			count:count
		}
	},
	getInitialState:function(){
//		console.log("getInitialState","2");
		return {
			dataArr:""
		};
	},
	componentWillMount:function(){
		var that = this;
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/getBanner.php?callback=",
			dataType:"JSONP",
			success:function(data){
				console.log(JSON.parse(data[0].goodsBenUrl)[0])
				var len = data.length;
				var dataArr = [];
				for(var i = 0; i < len; i++){
					dataArr.push(JSON.parse(data[i].goodsBenUrl)[0])
				}
				console.log("data",dataArr)
				that.setState({
					dataArr:dataArr
				})
			}
		});
		
	},
	render:function(){
		console.log("arr",this.state.dataArr)
		var arr = this.state.dataArr;
		var dataArr = [];
		var len = arr.length;
		for(var i = 0; i < len; i++){
			dataArr.push(<div className="swiper-slide" key={i}><img src={arr[i]}/></div>)
		}
		return (
			<div className="swiper-container">
				<div className="swiper-wrapper">
					{dataArr}
				</div>
				<div className="swiper-pagination"></div>		
			</div>
		)
	},
	componentDidUpdate:function(){
		var swiper = new Swiper(".swiper-container",{
			 pagination: '.swiper-pagination',
		})
		setTimeout(function(){
			document.getElementById("app").innerHTML = "我完成啦"
		},3000)
//		var _html = document.getElementById("app").innerHTML;
//		document.getElementById("app").innerHTML += "我完成啦"
	}
});
ReactDOM.render(<div className="myCss"><Com></Com></div>,document.getElementById("app"));