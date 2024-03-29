import React from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle, Jumbotron} from 'reactstrap';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

let backstyle = {
    width:"100%",
    height:"100vh",
    backgroundImage:  `url('${process.env.PUBLIC_URL}assets/images/cover.jpg')`,
    top:'0',
    left:'0',
    backgroundSize:'cover'
}

function RenderAboutMedia({media}){
    if (media){
        return(
                <div className="about-container">
                    <div className="media">
                        <FontAwesomeIcon icon={media.icon} className='about-icon'/>
                        <div className="about-media-body media-body">
                            <h3>{media.title}</h3> 
                        </div>
                    </div>
                </div>
    )}
    return <div></div>
}

function RenderCookHighlight(props){
    return( 
        <div className='highlight-row row'>
            <div className='highlight-carousel-container'>
                <CarouselProvider className='highlight-carousel'
                    naturalSlideWidth={50}
                    naturalSlideHeight={50}
                    totalSlides={2}
                    isPlaying={true}
                    interval={5000}>
                    <Slider className='carousel-slider'>
                        <Slide index={0}>
                            <img className='carousel-img carousel-high-img' src={props.cook.foodImg1} alt='cook food image 1'/>
                        </Slide>
                        <Slide index={1}>
                            <img className='carousel-img carousel-high-img' src={props.cook.foodImg2} alt='cook food image 2'/>
                        </Slide>
                    </Slider>  
                </CarouselProvider>
            </div>
             
            <Card className='highlight-card'>
                <CardImg width='100%' src={props.cook.cookImg} alt={props.cook.cookName} className='img-fluid d-block cook-highlight-img cook-img card-img-top'/>
                <CardBody className='highlight-card-body'>
                    <CardTitle className='cook-name highlight-text'> 
                        <h3>{props.cook.cookName}</h3>
                    </CardTitle>
                        <h4 className='cuisine highlight-text'>{props.cook.cuisine}</h4>
                    <CardText className='highlight-text'>
                        {props.cook.description.slice(0,200)}
                    </CardText>
                </CardBody>
        </Card>
        </div>
    )
}

function RenderTestCard({test}){
    if(test){
        return(
         <div className="card test-card">
             <div className="card-body">
                 <blockquote className="blockquote mb-0">
                     <p>{test.description}</p>
                     <footer className="blockquote-footer">{test.name}</footer>
                 </blockquote>
             </div>
         </div>
     )}
    return <div></div>
}
 
function Home(props){
    const AboutDir = props.about.map(media =>{ 
        return(
            <div className = 'col-md-4' key={media.id}>
                <RenderAboutMedia media = {media}/>
            </div>
        )
    })
    const TestDir = props.testimonial.map(test => {
        return(
            <div className = 'test-card-container' key={test.id}>
                <RenderTestCard test={test}/>
            </div>
        )
    })

    return(
        <React.Fragment>
            <Jumbotron fluid className='header-home' style={backstyle}></Jumbotron>
            <div className='grad-sect'>
                <section className="about" id="about">
                    <div className="container">
                            <h2 className='title-row'>HOW IT WORKS</h2>
                        <div className="row how-row">
                            {AboutDir}
                        </div>
                    </div>
                </section>
                <section id="cooks" className="section-highlight">
                    <div className="container">
                        <h2 className='title-row'>COOK HIGHLIGHT</h2>
                    </div>
                        <RenderCookHighlight cook = {props.cooks.filter(cook => cook.featured)[0]}/>
                </section>
                <section id='testimonials' className='testimonials'>
                    <div className="container">
                        <h2 className='title-row'>TESTIMONIALS</h2>
                      <div className="row test-row card-group">
                            {TestDir}   
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
};

export default Home;