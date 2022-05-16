import React, {useState} from 'react';

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
            <main>
                {props.children}
            </main>
        </React.Fragment>
    )
}



export default Layout;