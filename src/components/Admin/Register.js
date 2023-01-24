import React, {useRef, useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {Link,Outlet} from 'react-router-dom';
import {tokenInstance} from  '../../http-common';
import Scroll from "../Scroll";
import '../../css/Register.css'
import '../../css/RegIniForm.css'


const Register=()=>{
    const navigate = useNavigate();
    const userName = useRef(null);
    const firstName = useRef(null);
    const lastName = useRef(null);
    const password = useRef(null);
    const [role, setRole] = useState(null) ;    
    
    const [postResult, setPostResult] = useState(null);
    
    function postData() {
        const postData = {    

            firstName: firstName.current.value,
            lastName: lastName.current.value,
            userName: userName.current.value,
            password: password.current.value,       
            role: role,   
        };
        
        try { 
            tokenInstance.post(`/user/create`, postData)
            .then((res) => {               
                setPostResult('Registered successfully.');
            });	        
            
        } 
        catch (err) {            
            setPostResult('Unsuccessful');
        }
    }
    
    
    return(
        <>       
        <Scroll>
        <div className="initialReg">
            <div className="formBox">
                <h2 className="title">Registration</h2>
                <form>
                    <div className="inputBx">
                        <span>First Name</span>
                        <input type="text" name="firstName" ref={firstName} placeholder='Enter First Name' />
                    </div>
                    
                    <div className="inputBx">
                        <span>Last Name</span>
                        <input type="text" name="lastName" ref={lastName}  placeholder='Enter Last Name' />
                    </div>
                    
                    <div className="inputBx">
                        <span>Username</span>
                        <input type="text" name="username" ref={userName}  placeholder='Set Username' />
                    </div>
                    
                    <div className="inputBx">
                        <span>Password</span>
                        <input type="password" name="" ref={password}  placeholder='Set Password' />
                    </div>                                      
                </form>
            </div>
        </div>                    
        
        <div className="container">            
            <div className="midBox">

                <div className="forStudent">  
                    <div className="cardfs">                    
                      
                        <div className="imgsec">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9j5kXSP12ylfgHx30qabxtDu0GAX1cm19TTaKZVA1hONj-t6MfsXechjGt6hyYoPBD4Y&usqp=CAU"/>
                        </div>

                        <div className="btnsec">
                          <button id='btn' onClick = { () => {
                            setRole(3);
                            // postData();                            
                            navigate('/admin/registration/registerstudent', {replace : true})
                            }}>Register Student</button>                          
                        </div>

                    </div>             
                </div>                         
                  
                <div className="forStaff">
                    <div className="cardfst">

                        <div className="imgsec">
                            <img src="https://img.freepik.com/premium-vector/elegant-man-business-suit-with-badge-man-business-avatar-profile-picture-vector-illustration-isolated_625536-1377.jpg"/>
                        </div>

                        <div className="btnsec">
                            <button id='btn' onClick = { () =>
                            { 
                                setRole(2);
                                 // postData();
                                navigate('/admin/registration/registerstaff', {replace : true})
                                
                                }}>Register Staff</button>                                                     
                        </div>

                    </div>
                </div>        
            </div>
        </div>
        </Scroll>
        {console.log(role)}    
        </>
    )
}

export default Register


