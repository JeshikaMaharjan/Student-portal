import React, { useEffect, useState } from "react";
import { useAuth } from "../Authentication/auth";
import { useToken } from "../apis";
import { Label } from "reactstrap";
import { useLocation } from "react-router-dom";

const ViewDetails = () => {
  const { tokenInstance } = useToken();
  const [data, setData] = useState([]);
  const username = useAuth((state) => state.username);
  const role = useAuth((state) => state.role);
  const [faculty, setFaculty] = useState(null);
  const location = useLocation();
  const person = location.state;

  useEffect(() => {
    tokenInstance
      .get(`/details/${username}`)
      .then((res) => {
        const info = res.data;
        // console.log(info);
        setData(info);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (person.role == 4) {
      if (person.faculty == 1) {
        setFaculty("BCT - Bachelors in Computer Engineering");
      }
      if (person.faculty == 2) {
        setFaculty("BCE - Bachelors in Civil Engineering");
      }
      // console.log(faculty);
    }
  }, [data]);
  return (
    <>
      <div className="header">
        <div className="greet">
          <div className="message">
            <div className="greet_mgs">
              {person.firstName} {person.lastName}
            </div>
            <div className="back">{faculty}</div>
          </div>
          <div className="profile-image">
            <img
              id="img-profile"
              src={person.image}
              alt="demo"
              rel="norefferer"
            />
          </div>
        </div>
      </div>

      {(person.role == 2 || person.role == 3) && (
        <div className="profile_info">
          <div className="infoContainer">
            <div className="infoTitle">Personal Information:</div>
            <div className="dash_separator"></div>
            <div className="informations">
              <div className="sidha">
                <div className="sidha2">
                  <div className="forIndentation">
                    <Label for="FullName">Full Name:</Label>
                  </div>
                  <div className="IndentationData">
                    {person.firstName} {person.lastName}
                  </div>
                </div>
                <div className="sidha2">
                  <div className="forIndentation">
                    <Label for="Username">Username:</Label>
                  </div>
                  <div className="IndentationData">{person.userName}</div>
                </div>
                <div className="sidha2">
                  <div className="forIndentation">
                    <Label for="Contact">Contact:</Label>
                  </div>
                  <div className="IndentationData">{person.contact_no}</div>
                </div>
                <div className="sidha2">
                  <div className="forIndentation">
                    <Label for="Address">Address:</Label>
                  </div>
                  <div className="IndentationData">{person.address}</div>
                </div>
                <div className="sidha2">
                  <div className="forIndentation">
                    <Label for="Email">Email:</Label>
                  </div>
                  <div className="IndentationData">{person.email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {person.role == 4 && (
        <div className="profile_info">
          <div className="infoContainer">
            <div className="infoTitle">Personal Information:</div>
            <div className="dash_separator"></div>
            <div className="informations">
              <div className="sidha">
                <div className="sidha2">
                  <div className="forIndentation">
                    <Label for="FullName">Full Name:</Label>
                  </div>
                  <div className="IndentationData">
                    {person.firstName} {person.lastName}
                  </div>
                </div>
                <div className="sidha2">
                  <div className="forIndentation">
                    <Label for="Username">Username:</Label>
                  </div>
                  <div className="IndentationData">{person.userName}</div>
                </div>
                <div className="sidha2">
                  <div className="forIndentation">
                    <Label for="Address">Address:</Label>
                  </div>
                  <div className="IndentationData">{person.address}</div>
                </div>
                <div className="sidha2">
                  <div className="forIndentation">
                    <Label for="Faculty">Faculty:</Label>
                  </div>
                  <div className="IndentationData">{faculty}</div>
                </div>
                <div className="sidha2">
                  <div className="forIndentation">
                    <Label for="Semester">Semester:</Label>
                  </div>
                  <div className="IndentationData">{person.semester}</div>
                </div>
                <div className="sidha2">
                  <div className="forIndentation">
                    <Label for="Email">Email:</Label>
                  </div>
                  <div className="IndentationData">{person.email}</div>
                </div>
                <div className="sidha2">
                  <div className="forIndentation">
                    <Label for="Contact">Contact:</Label>
                  </div>
                  <div className="IndentationData">{person.contact_no}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ViewDetails;
