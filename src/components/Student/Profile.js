import React, { useEffect, useState } from 'react'
import { tokenInstance } from '../../http-common';
import {useAuthUser} from 'react-auth-kit'

const Profile =() => {
  const [data,setData] = useState([]);
  const [faculty,setFaculty] = useState([]);

  const auth = useAuthUser()
  
  useEffect(()=> {
    detail();
    async function detail() {
      
      try {        
        // const res = await tokenInstance.get("/details/test1");          
        await tokenInstance.get(`/details/${auth().user}`)
        .then((res) => {
          console.log(res.data)
          const info = res.data
          setData(info) 
        })         

        await tokenInstance.get(`/faculty/${auth().user}`)
        .then((res)=>{
          console.log(res.data)
          const info = res.data.name 
          setFaculty(info)         

        })        
    }    
    catch (err) {          
        console.log(err)         
    }
    }  
  }, [])
  
  return (
          <>        
            <div className="header">
              <div className="greet">
                <div className="message">
                    <div className="greet_mgs">Hey, {data.userName}</div>
                    <div className="back">Welcome back, nice to meet you again.</div>    
                </div>
                <div className="profile-image">
                  <img id="img-profile" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9j5kXSP12ylfgHx30qabxtDu0GAX1cm19TTaKZVA1hONj-t6MfsXechjGt6hyYoPBD4Y&usqp=CAU" alt="demo" rel="norefferer" />
                </div>
               </div> 
            </div>

            <div className="profile_info">
              <div className="infoContainer">
                <div className="infoTitle">
                      Personal Information:
                </div>
                <div className='dash_separator'>
                </div>                    
                <div className="informations">   
                    <div className="fullName">Full Name: {data.firstName} {data.lastName}</div>
                    <div className="userName">UserName: {data.userName}</div>    
                    <div className="contact">Contact: {data.contact_no}</div>
                    <div className="address">Address: {data.address}</div>
                    <div className="email">Email: {data.email}</div>
                    <div className="faculty">Faculty: {faculty}</div>
                </div>
              </div>
            </div>
    </>
  )
}
export default Profile;