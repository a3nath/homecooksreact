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
                <footer className='site-footer'>
                    <div className='container'>
                        <div className='row footer-row'>
                            <div className='links-container footer-list-container'>
                                <h4>Links</h4>
                                <ul className='footer-list-link footer-list'>
                                    <li><Link to='/home' className='footer-link'>Home</Link></li>
                                    <li><Link to='/coonks' className='footer-link'>Cooks</Link></li>
                                    <li><Link to='/becomecook' className='footer-link'>Become Cook</Link></li>
                                </ul>
                            </div>
                            <div className='social-container footer-list-container'>
                                <h4>Social</h4>
                                <ul className='footer-list-social footer-list'>
                                    <li>
                                        <Link className='btn btn-social-icon btn-instagram' href='http://instagram.com/'><i className='fa fa-instagram'></i></Link>
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
                            <div className='contact-container footer-list-container'>
                                <h4>Contact</h4> 
                                <ul className='footer-list-contact footer-list'>
                                    <li>
                                        <Link role="button" className="btn btn-link footer-link" href="tel:+12065551234"><i className="fa fa-phone contact-link"></i> 1-206-555-1234</Link>
                                    </li>
                                    <li>
                                        <Link role="button" className="btn btn-link footer-link " href="mailto:campsites@nucamp.co"><i className="fa fa-envelope-o contact-link"></i> contact@homecooks.com</Link>
                                    </li>                           
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            )
    }
}


export default Footer;