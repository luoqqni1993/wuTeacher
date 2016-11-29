//引入我们的React和ReactDom模块
var React = require("react");
var Banner1 = require("./home/Banner1");//轮播组件
var ProList1 = require("./ProList1")
console.log(ProList1);
var Home1 = React.createClass({
	render:function(){
		return(
			<div >
				<Banner1/>
				<ProList1></ProList1>
			</div>
		)
	}
})
//暴漏出去，你想用，你就拿去（但是你要require来用我）
module.exports = Home1;