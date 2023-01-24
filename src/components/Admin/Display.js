import Search from "./Search"

const Display = () => {
        // const [UserList,setUserList] = useState(); 
        // const [UserName, setUserName] = useState(); //UserName   
         
        //---------
        const UserList = [
            {id:1,name:'Abhishek Neupane'},
            {id:2, name:'Aishwarya Shrestha'}]
        //---------
    
        // function getAllData(){
        //     try{
        //         const response = tokenInstance('/getInfo');
        //         setUserList(response.data); //data ma student namelist aunu paryo
        //     }
        //     catch(err){
        //         setUserList('empty');
        //         console.log(err.response.data);
        //     }
        // }  
       
         
      return (
            <> 
            <Search details = {UserList}/>            
            </>
        )
    }
    export default Display;