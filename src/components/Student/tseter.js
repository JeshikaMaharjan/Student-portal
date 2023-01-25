import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import {useNavigate, useLocation } from 'react-router-dom';
import '../css/Login.css';
import SERAlogo from './image/SERAlogo.svg';
import {basicInstance} from '../http-common';

const LOGIN_URL = '/login';

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    //from has the path where the user wanted to go.

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])
    //set the focus on that first input when component loads

    useEffect(() => {
        setErrMsg('');
    }, [username, password])
    // empty out error message if user changes their inputs


    function postData(){
        e.preventDefault();
        const postData = {  
            username: username.current.value,
            password: password.current.value,       
        };
        //trial
        // const roles = 1
        // setAuth({ username, password, roles })
        // console.log(username, password, roles)

        try {
            const response = basicInstance.post(LOGIN_URL, postData);
            console.log(JSON.stringify(response?.data));            
            // const accessToken = response?.data?.accessToken;
            localStorage.setItem('access_token', response.data.access);
            const roles = response?.data?.roles;
            // setAuth({ username, password, roles, accessToken });
            setUserName('');// clearing states after form submission
            setPassword('');
            //setsuccess(true)
            if(from !== '/login'){
                navigate(from, { replace: true }); //navigate to (from) after successful login
            }
            navigate('/profile')

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
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
                    <form >
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <div className="inputBx">
                            <span>Username</span>
                            <input type="text" name=""  
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUserName(e.target.value)}
                            value={username}
                            required
                            placeholder='Enter Username' />
                        </div>
                        <div className="inputBx">
                            <span>Password</span>
                            <input type="password" 
                            name=""                            
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            placeholder='Enter Password' />
                        </div>
                        {/* <div className="remember">
                            <label>
                            <input type="checkbox" name="" /> Remember me
                            </label>
                        </div> */}
                        <div className="inputBx">
                            <button onClick={postData}>Sign In</button>  
                        </div>
                    </form>
                </div>
            </div>        
        </div>
        </>       

    )
}

export default Login





