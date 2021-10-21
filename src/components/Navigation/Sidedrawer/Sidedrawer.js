import React from 'react';

import classes from './Sidedrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';


const sidedrawer = (props) => {

    let DrawerClass = [classes.Sidedrawer, classes.Close]

    if (props.show) {
        DrawerClass = [classes.Sidedrawer, classes.Open]
    }

    return (
        <React.Fragment>
            {/* <Backdrop BackdropClicked={props.clicked} Backdropshow={props.show}/> */}
            <div className={DrawerClass.join(' ')}>
                <div className={classes.Logo} style={{'height': '11%'}}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems auth={props.auth}/>
                </nav>
            </div>
        </React.Fragment>
        
    )
}

export default sidedrawer;