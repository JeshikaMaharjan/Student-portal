import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Profile from './components/Admin/Profile';
import Update from './components/Admin/Update';
import Register from './components/Admin/Register';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import RegisterStudent from './components/Admin/RegisterStudent';
import RegisterStaff from './components/Admin/RegisterStaff';
import Search from './components/Admin/Search';
import { NoMatch } from './components/NoMatch';

import Khalti from './components/Khalti/Khalti';
import Home from './components/Admin/Home';
import SideNav from './components/Sidenav';
import { useState } from 'react';
import RegisterRoutes from './components/Admin/RegisterRoutes';

function App() {
  // const role = 0; 
  // setRole(role);
  // function setRole(newrole){
  //   localStorage.setItem('role', newrole);
  // }
  // assignedrole = localStorage.getItem('role');

  // if (assignedrole == 0){
  //   return(
  //     <>
  //     <SideNav/>        
  //     <Routes>
  //       <Route path ='/' element = {<Login/>}/>
  //       <Route path ='/login' element = {<Login/>}/>
  //       <Route path='*' element ={<NoMatch/>}/>
  //     </Routes>

  //     </>
  //   )
  // }

  return ( 
    <>
      <SideNav/>        
      <Routes>
        <Route path ='/' element = {<Login/>}/>
        <Route path ='/login' element = {<Login/>}/>
        <Route path ='home' element = {<Home/>}>
          <Route path ='profile' element = {<Profile/>}/>


          <Route path ='registration/*' element = {<RegisterRoutes/>}/> 
          <Route path ='update' element = {<Update/>}/>
          <Route path ='search' element = {<Search />}/>
        </Route> 

        <Route path ='users' element = {<Users/>}/> 
        <Route path='userId' element= {<UserDetails/>}/> 
        <Route path ='payment' element = {<Khalti/>}/>
        <Route path='*' element ={<NoMatch/>}/>
      </Routes> 
    </>      
  );
}  

export default App;