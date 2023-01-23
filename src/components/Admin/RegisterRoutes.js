import {Routes,Route} from 'react-router-dom';
import Register from './Register';
import RegisterStaff from "./RegisterStaff";
import RegisterStudent from "./RegisterStudent";

function RegisterRoutes(){
    return(
        <>
         <Routes>
            <Route index element = {<Register/>}/>
            <Route path ='registerstudent' element = {<RegisterStudent/>}/>
            <Route path ='registerstaff' element = {<RegisterStaff />}/>  
        </Routes>
        {/* Registration vitra ko savai routes esma define garera pass gareko element ma  */}
        </>
    )
}
 export default RegisterRoutes;