var Parent = React.createClass({
	//getInitialState必须带返回值，return object||null
	getInitialState:function(){
		return {
			//定义了一个状态的值，必须写，可以供后修改
			property:""
		}
	},
	changeHandle:function(event){
		console.log(event)//相关的event信息
		console.log(event.target)//<input type="number"/>Dom节点
		console.log(event.target.value)//获取dom节点的值，通过value属性获取
		//修改我们的家产值
		this.setState({
			property:event.target.value
		})
	},
	render:function(){
		return (
			<div>
				<p>我是父亲,我想要给孩子一点家产</p>
				家产:<input type="number" onChange={this.changeHandle} min="0" max="10"/>
				{/*<Child num="350万"/>*/}
				{
					/*
					 将我们的家产作为属性传递给子组件,传递方式为this.state.name(name为你定义的状态名)
					 * */
				}
				<Child num = {this.state.property}/>
			</div>
		)
	}
});
//父组件可以改变子组件的属性值，组件的属性不可以自身修改
//状态可以自身修改，但是我们必须注意修改的时机，可以通过getInitinalStat设置初始状态，在钩子函数（因为你而会引起视图或者数据发生变化的函数-changeHandle）和我们componentWillMount函数中进行修改我们的状态
var Child = React.createClass({
	render:function(){
		return (
			<div>
				<p>我是孩子</p>
				我得到了{this.props.num}的家产
			</div>
		)
	}
})
ReactDOM.render(<Parent></Parent>,document.getElementById("app"));