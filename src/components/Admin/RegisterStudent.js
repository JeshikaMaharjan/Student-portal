import React,{useRef, useState} from "react";
import apiClient from  '../../http-common';


export default function RegisterStudent(){
    const userName = useRef(null);
    const firstName = useRef(null);
    const lastName = useRef(null);
    const password = useRef(null);
    // const role = useRef(null);
    
    const [postResult, setPostResult] = useState(null);

    const fortmatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    };

    async function postData() {
    const postData = {    

        firstName: firstName.current.value,
        lastName: lastName.current.value,
        userName: userName.current.value,
        password: password.current.value,       
    };

    try {        
        const res = await apiClient.post("/register/student", postData, {
        // headers: {
        //   "x-access-token": "token-value",
            
        // },
        });

        const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
        };

        setPostResult(fortmatResponse(result));
    } 
    catch (err) {
        setPostResult(fortmatResponse(err.response?.data || err));
    }
    }

    const clearPostOutput = () => {
    setPostResult(null);
    };

    return (
        <div id="app" className="container">
        <div className="card">
        <div className="card-header">Register Student</div>
        <div className="card-body">
            <div className="form-group">            
            <input type="text" className="form-control" ref={firstName} placeholder="firstName" />
            </div>
            <div className="form-group">
            <input type="text" className="form-control" ref={lastName} placeholder="lastName" />
            </div>
            <div className="form-group">
            <input type="text" className="form-control" ref={userName} placeholder="userName" />
            </div>
            <div className="form-group">
            <input type="text" className="form-control" ref={password} placeholder="password" />
            </div>           
            <button className="btn btn-sm btn-primary" onClick={postData}>Post Data</button>
            <button className="btn btn-sm btn-warning ml-2" onClick={clearPostOutput}>Clear data</button>

            { postResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{postResult}</pre></div> }
        </div>
        </div>
    </div>
    );
}

