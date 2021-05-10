import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NotFoundPage extends Component {
	/**
	 *Default error page that redirects to main page
	 */
	render() {
		return (
			<div>
				<h1>Error 404 !!Page Not Found!!</h1>
				<Link to="/">Please return to Main Page</Link>
			</div>)
	}
}

export default NotFoundPage;

