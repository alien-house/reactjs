import React from 'react';
import ReactDOM from 'react-dom';
import Login from "./js/AuthExample"
// import ReusableComp from "./js/fundamental/ReusableReactComponents"
// import Children from "./js/fundamental/Children"
// import JSXLiveCompiler from "./js/jsxlivecompiler/JSXLiveCompiler"
const app = document.getElementById('app');
// var Note = React.createClass({
// 	edit(){
// 		alert("Edit!");
// 	},
// 	remove(){
// 		alert("Remove!");
// 	},
// 	render(){
// 		return(
// 			<div className="note">
// 				<p>{this.props.children}</p>
// 				<span>
// 				<button onClick={this.edit}>EDIT</button>
// 				<button onClick={this.remove}>X</button>
// 				</span>
// 			</div>
// 		)
// 	}
// })

ReactDOM.render(
     <Login/>,
app);

