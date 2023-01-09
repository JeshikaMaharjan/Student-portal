import React from "react";
import UserDetails from "../UserDetails";
import Users from "../Users";

export default function Search(){
    return(
        <>
            <div>
               <Users/>
               <UserDetails/>
            </div>
        </>
    )
}