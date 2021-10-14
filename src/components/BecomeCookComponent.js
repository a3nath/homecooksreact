import React, {Component} from 'react';
import {Button,Label} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length > 0;
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
                        <h3 className='title-row'>Sign up to become a cook</h3>
                    <div className='form-row row'>
                        <LocalForm className='becomeCookForm' onSubmit ={values => this.handleSubmit(values)}>
                            <div className='form-group'>
                                <Label className='becomeCookLabel' htmlFor='name'></Label>
                                <Control.text type='text' model='.name' id='name' name='name' className='form-control becomeCookInput' placeholder='Your Name'
                                validators={{required}}/>
                                <Errors
                                    className='text-danger'
                                    model='.name'
                                    component='div'
                                />
                            </div>
                            <div className='form-group'>
                                <Label className='becomeCookLabel' htmlFor='email'></Label>
                                <Control.text type='email' model='.email' id='email' name='email' className='form-control becomeCookInput' placeholder='Your Email Address'
                                validators={{required, isEmail}}/>
                                <Errors
                                    className='text-danger'
                                    model='.email'
                                    component='div'
                             />
                            </div>
                            <div className='form-group'>
                                <Label className='becomeCookLabel' htmlFor='cuisine'></Label>
                                <Control.text type='text' model='.cuisine' id='cuisne' name='cuisine' className='form-control becomeCookInput' placeholder='Choose Cuisine'
                                validators={{required}}/>
                                <Errors
                                    className='text-danger'
                                    model='.cuisine'
                                    component='div'
                                    
                                />
                            </div>
                            <div className='form-group'>
                                <Label className='becomeCookLabel' htmlFor='location'></Label>
                                <Control.text type='text' model='.location' id='location' name='location' className='form-control becomeCookInput'  placeholder='Your Location'
                                validators={{required}}/>
                                <Errors className='text-danger' model='.location' component='div'
                                />
                            </div>
                            
                            <Button type='submit' className='btn btn-primary becomeCookSubmit' color='primary'>Submit</Button>
                        </LocalForm>
                    </div>
                </div>
            </section>
        )
    }
}

export default becomeCook;

