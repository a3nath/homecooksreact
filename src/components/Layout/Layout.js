import React, {useState} from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

const Layout = props => {

    const [showSidedrawer, setShowSidedrawer] = useState(false)

    const drawerClose = () => {
        setShowSidedrawer(false)
    }

    const drawerToggle = () => {
        setShowSidedrawer(!showSidedrawer)
    }

    return(
        <React.Fragment>
            <Toolbar 
                DrawerClicked={drawerToggle} 
            />
            <Sidedrawer 
                clicked={drawerClose} 
                show={showSidedrawer} 
            />
            <main className={classes.Content}>
                {props.children}
            </main>
        </React.Fragment>
    )
}



export default Layout;