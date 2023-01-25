import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import AdminRoutes from './components/Routes/AdminRoutes';
import { NoMatch } from './components/NoMatch';
import Khalti from './components/Khalti/Khalti';
import Unauthorized from './components/Unauthorized';
import RequireAuth from './components/RequireAuth';
import AccountRoutes from './components/Routes/Account_staffRoutes';
import StudentRoutes from './components/Routes/StudentRoutes';
// import { basicInstance } from "./http-common";
// import { tokenInstance } from "./http-common";

// import { useEffect } from "react";



const ROLES = {
  'Admin' : 1,
  'Staff': 2,
  'Student':3
}
function App() {
  // useEffect(()=> {
  //   login();
  //   async function login() {
  //     const postData = {  
  //         userName: 'admin',
  //         password: '12345',       
  //     };
    
  //     try {        
  //         const res = await basicInstance.post("/login", postData);
  //         // localStorage.setItem('access_token', JSON.stringify(res.data.access)); //accesstoken save gareko localstorage ma
  //         // const newrole = res.data.role;
  //         console.log(res.data)
           
  //         // setPostResult('Login successful');
  //         // navigate('/profile');
  //     } 
  //     catch (err) {
  //         console.log(err)
  //         // setPostResult(fortmatResponse(err.response?.data || err));
  //         // navigate('/login');
  //     }
  //   }  
  // }, [])
  

// useEffect(()=> {
//   tokenInstance.get('/getInfo/allUser')
//   .then((res) => {  
//       console.log(res);             
      
//   })	                                   
//   .catch((e) => {  
//       console.log(e);             
      
//   });	                               
// }, [])


  // return (<h1>Hello World!</h1>)
  return ( 
    <>
      <Routes>
        {/* public routes */}
        <Route path ='/' element = {<Login/>}/>
        <Route path ='/login' element = {<Login/>}/>
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="accountstaff/*" element={<AccountRoutes />} />          
        <Route path="student/*" element={<StudentRoutes />} />          
        <Route path="admin/*" element={<AdminRoutes />} />          

        {/*  protected routes */}
        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin/*" element={<AdminRoutes />} />          
        </Route>  

        <Route element={<RequireAuth allowedRoles={[ROLES.Staff]} />}>
          <Route path="accountstaff/*" element={<AccountRoutes />} />          
        </Route> 

        <Route element={<RequireAuth allowedRoles={[ROLES.Student]} />}>
          <Route path="student/*" element={<StudentRoutes />} />          
        </Route>         */}

        <Route path ='users' element = {<Users/>}/> 
        <Route path='userId' element= {<UserDetails/>}/> 
        <Route path ='payment' element = {<Khalti/>}/>
        <Route path='*' element ={<NoMatch/>}/>
      </Routes> 
    </>      
  );
}  
//   return ( 
//     <>
//       <SideNav/>        
//       <Routes>
//         <Route path ='/' element = {<Login/>}/>
//         <Route path ='/login' element = {<Login/>}/>
//         <Route path ='home' element = {<Home/>}>
//           <Route path ='profile' element = {<Profile/>}/>


//           <Route path ='registration/*' element = {<RegisterRoutes/>}/> 
//           <Route path ='update' element = {<Update/>}/>
//           <Route path ='search' element = {<Search />}/>
//         </Route> 

//         <Route path ='users' element = {<Users/>}/> 
//         <Route path='userId' element= {<UserDetails/>}/> 
//         <Route path ='payment' element = {<Khalti/>}/>
//         <Route path='*' element ={<NoMatch/>}/>
//       </Routes> 
//     </>      
//   );
// }  

export default App;