import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Carousel} from 'reactstrap';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';



function RenderCookCard(props){
    return(
        <div className='card allcooks-cook-card'>
            <div className="media carousel-cook-media">
                <Link to={`/cooks/${props.cook.cookNum}`} className='cookLink'>
                <CarouselProvider
                    naturalSlideWidth={50}
                    naturalSlideHeight={50}
                    totalSlides={3}
                    isPlaying={true}
                    interval={5000}
                >
                    <Slider>
                        <Slide index={0}>
                            <img className='carousel-img d-block w-100' src={props.cook.cookImg} alt={props.cook.alt}/>
                        </Slide>
                        <Slide index={1}>
                            <img className='carousel-img' src={props.cook.foodImg1} alt='second food image'/>
                        </Slide>
                        <Slide index={2}>
                            <img className='carousel-img' src={props.cook.foodImg2} alt='second food image'/>
                        </Slide>
                    </Slider>  
                    </CarouselProvider> 
                        <div className="carousel-body card-body">
                            <h4 className='cook-name carousel-text'>{props.cook.cookName}</h4>
                            <p className='card-text cuisine-name carousel-text'>{props.cook.cuisine}</p>
                            <p className='card-text carousel-text'>{props.cook.description.slice(0,50)}</p>
                            <p className='card-text carousel-text'>{props.cook.rating}</p>
                        </div>
                </Link>
            </div>
        </div>
    )
}

function CookDir(props) {

    const CookRow =  props.cooks.map(cook => {
        return(
                <div className='cook-card-container' key={cook.cookNum}>
                    <RenderCookCard cook={cook}/>
                </div>
                
        )
    })

    return(
        <section className='section-cookDir'>
                    <div className="container">
                        <div className="row card-group cookdir-cardgroup">
                            {CookRow}
                        </div>
                    </div>
        </section>
    )
};

export default CookDir