import { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { CardBody, CardHeader } from "reactstrap";
import { useToken } from "../../apis";

function ViewResult() {
  const location = useLocation();
  const detail = location.state;
  const navigate = useNavigate();
  // const [postresult, setpostresult] = useState("");
  const [result, setResult] = useState([]);
  const { tokenInstance } = useToken();
  // const username = useAuth((state) => state.username);
  const [mark, setMark] = useState([]);
  useEffect(() => {
    setMark([]);
    console.log(mark);
    tokenInstance
      .get(`/result/${detail.username}/${detail.semester}`)
      .then((res) => {
        console.log(res);
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <Card className="Card">
          <CardHeader className="CardHeader">
            <h1>View Result</h1>
          </CardHeader>

          <CardBody>
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
                {result.map((result) => {
                  <tr>
                    <td>{result.subject} </td>
                    <td>{result.full_marks}</td>
                    <td>{result.pass_marks}</td>
                    <td>{result.obtained_marks}</td>
                  </tr>;
                })}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default ViewResult;
