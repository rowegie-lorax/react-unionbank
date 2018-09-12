import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Header extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<Navbar collapseOnSelect style={{display:"flex", flexDirection:"row"}}>
				<Navbar.Header>
					<Navbar.Brand>
					  <a href="#brand"></a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} href="#">
							Home
						</NavItem>
						<NavDropdown eventKey={2} title="Projects" id="basic-nav-dropdown">
							<MenuItem eventKey={2.1}>Action</MenuItem>
							<MenuItem eventKey={2.2}>Another action</MenuItem>
							<MenuItem eventKey={2.3}>Something else here</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={2.4}> link</MenuItem>
    					</NavDropdown>
						<NavItem eventKey={3} href="#">
							About
						</NavItem>
						<NavItem eventKey={4} href="#">
							Contact
						</NavItem>
						<NavItem eventKey={5} href="#">
							Login
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default Header;	