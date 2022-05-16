import React from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';


const Header = (props) => {
        return(
            <React.Fragment>
                    <Navbar sticky="top" expand='md'>
                        <div className='container'>
                            <div className='row'>
                                <NavbarBrand className='navbar-logo' href='/' >
                                    <img src='/assets/images/logo-one.png' alt='logo image' className='logo'/>
                                </NavbarBrand>
                                <NavbarToggler onClick = {props.onNav}/>
                                <Collapse isOpen={props.navOpen} navbar className=''>
                                    <Nav navbar className="">
                                            <NavItem>
                                                <NavLink className='nav-link' to='/home'>
                                                    Home
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className='nav-link' to='/cooks'>
                                                    Cooks
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className='nav-link' to='/becomecook'>
                                                    Become Cook
                                                </NavLink>
                                            </NavItem>
                                    </Nav>
                                </Collapse>
                            </div>
                        </div>
                    </Navbar>
            </React.Fragment>
    )
}
export default Header