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
    link:"/profile"
},
{
    title: 'Registration',
    icon: <PersonAddIcon/>,
    link:"/registration"
},
{
    title: 'Search',
    icon: <DescriptionIcon/>,
    link:"/search"
},
{
    title: 'Update',
    icon: <AutoGraphIcon/>,
    link:"/update"
}
// ,
// {
    
//     title: 'Log Out',
//     icon: <LogoutIcon/>,
//     link:"/logout"
// }
]