var React = require("react");
var ReactDOM = require("react-dom");

var HomeHeader = require("./HomeHeader");
var Home1;
var Foot = require("./Foot");
var DetailHeader = React.createClass({
	clickHandle:function(){
		Home1 = require("./Home1");
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<HomeHeader />,document.getElementById("header"))
			ReactDOM.unmountComponentAtNode(document.getElementById("footer"));
			ReactDOM.render(<Foot/>,document.getElementById("footer"))
			ReactDOM.unmountComponentAtNode(document.getElementById("section"));
			ReactDOM.render(<Home1/>,document.getElementById("section"))
			
	},
	render:function(){
		return(
			<ul>
				<li className="back" onClick = {this.clickHandle}>
					返回
				</li>
				<li className="title">
					详情
				</li>
				<li className="more">
					分享
				</li>
			</ul>
		)
	}
});
module.exports = DetailHeader;