import React, { useEffect } from 'react'
import { tokenInstance } from '../../http-common';
import Dashboard from './Dashboard';
import Sidenav from './Sidenav';

const Layout = (props) => {
    // useEffect(()=> {
    //     tokenInstance.get(`/getInfo/allUser`)
    //     .then((res) => {  
    //         console.log(res);             
            
    //     })	                                   
    //     .catch((e) => {  
    //         console.log(e);             
            
    //     });	                               
    
        
     

    // }, [])
    

    return (
        <>

            <Sidenav />
            <Dashboard comp = {props.component}/>
        </>

    );
}

export default Layout;