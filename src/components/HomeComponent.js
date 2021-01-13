import React from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle} from 'reactstrap';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import {Link} from 'react-router-dom';

function RenderTestCard({test}){
   if(test){
       return(
        <div className="card test-card">
            <div className="card-body">
                <blockquote class="blockquote mb-0">
                    <p>{test.description}</p>
                    <footer className="blockquote-footer">{test.name}</footer>
                </blockquote>
            </div>
        </div>
    )}
   return <div></div>
}

function RenderAboutMedia({media}){
    if (media){
        return(
            <React.Fragment>
            <div className="about-container">
                    <div className="media">
                        <i className={media.icon}></i>
                        <div className="media-body">
                            <h3>{media.title}</h3> 
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )}
    return <div></div>

}

function RenderCookCard({cook}){
    return(
        <Card className='index-cook-card'>
            <CardImg width='100%' src={cook.cookImg} alt={cook.cookName} className='img-fluid d-block cook-img card-img-top'/>
            <CardBody>
                <CardTitle className='card-title cook-name'> 
                    <h3>{cook.cookName}</h3>
                </CardTitle>
                <CardText>
                    {cook.cuisine}
                </CardText>
            </CardBody>

        </Card>
    )}

function Home(props){
    const CookDir = props.cooks.filter(cook => cook.featured).map(cook => {
        return (
            <div className='col-md-4' key={cook.cookNum}>
                <RenderCookCard cook={cook} />
            </div>
        )
    })
    const AboutDir = props.about.map(media =>{ 
        return(
            <div className = 'col-md-4' key={media.id}>
                <RenderAboutMedia media = {media}/>
            </div>
        )
    })
    const TestDir = props.testimonial.map(test => {
        return(
            <div className = 'col-md-3' key={test.id}>
                <RenderTestCard test={test}/>
            </div>
        )
    })
    return(
        <div>
            <section className="about" id="about">
                <div className="container">
                    <h2>How it works</h2>
                    <div className="row how-row">
                        {AboutDir}
                    </div>
                </div>
            </section>
            <section id="cooks" className="section-cooks-month">
                <div className="container card-group index-cook-group">
                    <div className='row'>
                        <h2>Cook Highlight</h2>
                    </div>
                    <div className="row cook-row">
                        {CookDir}
                    </div>
                    <Link to='/cooks'>Explore All Cooks</Link>
                </div>
            </section>
            <section id='testimonials' className='testimonials'>
                <div className="container">
                    <div className='row'>
                        <h2>Testimonials</h2>
                    </div>
                    <div className="row test-row">
                        {TestDir}   
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Home;