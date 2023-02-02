import React, { useRef, useState } from "react";

import { Button, Form, FormGroup, Label, Input, CardHeader } from "reactstrap";
import "../../css/RegForm.css";
import { Card, CardBody } from "reactstrap";
import { useToken } from "../../apis";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Valid Email";
  } else if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

function RegisterStaff() {
  const { tokenInstance } = useToken();
  const userName = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const address = useRef(null);
  const contact = useRef(null);
  const password = useRef(null);
  const role = useRef(null);
  const email = useRef(null);
  const [image, setImage] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const toggle = () => {
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };

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

  async function postData() {
    console.log("postData");
    const postData = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      userName: userName.current.value,
      password: password.current.value,
      address: address.current.value,
      contact_no: contact.current.value,
      role: role.current.id,
      email: email.current.value,
      image: image,
    };

    await tokenInstance
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
      <div className="contain" id="blur">
        <div className="content">
          <Card className="Card">
            <CardHeader className="CardHeader">
              <h1>Registration</h1>
            </CardHeader>
            <CardBody>
              <Form className="RegFormInfo">
                <div className="inputSection">
                  <FormGroup className="name">
                    <Label for="FullName">Full Name</Label>
                    <div className="naming">
                      {/* <Label for="firstName">First Name</Label> */}
                      <Input
                        type="text"
                        name="firstName"
                        id="firstName"
                        innerRef={firstName}
                        placeholder="First Name"
                      />
                      {/* <Label for="lastName">Last Name</Label> */}
                      <Input
                        type="text"
                        name="lastName"
                        id="lastName"
                        innerRef={lastName}
                        placeholder="Last Name"
                      />
                    </div>
                  </FormGroup>
                  <FormGroup className="email">
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      innerRef={email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      placeholder="Enter Email"
                    />
                    <br />
                    {formik.touched.email && formik.errors.email && (
                      <span>{formik.errors.email}</span>
                    )}
                  </FormGroup>

                  <FormGroup className="setIdentity">
                    <Label for="userName">UserName</Label>
                    <Input
                      type="text"
                      name="setuserName"
                      id="setuserName"
                      innerRef={userName}
                      placeholder="Set userName"
                    />
                    {/* </FormGroup> */}
                    {/* <FormGroup> */}
                    <Label for="Password">Password</Label>
                    <Input
                      type="text"
                      name="setPassword"
                      id="setPassword"
                      innerRef={password}
                      placeholder="Set Password"
                    />
                  </FormGroup>
                  <FormGroup className="address">
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

                  <FormGroup className="contact">
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
                    <Label for="staff">Select staff</Label>
                    <Input type="select" name="selectStaff">
                      <option id="2" ref={role}>
                        Account staff
                      </option>
                      <option id="3" ref={role}>
                        Entry staff
                      </option>
                    </Input>
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
                    // onClick={postData}
                    onClick={() => {
                      postData();
                      toggle();
                    }}
                  >
                    Register Staff
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
      <div id="popup">
        <div id="test1" onClick={toggle} className="close">
          +
        </div>
        {postResult && (
          <div role="alert">
            <pre>{postResult}</pre>
          </div>
        )}

        <button id="test1" onClick={toggle}>
          Close
        </button>
      </div>
    </>
  );
}
export default RegisterStaff;
