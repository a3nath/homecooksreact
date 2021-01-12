import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderAboutMedia({media}){
    if (media){
        <React.Fragment>
            <div className="about-container col-sm-4">
                    <div className="media">
                        <i className={media.icon}></i>
                        <div className="media-body">
                            <h3>{media.title}</h3> 
                        </div>
                    </div>
                </div>
        </React.Fragment>
    }
    return <div></div>

}


function About(props){
    const aboutRow = props.about.map(media =>
        { return(
            <div className = 'col-4' key={media.id}>
                <RenderAboutMedia media = {media}/>
            </div>
            
        )}
    )
    return(
        <section>
            <div className='container'>
                <h2>How it works</h2>
                <div className='row'>
                    {aboutRow}
                </div>
            </div>
        </section>
    )
}

export default About;