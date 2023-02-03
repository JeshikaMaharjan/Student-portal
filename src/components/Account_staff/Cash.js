import React, { useRef, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../../css/Cash.css";
import { useToken } from "../../apis";

function Cash() {
  const { tokenInstance } = useToken();
  const userName = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const faculty = useRef(null);
  // const [faculty, setfaculty] = useState(null) ;
  const batch = useRef(null);
  const semester = useRef(null);
  const billno = useRef(null);
  const amount = useRef(null);
  const type = 2;

  const [postResult, setPostResult] = useState(null);

  async function postData() {
    console.log("postData");
    const postData = {
      userName: userName.current.value,

      semester: semester.current.value,
      amount: amount.current.value,
      type: type,
    };

    await tokenInstance
      .post(`/transaction`, postData)
      .then((res) => {
        console.log(res);
        console.log("data:", postData);
        setPostResult("successful.");
      })
      .catch((e) => {
        console.log(e.response.data.error);
        setPostResult("Unsuccessful");
        console.log("data:", postData);
      });
  }

  return (
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
                <Input
                  type="text"
                  name="username"
                  id="username"
                  innerRef={userName}
                  placeholder="Enter Username"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelectSem">Select Semester</Label>
                <Input
                  type="select"
                  name="selectSem"
                  id="exampleSelectSemester"
                  innerRef={semester}
                >
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
                <Label for="exampleText">Amount</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="exampleText"
                  innerRef={amount}
                />
              </FormGroup>
              {/* <FormGroup>
                                    <Label for="exampleFile">File</Label>
                                    <Input type="file" name="file" id="exampleFile" />
                                </FormGroup> */}
              <div className="btn">
                <Button
                  id="subbtn"
                  onClick={() => {
                    postData();
                  }}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cash;
