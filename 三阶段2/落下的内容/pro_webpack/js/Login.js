var React = require("react");
var ReactDOM = require("react-dom");
var User,Home1;
var Login = React.createClass({
	clickHandle:function(){
		var type= this.props.type;
		console.log("type",type);
		var userID = $("#userID").val();
		var password = $("#password").val();
		$.ajax({
			method:"get",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+userID+"&password="+password,
			success:function(data){
				console.log("login",data)
				if(data == 0){
					console.log("用户名不存在")
				}else if(data == 2){
					console.log("密码错误")
				}else{
					localStorage.setItem("isLogin","true");
					localStorage.setItem("userID",userID);
					User = require('./User');
					Home1 = require('./Home1');
					if(type == "home"){
						ReactDOM.unmountComponentAtNode(document.getElementById("section"));
					ReactDOM.render(<Home1/>,document.getElementById("section"))
					}else{
						ReactDOM.unmountComponentAtNode(document.getElementById("section"));
					ReactDOM.render(<User/>,document.getElementById("section"))
					}
				}
			}
		})
		
		
//		localStorage.setItem("isLogin","true");
	},
	render:function(){
		return(
			<div>
			<p>登录</p>
			<input type="text" id="userID"/><br/>
			<input type="password" id="password"/><br/>
			<button onClick={this.clickHandle}>登录</button><br/>
			</div>
		)
	}
});
module.exports = Login;