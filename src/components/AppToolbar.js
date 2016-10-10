import React from 'react';
import {Link} from 'react-router';

export default class AppToolbar extends React.Component {
	render() {
		let adminPage = (!!this.props.user && this.props.user.role === 'admin') ? (<span className="admin-page"><Link to="/admin">Admin</Link></span>) : null;
		let navigation = (
				<div className="app-toolbar-navigation">
          			<span><Link to="/">Home</Link></span>
          			{adminPage}
          		</div>
			);
	    let content = (!!this.props.user) ? 
                  (
                  	<div className="app-toolbar">
                  		{navigation}
	                  	<div className="app-toolbar-registration">
		                    <span className="sign-in">Signed as {this.props.user.visible_name}</span>
		                    <span> / </span>
		                    <span onClick={this.props.logOut} className="log-out">Log out</span>
	                    </div>
	                 </div>
                  ) : 
                  (
                  	<div className="app-toolbar">
                  		{navigation}
                  		<div className="app-toolbar-registration">
                    		<span className={"sign-in " + this.props.onLoginClass}><Link to="/login">Sign In</Link></span>
                    	</div>   
                  	</div>
                  );

        return content;
	}
}