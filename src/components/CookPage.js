import React from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import faStyles from 'font-awesome/css/font-awesome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPepperHot } from '@fortawesome/free-solid-svg-icons';


function RenderCookMenu({menu}){
    return(
        <div className="card menu-card">
            <img src={menu.image} alt={menu.alt} className="card-img-top"/>
            <div className="card-body menu-card-body">
                <p>{menu.name}</p>
                <p className='menu-card-description'>{menu.description.slice(0,50)}</p>
                <p>Serves: {menu.serving}</p>
                <div className='spiceIcon'>
                    <IconMultiply count={menu.spice} icon={<FontAwesomeIcon icon={faPepperHot}/>}/>
                </div>
            </div>
        </div>
    )
}


function RenderCookReview({review}){
    return(
        <div className='card review-card'>
            <div className='card-body'>
                <div className='card-title' className={review.id}>
                    {review.Description}
                </div>
                <blockquote className="blockquote mb-0">
                    <footer className="blockquote-footer">{review.CustomerName}</footer>   
                </blockquote>
                    
                </div>
            </div>
    )
}


function RenderCookCard(props){

    return(
            <div className="media cookpage-media" key={props.cook.cookNum}>
                <div className="cookpage-media-img">
                    <img src={props.cook.cookImg} alt={props.cook.alt} className='img-fluid d-block cook-bio-img'/>
                </div>
                <div className="cookpage-media-body card-body">
                    <h3 className='cook-name cook-media-text'>{props.cook.cookName}</h3>
                    <p className='card-text cuisine-name cook-media-text'>{props.cook.cuisine}</p>
                    <p className='cook-media-text'>{props.cook.description}</p>
                    <div className="cook-rating cook-media-text ratingIcon">
                        <IconMultiply count={props.cook.rating} icon={<FontAwesomeIcon icon={faStar}/>}/>
                    </div>           
                </div>
            </div>     
        )
};

function IconMultiply(props){
    let count = props.count
    let icon = props.icon
    let iconArr = []
    for (let i = 0; i < count; i++ ){
        iconArr.push(icon)
    }
    return iconArr
}

function CookPage(props){

    const CookMenu = props.menu.map(item =>{
        return(
            <div className='cook-menu-container' key={item.id}>
                <RenderCookMenu menu={item}/>
            </div>
                
        )
    })

    const CookReview = props.review.map(rev => {
        return(
            <div className='cook-review-container' key={rev.id}>
                <RenderCookReview review={rev}/>
            </div>
            
        )
    })

    return (
        <div className='cook-page'>
            <section className='cook-bio'>
                <div className="container">
                    <div className="row">
                        <RenderCookCard cook={props.cook}/>
                    </div>
                </div>
            </section>
            <section className='cook-menu'>
                <div className='container'>
                    <div className='row'>
<<<<<<< HEAD
                        <h2>Men</h2>
=======
                        <h2>Menu</h2>
>>>>>>> b95e322 (commit ui 1)
                    </div>
                    <div className='card-group cook-menu-group row'>
                        {CookMenu}
                    </div>     
                </div>
            </section>
            <section className='cook-review'>
                <div className='container'>
                    <div className='row'>
                        <h2>
                            Customer Reviews
                        </h2>
                    </div>
                    <div className='row review-row card-group'>
                        {CookReview}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CookPage;