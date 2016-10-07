import React from 'react';

export default class NotFound extends React.Component {
	render() {
		return (
			<div className="app container">
		        <div className="app-header">
		          <h1>Sorry</h1>
		        </div>
		        <div className="app-content">
		          <h3>Page not found.</h3>
		        </div>
		    </div>
	     );
	}
}