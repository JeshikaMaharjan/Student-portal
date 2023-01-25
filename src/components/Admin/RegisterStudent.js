import React, {useRef, useState} from "react";
import {tokenInstance} from  '../../http-common';
import Scroll from "../Scroll";
import '../../css/Register.css'
import '../../css/RegIniForm.css'
// import { token } from "../../http-common";

function RegisterStudent(){
    const userName = useRef(null);
    const firstName = useRef(null);
    const lastName = useRef(null);
    const password = useRef(null);
    const [role, setRole] = useState(3) ;    
    const email = useRef(null);
    const faculty = useRef(null);
    const batch = useRef(null);
    const totalFee = useRef(null);
    const semester = useRef(null);   
    
    const [postResult, setPostResult] = useState(null);
    function msg(){
        console.log(postResult);
    }
   
    function postData() {
        const postData = {    

            firstName: firstName.current.value,
            lastName: lastName.current.value,
            userName: userName.current.value,
            password: password.current.value,       
            role: role,   
            email: email.current.value,
            faculty: faculty.current.value,
            batch: batch.current.value,
            totalFee: totalFee.current.value,
            semester: semester.current.value,
        };
        
        
        try { 
            
            tokenInstance.post(`/user/create`, postData)
            .then((res) => {  
                // console.log(res);             
                setPostResult('Registered successfully.');
            })
            .catch((e) => {
                setPostResult('Unsuccessful');

            })                                  
            
            
        } 
        catch (err) {            
            setPostResult('Unsuccessful');
            // console.log(postResult);
            
        }
        // console.log(postResult);
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
                    <div className="inputBx">
                        <span>Faculty</span>
                        <input type="faculty" name="" ref={faculty}  placeholder='Set Faculty' />
                    </div>
                    <div className="inputBx">
                        <span>Batch</span>
                        <input type="batch" name="" ref={batch}  placeholder='Set Batch' />
                    </div>
                    <div className="inputBx">
                        <span>TotalFee</span>
                        <input type="totalFee" name="" ref={totalFee}  placeholder='Set totalFee' />
                    </div>
                    <div className="inputBx">
                        <span>Semester</span>
                        <input type="semester" name="" ref={semester}  placeholder='Set Semester' />
                    </div>
                    <div className="btnsec">
                          <button id='btn' onClick = { () => {                            
                            postData(); 
                            msg(); 
                        }}>Register Student</button>                          
                    </div>                                   
                </form>
            </div>
        </div>                
        </Scroll>      
        </>        
    )                                  
}
export default RegisterStudent;
                  
                      
            
        


