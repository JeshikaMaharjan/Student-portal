import axios from "axios";

const baseURL = 'http://192.168.1.101:8000/api';

const token = () => localStorage.getItem('access_token');

const basicInstance = axios.create(
    {
        baseURL : baseURL,
    }
);

const tokenInstance = axios.create(
    {
        baseURL : baseURL,
        headers : {
            Authorization : `Bearer ${token()}`,
            'Content-Type' : 'application/json'
        }  ,
        
    }
);

export  {basicInstance,tokenInstance, token};
  

