var count = 0;
var Com = React.createClass({
	getDefaultProps:function(){
		console.log("getDefaultProps","1");
		return {
			count:count
		}
	},
	getInitialState:function(){
		console.log("getInitialState","2");
		return {
			count:count++,
			flag:"ok"
		};
	},
	componentWillMount:function(){
		console.log("componentWillMount","3");
		this.setState({
			flag:"error"
		})
	},
	render:function(){
		console.log("render","4");
		return (
			<div>
				<p>啦啦啦</p>
				<p>计数器props:{this.props.count}</p>
				<p>计数器state:{this.state.count}</p>
				<p>标识:{this.state.flag}</p>
			</div>
		)
	},
	componentDidMount:function(){
		console.log("componentDidMount","5");
		
	}
});
ReactDOM.render(<div className="myCss"><Com></Com><Com></Com><Com></Com><Com></Com><Com></Com><Com></Com></div>,document.getElementById("app"));