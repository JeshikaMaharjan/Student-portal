import axios from "axios";

const baseURL = 'http://192.168.101.81:8000/api';

const basicInstance = axios.create(
    {
        baseURL : baseURL,
        timeout : 5000    
    }
);

const tokenInstance = axios.create(
    {
        baseURL : baseURL,
        timeout : 5000,
        headers : {
            'Authorization' : `Bearer ${localStorage.getItem('access_token')}`,
            'Content-Type' : 'application/json'
        }    
    }
);
export  {basicInstance,tokenInstance};
  

