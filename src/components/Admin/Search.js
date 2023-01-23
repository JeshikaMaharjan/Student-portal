import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useRef, useState } from 'react';
import { tokenInstance } from '../../http-common';
import '../../css/Search.css'

const SearchResult = () => {
    // const [StudentList,setStudentList] = useState(); 
    const [studentName, setstudentName] = useState(); //StudentName
    

    // function getAllData(){
    //     try{
    //         const response = tokenInstance('/getInfo');
    //         setStudentList(response.data); //data ma student namelist aunu paryo
    //     }
    //     catch(err){
    //         setStudentList('empty');
    //         console.log(err.response.data);
    //     }
    // }
    function searchChange(event){
        setstudentName(event.target.value)
        {console.log(studentName)}
    }
  return (
        <>
        {/* {getAllData} */}
        <div className="header">
            <div className="SearchBarDiv">
                <div className="SearchStudent">                
                    {/* <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        className='SearchPanel'
                        options={StudentList}    
                        sx={{ width: 300 }}                                               
                        renderInput={(params) => <TextField {...params} onChange = {searchChange} label="Search Student" />}
                    /> */}
                    <input type = 'search' placeholder="SEARCH STUDENTS" onChange = {searchChange}/>
                </div>
                
                <div className="SearchBtn">
                    <input type="submit" value="Search" name='' /> 
                </div>
            
            </div>  
        </div>

        <div className="body">
            
        </div>

        </>
    )
}




const StudentList = [
        {id:1,name:'Abhishek Neupane'},
        {id:2, name:'Aishwarya Shrestha'},
        'Amrit Kumal',
        'Amrit Sapkota',
        'Anup Dumre',
        'Heman Das',
        'Jeshika Maharjan',
        'Malisha Maharjan',
        'Nischal Maharjan',
        'Nitish Rajopadhyaya',
        'Pradip Baral',
        'Pravesh Pandey',
        'Rabin Shrestha',
        'Rabindra Adhakari',
        'Rayal Khatri',
        'Roshan Adhikari',
        'Safal Marahatta',
        'Sakshyam Aryal',
        'Sanish Khadgi',
        'Sanjish Maharjan',
        'Subash Shakya',
        'Sujal Maharjan',
        'Suman Basnet',
        'Sumit Deshar',
        'Sumit Sharma',
        'Sushil Kafle',
        'Sushmita Kunwar',
        'Uttam Rajbansi',
        'Asmit Oli'    
 
      ];

export default SearchResult;