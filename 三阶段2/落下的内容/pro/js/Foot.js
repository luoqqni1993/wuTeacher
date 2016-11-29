var Foot = React.createClass({
	getInitialState:function(){
		var items = ["首页","分类","购物车","我的","更多"];
		return {
			items:items,
			current:0
		}
	},
	componentWillMount:function(){
		//ajax请求
		var items1 = ["首页1","分类1","购物车","我的1","更多1"];
		this.setState({
			items:items1
		})
	},
	clickHandle:function(event){
		console.log(event)
		console.log(event.target)
		console.log(event.target.innerHTML)
		switch (event.target.innerHTML){
			case "首页1":
//				alert(1)
				this.setState({
					current:0
				})
				ReactDOM.unmountComponentAtNode(document.getElementById("section"));
				ReactDOM.render(<Home/>,document.getElementById("section"))
				break;
			case "分类1":
			this.setState({
					current:1
				})
			ReactDOM.unmountComponentAtNode(document.getElementById("section"));
			ReactDOM.render(<Kind/>,document.getElementById("section"))
//				alert(2)
				break;
			default:
				break;
		}
	},
	render:function(){
		console.log(this.state.items)
		var data = this.state.items;
		var len = data.length;
		var arr = [];
		for(var i = 0; i < len; i++){
			arr.push(<li key={i} onClick={this.clickHandle} className={this.state.current == i ? 'active':''}>{data[i]}</li>)
		}
		return(
			<ul>
				{arr}
			</ul>
		)
	}
})