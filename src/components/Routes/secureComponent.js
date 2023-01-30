import { Route, Routes, useNavigate } from "react-router-dom";
import {useIsAuthenticated} from 'react-auth-kit';
import AdminRoutes from "./AdminRoutes";
import AccountRoutes from "./Account_staffRoutes";
import StudentRoutes from "./StudentRoutes";
import {useAuthUser} from 'react-auth-kit';
import { useEffect, useState } from "react";


export function SecureComponent(){
    const navigate = useNavigate();
    const auth = useAuthUser()
    const isAuthenticated = useIsAuthenticated(); //Returns boolean
    const user = auth().user; // authentication paxi ko user data (esbata role liney)

    if(isAuthenticated()){
        // Redirect to Dashboard
        return(
            <>                 
                <Routes>  
                    <RoleBasedComponent />                        
                </Routes>                
            </>
        )                   
    }
    else {
        // Redirect to Login
        navigate('/login');       
    }

    const RoleBasedComponent = () => {
        const [role,setRole] = useState();
        
        useEffect(() => {
            if(user.role === 1){
                setRole('admin')       
            }
            if(user.role === 2){
                setRole('accountstaff')       
            }
            if(user.role === 3){
                setRole('student')       
            }
            // if(user.role == 1){
            //     setRole('admin')       
            // }


            console.log(role)
        }, [])

        const RoleChecker = (props) => {
            if (props === "admin"){
                return <Route path="/admin/*" element={<AdminRoutes/>} /> 
            }
            if (props === "accountstaff"){
                return <Route path="/accountstaff/*" element={<AccountRoutes/>} />   

            }
            if (props === "student"){ 
                return <Route path="/student/*" element={<StudentRoutes/>} />
            }
            // if (props.allowed == "student"){
            //     return <StudentRoutes/>
            // }
        }

        RoleChecker(role);        
    }

}
                

