import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
// import becomeCook from './BecomeCookComponent';
import CookMenu from './MenuComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

const mapStateToProps = state => {
    return {
        cooks: state.cooks,
        about: state.about,
        testimonial: state.testimonial,
        menu: state.menu
    };
};


class Main extends Component {
    render (){
        const HomePage = () => {
            return(
                <Home
                about = {this.props.about}
                cooks = {this.props.cooks}
                testimonial = {this.props.testimonial}
                />
        )}
        const cookwithId = ({match}) => {
            return (
                <CookMenu 
                    cook={this.props.cooks.filter(cook => cook.cookNum === +match.params.cookId)}   
                    menu= {this.props.menu.filter(menu => menu.chef === +match.params.cook)}      
                />
            )
        }

        // Problem: How do I assign a cook Id when I click on that cook
        // So, when I click on a cook, it goes to the url

        return(
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path ='/cooks' component={cookwithId}/>
                    <Redirect to='/home'/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));