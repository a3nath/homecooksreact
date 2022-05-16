import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
        return(
            <React.Fragment>
                <ul className={classes.NavigationItems}>
                    <NavigationItem link='/home'> Home</NavigationItem>
                    <NavigationItem link='/cooks'> Cooks</NavigationItem>
                    <NavigationItem link='/becomecook'> Become Cook</NavigationItem>
                </ul>
            </React.Fragment>
    )
}
export default navigationItems;