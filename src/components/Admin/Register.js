import React from "react";
import {Link,Outlet} from 'react-router-dom';

function Register(){     
    return(
      <>
        <Link to={'registerstudent'}>Register New Student Account</Link> <br/>
        <Link to={'registerstaff'}>Register New Staff Account</Link>        
        <Outlet/>
      </>       
    )
  }
export default Register;