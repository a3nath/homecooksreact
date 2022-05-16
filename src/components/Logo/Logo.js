import React from 'react';

import classes from './Logo.module.css'


const logo = (props) => (    
    <div className={classes.Logo}>
        <img src='/assets/images/logo.png' alt='spiceLogo'/>
    </div>)

export default logo;