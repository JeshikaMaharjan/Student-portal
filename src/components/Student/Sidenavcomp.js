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
    link:"/student/profile"
},
{
    title: 'View',
    icon: <PersonAddIcon/>,
    link:"/student/view"
},
{
    title: 'Search',
    icon: <DescriptionIcon/>,
    link:"/student/search"
},
{
    title: 'Payment',
    icon: <AutoGraphIcon/>,
    link:"/student/payment"
}
// ,
// {
    
//     title: 'Log Out',
//     icon: <LogoutIcon/>,
//     link:"/logout"
// }
]