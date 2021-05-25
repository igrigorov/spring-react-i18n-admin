import {appVersion} from "../../envConfig";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import React, {Component} from "react";

class NavTitleHeader extends Component {

	render() {
		const emptyDiv = <div style={{display: 'flex', width: '15%', justifyContent: 'space-around'}}/>;

		return (
			<div style={{
				display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
				alignItems: 'center', width: '100%', marginBottom: '20px'
			}}>
				{this.props.leftLink ?
					<div style={{display: 'flex', width: '15%',}}>
						<Button variant="contained" startIcon={this.props.leftLink.icon}>
							<Link to={this.props.leftLink.route}>{this.props.leftLink.title}</Link>
						</Button>
					</div>
					: emptyDiv}
				<div style={{display: 'flex', width: '70%', alignItems: 'center', justifyContent: 'space-around'}}>
					<h1>{`${this.props.title} ${appVersion}`}</h1>
				</div>
				{this.props.rightLink ?
					<div style={{display: 'flex', width: '15%',}}>
						<Button variant="contained" endIcon={this.props.rightLink.icon}>
							<Link to={this.props.rightLink.route}>{this.props.rightLink.title}</Link>
						</Button>
					</div>
					: emptyDiv}
			</div>
		)
	}

}

export default NavTitleHeader;
