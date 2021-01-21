import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Carousel} from 'reactstrap';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';



function RenderCookCard(props){
    return(
        <li className='card allcooks-cook-card'>
            <div className="media carousel-cook-media">
                <Link to={`/cooks/${props.cook.cookNum}`}>
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
                            <h5 className='cook-name'>{props.cook.cookName}</h5>
                            <p className='card-text cuisine-name'>{props.cook.cuisine}</p>
                            <p>{props.cook.description}</p>
                            <p>{props.cook.rating}</p>
                        </div>
                </Link>
            </div>
        </li>
    )
}

function CookDir(props) {

    // let imgArr = []
    // let imgArr2 = []

    // props.cooks.map(cook => { 
       
    //     imgArr = props.menu.filter(item => item.cookNum === cook.cookNum)
    //     imgArr2 = props.menu.map(item => ((item.cookNum === cook.cookNum) ? imgArr2.push(item.image):''))
    //     // props.menu.filter(item => item.cookNum === cook.cookNum).map(element => imgArr2.push(element.image))
    //     console.log(imgArr)
    //     console.log(imgArr2)
    // })

    // console.log('print outside map')
    // console.log(imgArr)
    // // console.log(imgArr2)

    const CookRow =  props.cooks.map(cook => {
        return(
                <RenderCookCard cook={cook}/>
        )
    })

    return(
        <section className='section-cookDir'>
                    <div className="container">
                        <ul className="row card-group cook-row">
                            {CookRow}
                        </ul>
                    </div>
        </section>
    )
};

export default CookDir