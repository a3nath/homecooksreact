import React from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderCookMenu({menu}){
    return(
        <div className="card menu-card">
            <img src={menu.image} alt={menu.alt} className="card-img-top"/>
                <div className="card-body">
                    <p>{menu.serving}</p>
                    <div className="spice-rating">
                        <p>{menu.spice}</p>
                    </div>
                        <p>{menu.description}</p>
                </div>
        </div>
    )
}


function RenderCookReview({review}){
    return(
        <div className='card review-card'>
            <div className='card-body'>
                <div className='card-title'>
                    {review.id}
                    <div class="card-subtitle mb-2 muted">
                        {review.CustomerName}
                    </div>
                    <div class="card-text">
                        {review.Description}
                    </div>
                </div>
            </div>
        </div>
    )
}


function RenderCookCard(props){

    return(
            <div className="media cook-media">
                <div className="col-sm-4">
                    <img src={props.cook.cookImg} alt={props.cook.alt} className='rounded img-fluid d-block chef-bio-img'/>
                </div>
                <div className="col-sm-6">
                    <div className="media-body">
                        <h3 className='cook-name'>{props.cook.cookName}</h3>
                        <p className='card-text cuisine-name'>{props.cook.cuisine}</p>
                        <div className="cook-rating">
                            <i className="fas fa-star cook-star checked"></i>
                            <i className="fas fa-star cook-star checked"></i>
                            <i className="fas fa-star cook-star checked"></i>
                            <i className="fas fa-star cook-star checked"></i>
                            <i className="fas fa-star cook-star"></i>
                        </div>
                        <p>{props.cook.description}</p>
                        <p>{props.cook.rating}</p>              
                    </div>
                </div>
            </div>     
        )
};

function CookPage(props){

    const CookMenu = props.menu.map(item =>{
        return(
                <RenderCookMenu menu={item}/>
        )
    })

    const CookReview = props.review.map(rev => {
        return(
            <RenderCookReview review={rev}/>
        )
    })

    return (
        <div>
            <section className='cook-bio'>
                <div className="container">
                    <div className="row">
                        <RenderCookCard cook={props.cook}/>
                    </div>
                </div>
            </section>
            <section className='cook-menu'>
                <div className='container'>
                    <h2>Menu</h2>
                        <div className='card-group cook-menu-group'></div>
                            {CookMenu}
                </div>
            </section>
            <section className='cook-reviews'>
                <div className='container'>
                    <h2>
                        Customer Reviews
                    </h2>
                    <div className='row review-row'>
                        <div className='card-group'>
                            {CookReview}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CookPage;