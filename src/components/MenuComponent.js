import React from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle} from 'reactstrap';


function RenderCookProfile({cook}){
    return(
            <section className='chef-bio'>
                <div className="container">
                    <div className="row">
                        <div className="media chef-media">
                            <div className="col-sm-4">
                                <img src={cook.cookImg} alt={cook.alt} className='rounded img-fluid d-block chef-bio-img'/>
                            </div>
                            <div className="col-sm-6">
                                <div className="media-body">
                                    <h3 className='cook-name'>{cook.cookName}</h3>
                                    <p className='card-text cuisine-name'>{cook.cuisine}</p>
                                    <div className="cook-rating">
                                        <i className="fas fa-star cook-star checked"></i>
                                        <i className="fas fa-star cook-star checked"></i>
                                        <i className="fas fa-star cook-star checked"></i>
                                        <i className="fas fa-star cook-star checked"></i>
                                        <i className="fas fa-star cook-star"></i>
                                    </div>
                                    <p>{cook.description}</p>
                                    <Link to={`${match.path}/${cook.cookNum}`}></Link>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
      
    )
}

function RenderCookMenu({menu}){
    return(
        <div className="card-group cook-menu-group">
                <div className="card menu-card">
                        <img src={menu.img} alt={menu.alt} className="card-img-top"/>
                        <div className="card-body">
                            <h3>{menu.name}</h3>
                            <p>{menu.serving}</p>
                            <div className="spice-rating">
                                <i className="fas fa-pepper-hot"></i>
                                <i className="fas fa-pepper-hot"></i>
                                <i className="fas fa-pepper-hot"></i>
                            </div>
                            <p>{menu.description}</p>
                        </div>
                </div>
        </div>

    )
}

function CookMenu(props){
    const MenuItem = props.map(item => {
        return (
            <div className='row'>
                <RenderCookMenu menu={{item}}/>
            </div>
        )
    })
    const CookProfile = props.map(cook => {
        return(
            <div className='row'>
                <RenderCookProfile cook={{cook}}/>
            </div>
        )
    })

    return (
        <div>
            <div className='row'>
                {RenderCookProfile}
            </div>
            <div className='container'>
                <h2>Menu</h2>
                {MenuItem}
            </div>
        </div>
    )
}




export default CookMenu;