import React from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle, Jumbotron,} from 'reactstrap';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import {Link} from 'react-router-dom';

let backstyle = {
    width:"100%",
    height:"100vh",
    backgroundImage:  `url('${process.env.PUBLIC_URL}assets/images/cover.jpg')`,
    top:'0',
    left:'0',
    backgroundSize:'cover'
}


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

function RenderCookCard(props){
    console.log(props)
    console.log(props.cook)
    return(
        <Card className='index-cook-card'>
            <CardImg width='100%' src={props.cook.cookImg} alt={props.cook.cookName} className='img-fluid d-block cook-img card-img-top'/>
            <CardBody>
                <CardTitle className='card-title cook-name'> 
                    <h3>{props.cook.cookName}</h3>
                </CardTitle>
                <CardText>
                    {props.cook.cuisine}
                </CardText>
            </CardBody>
        </Card>
    )
}

function Home(props){
    // function CookDir(props){
    //     const cookFeat = props.cooks.filter(cook => cook.featured)[0]
    //     return (
    //         <div className='col-md-4'>
    //             <RenderCookCard cook={cookFeat}/>
    //             <p>AAA</p>
    //         </div>
    //     )
    // }

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
                            <RenderCookCard cook = {props.cooks.filter(cook => cook.featured)[0]}/>
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
        </React.Fragment>
    )
};

export default Home;