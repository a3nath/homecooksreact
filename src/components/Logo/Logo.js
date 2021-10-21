import React from 'react';

// import logoImg from '/assets/images/logo-one.png'
import classes from './Logo.module.css'


const logo = (props) => (    
    <div className={classes.Logo}>
        <img src='/assets/images/logo-one.png' alt='spiceLogo'/>
    </div>)

export default logo;