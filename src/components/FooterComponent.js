import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';



const required = val => val && val.length > 1;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Footer extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render(){
        return(
            <div>
                <footer className='site-footer'>
                    <div className='container'>
                        <div className='row footer-row'>
                            <div className='col-4 col-sm-2 offset-1'>
                                <h4>Links</h4>
                                <ul className='list-unstyled'>
                                    <li><Link to='/home' className='footer-link'>Home</Link></li>
                                    <li><Link className='footer-link'></Link></li>
                                </ul>
                            </div>
                            <div className='col-6 col-sm-5 text-center'>
                                <h4>Social</h4>
                                <ul className='list-social'>
                                    <li>
                                        <Link className='btn btn-social-icon btn-instagram' href='http://instagram.com/'><i className='fa fa-nstagram'></i></Link>
                                    </li>
                                    <li>
                                        <Link className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook"></i></Link>
                                    </li>
                                    <li>
                                        <Link className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></Link>
                                    </li>
                                    <li>
                                        <Link className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></Link>
                                    </li>
                                </ul>                                                                   
                            </div>
                            <div>
                                <h4>Contact</h4> 
                                <Link role="button" className="btn btn-link footer-link" href="tel:+12065551234"><i className="fa fa-phone contact-link"></i> 1-206-555-1234</Link><br />
                                <Link role="button" className="btn btn-link footer-link " href="mailto:campsites@nucamp.co"><i className="fa fa-envelope-o contact-link"></i> contact@homecooks.com</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;