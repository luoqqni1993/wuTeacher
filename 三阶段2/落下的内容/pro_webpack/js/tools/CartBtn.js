var React = require("react");
var ReactDOM = require("react-dom");


var Login;
var CartBtn = React.createClass({
	getInitialState:function(){
		console.log("goodsID",this.props.goodsID)

		return {
			goodsID:this.props.goodsID,
			type:this.props.type
		}
	},
	componentWillMount:function(){
		console.log("请求数据"+this.state.goodsID)
	},
	clickHandle:function(){
		
		if(localStorage.getItem("isLogin") != "true"){
			Login = require("./../Login");
			ReactDOM.unmountComponentAtNode(document.getElementById("section"));
			ReactDOM.render(<Login type={this.state.type}/>,document.getElementById("section"))
		}else{
			console.log("可以加入购物车啦")
			$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/updatecar.php",
				data:{
					userID:localStorage.getItem("userID"),
					goodsID:this.state.goodsID,
					number:1
				},
				success:function(data){
					console.log("cart",data)
				}
			});
			
		}
	},
	render:function(){
		console.log("lalalal",this.props.goodsID)
		return(
			<span className="cartBtn " onClick={this.clickHandle} data-goodsID={this.state.goodsID}>
				<i className="iconfont icon-gouwuche"></i>
			</span>
		)
	}
});
module.exports = CartBtn;