import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useToken } from "../../apis";

function DeleteUser() {
  const { tokenInstance } = useToken();
  const location = useLocation();
  const detail = location.state;
  const [postResult, setPostResult] = useState(null);

  console.log("delete", detail);
  const toggle = () => {
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };

  const name = useRef(null);
  function handleSubmit() {
    tokenInstance
      .delete(`/delete/${detail.userName}`)
      .then((res) => {
        console.log(res);
        setPostResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="contain" id="blur">
        <div className="content">
          <p>confirm?</p>
          <button onClick={handleSubmit}>Delete</button>
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
export default DeleteUser;
