import {Route,Routes} from 'react-router-dom';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Profile } from './components/Admin/Profile';
import {Update} from './components/Admin/Update';
import Register from './components/Admin/Register';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import RegisterStudent from './components/Admin/RegisterStudent';
import RegisterStaff from './components/Admin/RegisterStaff';
import Search from './components/Admin/Search';
import { NoMatch } from './components/NoMatch';

function App() {
  return (
    <>      
      <Routes>
        <Route path ='/' element = {<Profile/>}/>
        <Route path ='profile' element = {<Profile/>}/>

        <Route path ='registration' element = {<Register/>}>
          <Route index element = {<RegisterStudent/>}/>
          <Route path ='registerstudent' element = {<RegisterStudent/>}/>
          <Route path ='registerstaff' element = {<RegisterStaff />}/>
        </Route>

        <Route path ='update' element = {<Update/>}/>
        <Route path ='search' element = {<Search />}/>
        <Route path ='users' element = {<Users/>}/> 
        <Route path='userId' element= {<UserDetails/>}/> 
        <Route path='*' element ={<NoMatch/>}/>
      </Routes>      
    </>
  
  );
}

export default App;