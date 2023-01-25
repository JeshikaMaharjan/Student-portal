import React, {useRef, useState} from "react";
import {tokenInstance} from  '../../http-common';
import Scroll from "../Scroll";
import '../../css/Register.css'
import '../../css/RegIniForm.css'


function RegisterStaff(){
    const userName = useRef(null);
    const firstName = useRef(null);
    const lastName = useRef(null);
    const password = useRef(null);
    const [role, setRole] = useState(2) ;    
    const email = useRef(null);
    
    
    const [postResult, setPostResult] = useState(null);
    
    function postData() {
        const postData = {    

            firstName: firstName.current.value,
            lastName: lastName.current.value,
            userName: userName.current.value,
            password: password.current.value,       
            role: role,   
            email: email.current.value,           
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
                    <div className="inputBx">
                        <span>Email</span>
                        <input type="email" name="" ref={email}  placeholder='Set Email' />
                    </div> 
                    <div className="btnsec">
                            <button id='btn' onClick = { () =>
                            {                                 
                                postData(); 
                                console.log(postResult);                               
                                }}>Register Staff</button>                                                     
                    </div>
                                                         
                </form>
            </div>
        </div>         
        </Scroll>
        </>
    )
}

export default RegisterStaff



