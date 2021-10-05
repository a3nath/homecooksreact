import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import {NavLink, Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


let backstyle = {
    width:"100%",
    height:"100vh",
    backgroundImage:  `url('${process.env.PUBLIC_URL}assets/images/cover.jpg')`,
    top:'0',
    left:'0',
    backgroundSize:'cover'
}

const required = val => val && val.length > 1;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)

// class Header extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             // isNavOpen: false,
//             // isModalOpen:false
//         };

//         // this.toggleNav = this.toggleNav.bind(this);
//         // this.toggleModal = this.toggleModal.bind(this);
//         // this.handleLogin = this.handleLogin.bind(this);
//     }

//     // toggleNav(){
//     //     this.setState({
//     //         isNavOpen: !this.state.isNavOpen
//     //     });
//     // }

//     // toggleModal(){
//     //     this.setState({
//     //         isModalOpen: !this.state.isModalOpen
//     //     });
//     // }

//     // handleLogin(values){
//     //     console.log("Current state is: " + JSON.stringify(values));
//     //     alert("Current state is: " + JSON.stringify(values));

//     // }

//     render(){
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
                                    <span className='Navbar-text nav-login'>
                                            <Button onClick={props.onModal} className='loginBtn'>
                                                <i className='fa fa-sign-in fa-lg'/>
                                                    Log in
                                            </Button>
                                    </span>
                                </Collapse>
                            </div>
                        </div>
                    </Navbar>
                <Modal isOpen={props.modalOpen} toggle={props.onModal}>
                    <ModalHeader toggle={props.onModal}> Login</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={value => props.onLogin(value)}>
                            <div className='form-group'>
                                <Label htmlFor='email'>Email Address</Label>
                                <Control.text type='email' model='.email' id='email' name='email' className='form-control'
                                validators={{required, isEmail}}/>
                                <Errors
                                className='text-danger'
                                model='.email'
                                component='div'
                                messages={{
                                    required:"Email address is required",
                                    isEmail: "Valid email address is required"
                                }}
                                />
                            </div>
                            <div className='form-group'>
                                <Label htmlFor='password'>Password</Label>
                                <Control.text type='password' model='.password' id='password' name='password' className='form-control' 
                                validators={{
                                    required,
                                    minLength:minLength(6),
                                    maxLength:maxLength(15)
                                }}/>
                                <Errors className='text-danger' model='.password' component='div'
                                messages={{
                                    required:'Password is required',
                                    minLength:"Password must be between than 2 and 6 letters",
                                    maxLength: "Password must be between than 2 and 6 letters"
                                }}
                                />
                            </div>
                            <Button type='submit' color='dark'>Login</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )}
// }

export default Header