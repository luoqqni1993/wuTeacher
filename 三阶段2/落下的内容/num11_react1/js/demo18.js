var Parent = React.createClass({
	getInitialState:function(){
		return {
			property:""
		}
	},
	render:function(){
		var that = this;
		return (
			<div>
				<p>我是父亲,我孩子孝敬我的零花钱property</p>
				金额:	{this.state.property}
				<Child num={
					/*我们使用完成函数表达式，结合返回值进行处理我们子向父传值*/
					function(property){
						//修改我们的状态---父亲得到的金额
						console.log("property",property)
						that.setState({
							property:property
						})
					}
				}/>
				
				
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
	getInitialState:function(){
		console.log("state",this.props.num)
		return {
			property:this.props.num
		};
	},
	changeHandle:function(event){
		console.log(this.props.num)
		var _v = event.target.value;
		this.setState({
			property:_v
		});
		this.props.num(_v);
	},
	render:function(){
		return (
			<div>
				<input onChange={this.changeHandle}/>
				<p>我是孩子,我给了父亲{this.state.property}</p>
			</div>
		)
	}
})
ReactDOM.render(<Parent></Parent>,document.getElementById("app"));