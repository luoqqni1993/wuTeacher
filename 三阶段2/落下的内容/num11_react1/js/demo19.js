var Parent = React.createClass({
	getInitialState:function(){
		return {
			property:""
		}
	},
	changeHandle:function(event){
		var _v = event.target.value;
		this.setState({
			property:_v
		});
	},
	render:function(){
		var that = this;
		return (
			<div>
				<input onChange={this.changeHandle}/>
				状态:	{this.state.property}
				<Child num={this.state.property}/>
				
				
			</div>
		)
	}
});
//父组件可以改变子组件的属性值，组件的属性不可以自身修改
//状态可以自身修改，但是我们必须注意修改的时机，可以通过getInitinalStat设置初始状态，在钩子函数（因为你而会引起视图或者数据发生变化的函数-changeHandle）和我们componentWillMount函数中进行修改我们的状态
//子组件向父组件传值，我们在父组件中设置一个子组件的属性，但是这个属性是作为一个方法被使用num={function(para)}
//在子组件中通过this.props.num(para)这种方法就可以向父组件传值，para就是我们改变子组件自身的状态而获取到的
//只要当前状态发生了改变，不管是子组件中还是父组件中，那么都会导致react的二次渲染
var Child = React.createClass({
	//用来接收父组件所传过来的值，可以修改我们属性和状态
	componentWillReceiveProps:function(a,b){
		console.log("我被修改了")
		console.log("a:",a)
		this.setState({
			num:a.num
		})
		console.log("b:",b)
	},
	getInitialState:function(){
		console.log("state",this.props.num)
		return {
			num:""
		};
	},
	//设置我们的子组件是不是在父组件修改之后可以渲染我们子组件视图
	shouldComponentUpdate:function(){
		//false表示不会去渲染我们的子组件，true表示会		
		return true;
	},
	
	componentWillUpdate:function(){
		console.log("will")
	},
	render:function(){
		console.log("diong")
		return (
			<div>
				<p>我是孩子,我给了父亲{this.props.num}</p>
				{this.state.num}
				<p id="msg"></p>
			</div>
		)
	},
	componentDidUpdate:function(){
		console.log("did")
		$("#msg").append("<h1>我完成啦</h1>")
	}
})
ReactDOM.render(<Parent></Parent>,document.getElementById("app"));