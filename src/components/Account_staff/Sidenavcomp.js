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
    link:"/accountstaff/profile"
},
{
    title: 'View',
    icon: <PersonAddIcon/>,
    link:"/accountstaff/view"
},
{
    title: 'Search',
    icon: <DescriptionIcon/>,
    link:"/accountstaff/search"
},
{
    title: 'Payment',
    icon: <AutoGraphIcon/>,
    link:"/accountstaff/payment"
}
// ,
// {
    
//     title: 'Log Out',
//     icon: <LogoutIcon/>,
//     link:"/logout"
// }
]