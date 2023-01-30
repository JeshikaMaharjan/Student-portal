import React, {useState, useRef, useEffect} from "react";
import {basicInstance} from '../http-common';
import {Navigate, redirect, useNavigate} from 'react-router-dom';
import SERAlogo from './image/SERAlogo.svg';
import '../css/Login.css';
import { useSignIn } from 'react-auth-kit'

export default function Login(){
    const signIn = useSignIn()    
    const username = useRef(null);   
    const password = useRef(null);     
    const navigate = useNavigate();   
    
    const [PostResult, setPostResult] = useState(null);  

    async function postData() {
        console.log('function')
        const postData = {  
            
            userName: username.current.value,
            password: password.current.value,       
        };
        
        try {        
            console.log('try')
            await basicInstance.post("/login", postData)
            .then((res) => {
                console.log(res)
                console.log("ok")
                if(res.status === 200){
                    localStorage.setItem('access_token', res.data.access);
                    // <Navigate to = "/admin"/>
                    // if(signIn(
                    //     {
                    //         token: res.data.access,   //string                     
                    //         tokenType: "Bearer", //string
                    //         // authState: res.data.authUserState,  //object                          
                            
                    //     }
                    // )){
                    //     console.log(res.data.access)
                    //     setPostResult("Signed in");
                    //     // navigate('/secure');
                    //     // redirect('/secure');
                    //     // <Navigate to = "/secure"/>
                        
                    // }else {
                    //     console.log("error")                         
                    //     setPostResult("Not signed in");
                    //     // <Navigate to = "/login"/>
                    // }
                }               
            })                 
        } 
                
            
        catch (err) {
            console.log('catch')           
            console.log(err)           
        }
        console.log("PostResult:" , PostResult);          
    }   
            
            

    return (
        <>
        <div className="box">   

            <div className="logo">                
                <img src={SERAlogo} alt="Logo" />
            </div>            
        
            <div className="loginBox">
                <div className="formBox">
                    <h2>Login</h2>
                    <form>
                        <div className="inputBx">
                            <span>Username</span>
                            <input type="text" name=""  ref={username} placeholder='Enter Username' />
                        </div>
                        <div className="inputBx">
                            <span>Password</span>
                            <input type="password" name="" ref={password} placeholder='Enter Password' />
                        </div>                        
                        <div className="inputBx">
                            <button onClick={postData}>Sign In</button>                              
                        </div>

                    </form>
                </div>
            </div>
        
        </div>
        </>
        
    );
}

//---------------------------------------------

// export default function Login(){
//     useEffect(()=>{
//         localStorage.setItem("access_token", null);
//         localStorage.setItem("role", null);
//     },[])
//     const username = useRef(null);   
//     const password = useRef(null);     
//     const navigate = useNavigate();   
    
//     const [PostResult, setPostResult] = useState(null);  

//     async function postData() {
//         console.log('function')
//         const postData = {  
            
//             userName: username.current.value,
//             password: password.current.value,       
//         };
        
//         try {        
//             console.log('try')
//             // await basicInstance.post("/login", postData)
//             // .then((res) => {
//             //     localStorage.setItem('access_token', res.data.access); 
//             //     localStorage.setItem('role', res.data.role); 
//             //     setPostResult('Login successful');                
//             // })            
                
//                 localStorage.setItem('role', 1); 
            
//         } 
//         catch (err) {
//             console.log('catch')
//             localStorage.setItem('access_token', null); 
//             localStorage.setItem('role', 'nope'); 
//             console.log(err)
//             // setPostResult(err.response?.data || err);
            
//         }
//         console.log("PostResult:" , PostResult);  

//         // const token =  localStorage.getItem('access_token');
//         const role =  localStorage.getItem('role');

//         // if(token != null){
//             switch (role) {
//                 case 1:
//                     navigate('admin');                    
//                     navigate('unauthorized');                    
//                     break;
//                 case 2:
//                     navigate('accountstaff');                    
//                     break;
//                 case 3:
//                     navigate('student');                    
//                     break;
//                 case 4:
//                     navigate('entrystaff');                    
//                     break;
            
//                 default:
//                     break;
//             }
//         // }   
//         // else{
//         //     navigate('login');
//         //     console.log('Login error');
//         // }
//     }   
            
            

//     return (
//         <>
//         <div className="box">   

//             <div className="logo">                
//                 <img src={SERAlogo} alt="Logo" />
//             </div>            
        
//             <div className="loginBox">
//                 <div className="formBox">
//                     <h2>Login</h2>
//                     <form>
//                         <div className="inputBx">
//                             <span>Username</span>
//                             <input type="text" name=""  ref={username} placeholder='Enter Username' />
//                         </div>
//                         <div className="inputBx">
//                             <span>Password</span>
//                             <input type="password" name="" ref={password} placeholder='Enter Password' />
//                         </div>                        
//                         <div className="inputBx">
//                             <button onClick={postData}>Sign In</button>                              
//                         </div>

//                     </form>
//                 </div>
//             </div>
        
//         </div>
//         </>
        
//     );
// }


