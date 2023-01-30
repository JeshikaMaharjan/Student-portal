import React, { useEffect } from 'react'
import { tokenInstance } from '../../http-common';
import Dashboard from './Dashboard';
import Sidenav from './Sidenav';

const Layout = (props) => {
    return (
        <>

            <Sidenav />
            <Dashboard comp = {props.component}/>
        </>
    );
}

export default Layout;