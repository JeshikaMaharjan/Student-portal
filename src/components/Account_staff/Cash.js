import React, { useRef, useState }  from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../../css/Cash.css'
import { tokenInstance } from '../../http-common';

function Cash(){
    const userName = useRef(null);
    const firstName = useRef(null);
    const lastName = useRef(null);    
    const faculty= useRef(null) ;    
    // const [faculty, setfaculty] = useState(null) ;    
    const batch = useRef(null);
    const semester = useRef(null);      
    const billno = useRef(null);      
    const amount = useRef(null);      
    
    const [postResult, setPostResult] = useState(null);
    function msg(){
        console.log("msg");
        console.log(postResult);
    }
   
    function postData() {
        console.log("postData");
        const postData = {   
            
            userName: userName.current.value,
            firstName: firstName.current.value,
            lastName: lastName.current.value,     
            faculty: faculty.current.id,
            batch: batch.current.value,            
            semester: semester.current.value,        
            billno: billno.current.value,        
            amount: amount.current.value,        
            
        };
        
        
        
        tokenInstance.post(`/`, postData)
        .then((res) => {  
                console.log(res);             
                console.log("data:",postData);
                setPostResult('successful.');
            })
            .catch((e) => {
                console.log(e);
                setPostResult('Unsuccessful');
                console.log("data:",postData);
            
            })
            msg();  
    }

    return(
        <>
            <div className="cash">
                <div className="cashHeader">
                    <h2>Verify Cash Details</h2>
                </div>
                <div className="cashBody">
                    <div className="cashForm">                         
                        <Form>
                                <FormGroup>
                                    <Label for="username">Username</Label>
                                    <Input type="text" name="username" id="username" innerRef = {userName} placeholder="Enter Username" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="firstName">FirstName</Label>
                                    <Input type="text" name="firstName" id="firstName" innerRef = {firstName} placeholder="Enter FirstName" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="lastName">LastName</Label>
                                    <Input type="text" name="lastName" id="lastName" innerRef = {lastName} placeholder="Enter LastName" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Select Faculty</Label>
                                    <Input type="select" name="select" id="program" innerRef = {faculty} >
                                        <option id = '1'>BCT</option>                                        
                                        <option id = '2'>BCE</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelectSem">Select Semester</Label>
                                    <Input type="select" name="selectSem" id="exampleSelectSemester" innerRef = {semester} >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="billno.">Bill no.</Label>
                                    <Input type="text" name="billno." id="billnum" innerRef = {billno} placeholder="Enter Bill Number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText">Amount</Label>
                                    <Input type="textarea" name="text" id="exampleText" innerRef = {amount}/>
                                </FormGroup>
                                {/* <FormGroup>
                                    <Label for="exampleFile">File</Label>
                                    <Input type="file" name="file" id="exampleFile" />
                                </FormGroup> */}
                            <div className="btn">                            
                                <Button id='subbtn' onClick={() => {postData()}}>Submit</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )    
}
export default Cash;