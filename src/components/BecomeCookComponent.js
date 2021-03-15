import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = val => val && val.length > 1;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class becomeCook extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render(){
        return (
            <section className='becomeCook'>
                <div class='container'>
                    <div className='row'>
                        <h2>Become Cook</h2>
                    </div>
                    <div className='form-row row'>
                        <LocalForm className='becomeCookForm' onSubmit ={values => this.handleSubmit(values)}>
                            <div className='form-group'>
                                <Label className='becomeCookLabel' htmlFor='name'></Label>
                                <Control.text type='text' model='.name' id='name' name='name' className='form-control becomeCookInput' placeholder='Name'
                                validators={{required}}/>
                                <Errors
                                    className='text-danger'
                                    model='.name'
                                    component='div'
                                    messages={{
                                        required:"Name is required"}}
                                />
                            </div>
                            <div className='form-group'>
                                <Label className='becomeCookLabel' htmlFor='location'></Label>
                                <Control.text type='text' model='.location' id='location' name='location' className='form-control becomeCookInput'  placeholder='Location'
                                validators={{required}}/>
                                <Errors className='text-danger' model='.password' component='div'
                                    messages={{
                                        required:'Location is required'}}
                                />
                            </div>
                            <div className='form-group'>
                                <Label className='becomeCookLabel' htmlFor='email'></Label>
                                <Control.text type='email' model='.email' id='email' name='email' className='form-control becomeCookInput' placeholder='Email'
                                validators={{required, isEmail}}/>
                                <Errors
                                    className='text-danger'
                                    model='.email'
                                    component='div'
                                    messages={{
                                        required:"Email address is required",
                                        isEmail: "Valid email address is required"}}
                                />
                            </div>
                            <Button type='submit' className='btn btn-primary becomeCookSubmit' color='primary'>Submit</Button>
                        </LocalForm>
                    </div>
                </div>
            </section>
        )}
}

export default becomeCook;

