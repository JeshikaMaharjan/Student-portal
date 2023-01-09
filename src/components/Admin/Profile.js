import Dashboard from './Dashboard';
import SideNav from '../Sidenav';

export const Profile = () => {
  return (
    <> 
      <SideNav/>     
      <Dashboard />     
      {console.log('Profile')}
    </>
  )
}