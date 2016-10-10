import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/ActionCreators';

class Login extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.users.length !== this.props.users.length;
	}

	handleSubmit(e) {
		e.preventDefault();

		let user = this.props.users.find((element) => (element.login === this.refs.login.value &&  element.password === this.refs.pwd.value));

		if ( !!user && this.refs.login.value !== this.props.current_user) {
			// SIGN_IN
			this.props.actions.signIn(this.refs.login.value);
			this.context.router.push('/news');
		} else {
			this.refs.error.className = "login-error";
		}
	}

	//enable context
	static contextTypes = {
		router: PropTypes.object.isRequired
	}

	render() {
		return (
			<div className="login-form">
				<div className="app-header">
		          <h1>Sign In</h1>
		        </div>
				<form>
				  <div className="form-group">
				    <label htmlFor="login">Login:</label>
				    <input ref="login" type="text" className="form-control" id="login" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="pwd">Password:</label>
				    <input ref="pwd" type="password" className="form-control" id="pwd" />
				  </div>
				  <div ref="error" className="login-error hidden">
					Data you have entered is incorrect. Please try again.
				  </div>
				  <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

let mapStateToProps = (state) => ({users: state.users, current_user: state.current_user});
let mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actionCreators, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Login);