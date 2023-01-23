import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DescriptionIcon from '@mui/icons-material/Description';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import '../../css/Sidenavcomp.css';

export const Sidenavcomp = [
{
    title: 'Profile',
    icon: <AccountCircleIcon/>,
    link:"/home/profile"
},
{
    title: 'Registration',
    icon: <PersonAddIcon/>,
    link:"/home/registration"
},
{
    title: 'Search',
    icon: <DescriptionIcon/>,
    link:"/home/search"
},
{
    title: 'Update',
    icon: <AutoGraphIcon/>,
    link:"/home/update"
}
// ,
// {
    
//     title: 'Log Out',
//     icon: <LogoutIcon/>,
//     link:"/logout"
// }
]