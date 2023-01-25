import React, {useState, useRef} from "react";
import {basicInstance} from '../http-common';
import {useNavigate} from 'react-router-dom';
import SERAlogo from './image/SERAlogo.svg';
import '../css/Login.css';

export default function Login(){
    const username = useRef(null);   
    const password = useRef(null); 
    const navigate = useNavigate();   
    
    const [PostResult, setPostResult] = useState(null);

    const fortmatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    };

    async function postData() {
        const postData = {  

            userName: username.current.value,
            password: password.current.value,       
        };

        try {        
            const res = await basicInstance.post("/login", postData);
            localStorage.setItem('access_token', JSON.stringify(res.data.access)); //accesstoken save gareko localstorage ma
            // const newrole = res.data.role;
            console.log(res.data)
             
            setPostResult('Login successful');
            navigate('/admin/profile');
          
                    
        } 
        catch (err) {
            console.log(err)
            setPostResult(fortmatResponse(err.response?.data || err));
            navigate('/login');
        }
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
                        {/* <div className="remember">
                            <label>
                            <input type="checkbox" name="" /> Remember me
                            </label>
                        </div> */}
                        <div className="inputBx">
                            <button onClick={postData}>Sign In</button>  
                            {/* <input type="submit" value="Sign in" name='' /> */}
                        </div>

                    </form>
                </div>
            </div>
        
        </div>
        </>

        // <div id="app" className="container">          
        //     <div className="form-group">
        //         <input type="text" className="form-control" ref={username} placeholder="userName" />
        //     </div>
        //     <div className="form-group">
        //         <input type="text" className="form-control" ref={password} placeholder="password" />
        //     </div>           
        //     <button className="btn btn-sm btn-primary" onClick={postData}>login</button>  
        //     { PostResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{PostResult}</pre></div> }
                      
        // </div>       
    );
}


