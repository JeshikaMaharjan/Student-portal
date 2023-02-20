import React from "react";
import { Table, CardHeader, Input } from "reactstrap";
import "../../css/ResultForm.css";
import { Card, CardBody } from "reactstrap";
import { useToken } from "../../apis";
import { useAuth } from "../../Authentication/auth";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ResultForm = () => {
  const location = useLocation();
  const detail = location.state;
  const [postresult, setpostresult] = useState("");
  //   const [subjects, setSubjects] = useState("");
  const { tokenInstance } = useToken();
  const username = useAuth((state) => state.username);
  const [mark, setMark] = useState([]);
  const [isMarkfilled, setisMarkFilled] = useState(false);
  //   useEffect(() => {
  //     tokenInstance
  //       .get(`/subjects/${detail.userName}`)
  //       .then((res) => {
  //         console.log(res);
  //         setSubjects(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  // if (mark.length == 0) {
  //     for (let i = 0; i < subjects.length; i++) {
  //     const sub_id = subjects[i].id.toString();
  //     setMark((mark) => [...mark, { [sub_id]: null }]);
  //     }
  // }
  //   }, []);
  //---------------------
  const subjects = [
    {
      id: 1,
      subjectname: "OOAD",
      totalmarks: 100,
      passmarks: 32,
    },
    {
      id: 2,
      subjectname: "eco",
      totalmarks: 100,
      passmarks: 32,
    },
    {
      id: 3,
      subjectname: "maths",
      totalmarks: 100,
      passmarks: 32,
    },
  ];
  if (mark.length == 0) {
    for (let i = 0; i < subjects.length; i++) {
      const sub_id = subjects[i].id.toString();
      setMark((mark) => [...mark, { [sub_id]: null }]);
    }
  }
  //   console.log(mark);

  //---------------------

  const toggle = () => {
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };

  function Marksentry({ subject }) {
    const handleChange = (e) => {
      e.preventDefault();
      let [...marklist] = mark;
      const { id, value } = e.target;

      for (let i = 0; i < marklist.length; i++) {
        if (id in marklist[i]) {
          marklist[i] = { ...marklist[i], [id]: parseFloat(value, 10) };
        }
      }

      setMark(marklist);
    };
    console.log(mark);

    return (
      <>
        <tr>
          <th scope="row">{subject.id}</th>
          <td>{subject.subjectname} </td>
          <td>{subject.totalmarks}</td>
          <td>{subject.passmarks}</td>
          <td>
            <Input
              id={subject.id}
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </td>
        </tr>
      </>
    );
  }

  function handleSubmit() {
    const postData = {
      //   currentPassword: mark
    };

    tokenInstance
      .post(`/result/${username}`, postData)
      .then((res) => {
        setpostresult(res.data.message);
        console.log(res);
      })
      .catch((err) => {
        setpostresult(err.response.data.message);
        console.log(err);
      });
    toggle();
  }
  return (
    <>
      <div className="contain" id="blur">
        <div className="content">
          <div>
            <Card className="Card">
              <CardHeader className="CardHeader">
                <h1>Add Results</h1>
              </CardHeader>

              <CardBody>
                <form onSubmit={(e) => e.preventDefault()}>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Sub_ID</th>
                        <th>Subject</th>
                        <th>Total Mark</th>
                        <th>Pass Mark</th>
                        <th>Obtained Mark</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subjects.map((subject) => Marksentry({ subject }))}
                    </tbody>
                  </Table>
                  <div className="inputBx">
                    <button
                      name=""
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Upload
                    </button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      <div id="popup">
        <div onClick={toggle} className="close">
          +
        </div>
        <h2> {postresult}</h2>
        <button onClick={toggle}>Close</button>
      </div>
    </>
  );
};

export default ResultForm;
