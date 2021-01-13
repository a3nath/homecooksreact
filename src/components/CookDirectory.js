import React, {Component} from 'react';
import { Link } from 'react-router-dom';


function RenderCookCard(props){
    return(
        <li className='card allcooks-cook-card'>
            <div className="media cook-media">
                <Link to={`/cooks/${props.cook.cookNum}`}>
                    <div className="card-Img">
                        <img src={props.cook.cookImg} alt={props.cook.alt} className='rounded img-fluid d-block chef-bio-img'/>
                    </div>
                    <div className="col-sm-6">
                        <div className="card-body">
                            <h5 className='cook-name'>{props.cook.cookName}</h5>
                            <p className='card-text cuisine-name'>{props.cook.cuisine}</p>
                            <p>{props.cook.description}</p>
                            <p>{props.cook.rating}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </li>
    )
}

function CookDir(props) {
    return(
        props.cooks.map(cook => {
            return(
                <section className='section-choose-cooks'>
                    <div className="container">
                        <div className="row card-group cook-cat">
                            <ul>
                                <RenderCookCard cook={cook}/>
                            </ul>
                        </div>
                    </div>
                </section>
            )
        })
    )
};

export default CookDir