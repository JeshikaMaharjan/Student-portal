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
    link:"/admin/profile"
},
{
    title: 'Registration',
    icon: <PersonAddIcon/>,
    link:"/admin/registration"
},
{
    title: 'Search',
    icon: <DescriptionIcon/>,
    link:"/admin/search"
},
{
    title: 'Update',
    icon: <AutoGraphIcon/>,
    link:"/admin/update"
}
]