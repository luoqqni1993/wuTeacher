var React = require("react");
var ReactDOM = require("react-dom");
var CartBtn = require("./tools/CartBtn");
var Detail = require("./Detail");
var DetailFoot = require("./DetailFoot");
var DetailHeader = require("./DetailHeader");
//产品列表
var ProItem = React.createClass({
	clickHandle:function(event){
		console.log(this.refs.proItem)
		//依据ref属性进行获取当前的Dom节点，再依据jQuery获取我们属性title值，该值就是我们需要的用的产品唯一标识goodsID，并且传入产品详情页，产品详情页就可以根据该值进行ajax请求我们的数据
		var goodsID = $(this.refs.proItem).attr("title");
		if(event.target.tagName!="SPAN" && event.target.tagName != "I"){
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader />,document.getElementById("header"))
			ReactDOM.unmountComponentAtNode(document.getElementById("section"));
			//传入产品的ID
			ReactDOM.render(<Detail goodsID={goodsID}/>,document.getElementById("section"))
			ReactDOM.unmountComponentAtNode(document.getElementById("footer"));
			ReactDOM.render(<DetailFoot/>,document.getElementById("footer"))
		}
	},
	render:function(){
//		console.log("222222222222")
//		console.log("item",this.props.pro);
		//这个pro就是我们列表传递过来的数据，我们只需要进行相应的解析即可，这就是这个产品的对象
		var pro = this.props.pro;
		//ref直接点就是用来获取DOM节点时候用的
		return (
			<div className = "proItem" ref="proItem" title={pro.goodsID} onClick={this.clickHandle}>
				<div className = "proImg">
					{/*pro.goodsListImg中的goodsListImg由数据接口提供，不是我们自己随意制定的*/}
					<img src={pro.goodsListImg}/>
					
				</div>
				<div className = "proInfo">
					<p className="proName">
						{pro.goodsName}
					</p>
					<p className="proPrice">
						<b>￥{pro.price}</b><del>￥{pro.discount == 0 ? pro.price : (pro.price/pro.discount*10).toFixed(0)}</del>
					</p>
					<p className="proDisCount">
						{pro.discount == 0 ? "不打" : pro.discount}折
					</p>
					<CartBtn goodsID={pro.goodsID} type="home"/>
				</div>
			</div>
		)
	}
});
module.exports = ProItem;