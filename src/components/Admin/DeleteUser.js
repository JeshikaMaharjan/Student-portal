import { tokenInstance } from "../../http-common";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

function DeleteUser() {
  const location = useLocation();
  const detail = location.state;

  console.log("delete", detail);

  const name = useRef(null);
  function handleSubmit() {
    tokenInstance
      .delete(`/delete/${detail.userName}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <p>confirm?</p>
      <button onClick={handleSubmit}>Delete</button>
    </>
  );
}
export default DeleteUser;
