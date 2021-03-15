import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import becomeCook from './BecomeCookComponent';
import CookPage from './CookPage';
import CookDir from './CookDirectory';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

const mapStateToProps = state => {
    return {
        cooks: state.cooks,
        about: state.about,
        testimonial: state.testimonial,
        menu: state.menu,
        review: state.review,
        images: state.images
    };
};


class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }

        this.toggleNavHandler = this.toggleNavHandler.bind(this);
        this.toggleModalHandler = this.toggleModalHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
    }

    componentDidMount(){
        fetch(
            'http://localhost:3000/campsites'
        ).then(
            data => data.json()
        )
        .then(
            console.log('Check Did Mount')
        )
    }

    toggleNavHandler = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleModalHandler = () => {
        this.setState({
            isModalOpen: ! this.state.isModalOpen
        })
    }

    loginHandler = (values) => {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }


    render (){
        const HomePage = () => {
            return(
                <Home
                    about = {this.props.about}
                    cooks = {this.props.cooks}
                    testimonial = {this.props.testimonial}
                />
        )}
        const CookMenu = ({match}) => {
            return (
                <CookPage 
                    // 1 cook who matches the clicked cook
                    cook={this.props.cooks.filter(cook => cook.cookNum === +match.params.cookNum)[0]}  
                    menu= {this.props.menu.filter(item => item.cookNum === +match.params.cookNum)}
                    review = {this.props.review.filter(rev => rev.cookNum === +match.params.cookNum)}         
                />
            )
        }

        return(
            <div>
                <Header onNav= {this.toggleNavHandler} onModal = {this.toggleModalHandler} onLogin={this.loginHandler} navOpen={this.state.isNavOpen} modalOpen={this.state.isModalOpen}/>
                <Switch>
                    <Route exact path='/home' component={HomePage}/>
                    <Route exact path ='/cooks' render={() => <CookDir cooks={this.props.cooks}  menu={this.props.menu} images={this.props.images}/>}/>
                    <Route exact path = '/cooks/:cookNum' component={CookMenu}/>
                    <Route exact path ='/becomecook' component={becomeCook}/>
                    <Redirect to='/home'/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));