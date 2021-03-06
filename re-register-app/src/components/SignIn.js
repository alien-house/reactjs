import React from 'react';
import { Redirect } from 'react-router-dom';
import { login } from '../utils/FirebaseAuthService';
// import { Auth } from './Authenticated';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Redirect,
//   withRouter
// } from 'react-router-dom'

// const Auth = {
// 	isAuthenticated: false,
// 	authenticate(cb) {
// 		this.isAuthenticated = true
// 		cb()
// 	},
// 	signout(cb) {
// 		this.isAuthenticated = false
// 		cb()
// 	}
// }

const styles = {}
styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}
export default class SignIn extends React.Component {
	constructor(){
		super();

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
		    redirectToReferrer: false
		};
	}

	componentWillMount() {
		this.userWillTransfer(this.props);
	}

	userWillTransfer(props) {
		// if (!localStorage.getItem('sessionId')) {
		//   this.setState({ isAuthenticated: false });
		// } else {
		//   this.setState({ isAuthenticated: true });
		// }

	}

	handleChange(event) {
    	const target = event.target;
    	const value = target.value;
    	const name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {

		var email = this.state.email;
		var password = this.state.password;

		if (email === undefined || password === undefined){
			alert('please something input');
			return;
		}
		// console.log("email:"+email);
		// console.log("password:"+password);
		login(email,
			password,
			() => { this.setState({ redirectToReferrer: true })}
		);
	}

	render() {
		// console.log(this.props);
		// const { query } = this.props.location;
		// const { params } = this.props.match;
		// const { article } = params;
		// const { date, filter } = query;
		   // this.state.isAuthenticated? (
     //    <Route children={this.props.children} />
     //  ) : (
    	// 		<Redirect to={'/mypage'} />
     //  )
		const { from } = this.props.location.state || { from: { pathname: '/dashboard' } }
		// console.log(this.state);
		const { redirectToReferrer } = this.state

			console.log(this.state);
		if (redirectToReferrer) {
			console.log("ある？");
		  return (
		    <Redirect to={from}/>
		  )
		}
		return (
			<div style={styles.fill}>
			<h1>SignIn</h1>
			<p>Please log in</p>
			<dl>
				<dt>email</dt>
				<dd><input type="text" name="email" value={this.state.value} onChange={this.handleChange} /></dd>
				<dt>pass</dt>
				<dd><input type="text" name="password" value={this.state.value} onChange={this.handleChange} /></dd>
			</dl>
			<button id="btn-signIn" onClick={this.handleSubmit}>Login</button>

			
			</div>
		);
	}

}

// const mapStateToProps = state => ({
// 	sessionId: state.sessionId
// });