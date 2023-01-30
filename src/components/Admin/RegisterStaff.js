import React, { useRef, useState } from "react";
import { tokenInstance } from "../../http-common";
import Scroll from "../Scroll";
import "../../css/Register.css";
import { Button, Form, FormGroup, Label, Input, CardHeader } from "reactstrap";
import "../../css/RegForm.css";
import { Card, CardBody } from "reactstrap";

function RegisterStaff() {
  //   useEffect(()=> {
  //     tokenInstance.get(`/faculty`)
  //     .then((res) => {
  //         console.log(res);

  //     })
  //     .catch((e) => {
  //         console.log(e);

  //     });
  // }, [])

  const userName = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const address = useRef(null);
  const contact = useRef(null);
  const password = useRef(null);
  const [role, setRole] = useState(3);
  const email = useRef(null);
  const [image, setImage] = useState("");

  const convertToBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        console.log("onload");
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        console.log("onerror");
        reject(error);
      };
    });
  };

  const onFileSelected = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage(base64);
    console.log("File");
  };

  console.log({ image });

  const [postResult, setPostResult] = useState(null);

  function postData() {
    console.log("postData");
    const postData = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      userName: userName.current.value,
      password: password.current.value,
      address: address.current.value,
      contact_no: contact.current.value,
      role: role,
      email: email.current.value,
      image: image,
    };

    tokenInstance
      .post(`/user/create`, postData)
      .then((res) => {
        console.log(res);
        console.log("data:", postData);
        setPostResult("Registered successfully.");
      })
      .catch((e) => {
        console.log(e);
        setPostResult("Unsuccessful");
        console.log("data:", postData);
      });
  }

  return (
    <>
      <div>
        <Scroll>
          <Card className="Card">
            <CardHeader className="CardHeader">
              <h1>Registration</h1>
            </CardHeader>
            <CardBody>
              <Form className="RegFormInfo">
                <div className="inputSection">
                  <FormGroup className="name">
                    <Label for="firstName">First Name</Label>
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      innerRef={firstName}
                      placeholder="First Name"
                    />
                    <Label for="lastName">Last Name</Label>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      innerRef={lastName}
                      placeholder="Last Name"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="setAddress">
                      Address
                      <Input
                        type="text"
                        name="Address"
                        id="Address"
                        innerRef={address}
                        placeholder="Enter Address"
                      />
                    </Label>
                  </FormGroup>

                  <FormGroup>
                    <Label for="Contact">Contact no.</Label>
                    <Input
                      type="number"
                      name="Contact"
                      id="ContactInfo"
                      innerRef={contact}
                      placeholder="Enter Mobile Number"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      innerRef={email}
                      placeholder="Enter Email"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="userName">UserName</Label>
                    <Input
                      type="text"
                      name="setuserName"
                      id="setuserName"
                      innerRef={userName}
                      placeholder="Set userName"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input
                      type="text"
                      name="setPassword"
                      id="setPassword"
                      innerRef={password}
                      placeholder="Set Password"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="exampleFile">Photo</Label>
                    <Input
                      type="file"
                      name="file"
                      id="contractFile"
                      label="Image"
                      accept=".jpeg, .png, .jpg"
                      onChange={(e) => onFileSelected(e)}
                    />
                  </FormGroup>
                </div>
                <div className="sub-btn">
                  <Button
                    variant="primary"
                    onClick={postData}
                    // onClick={() => {
                    //   postData();
                    //   msg();
                    // }}
                  >
                    Register Staff
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Scroll>
      </div>
    </>
  );
}
export default RegisterStaff;
