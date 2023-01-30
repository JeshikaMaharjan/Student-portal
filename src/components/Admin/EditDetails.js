import { tokenInstance } from "../../http-common";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

function EditDetails() {
  const location = useLocation();
  const detail = location.state;

  console.log("edit", detail);

  const name = useRef(null);
  function handleSubmit() {
    const putData = {
      firstName: name.current.value,
    };

    tokenInstance
      .put(`/update/${detail.userName}`, putData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <input type="text" ref={name} defaultValue={detail.firstName}></input>
      <button onClick={handleSubmit}>Save</button>
    </>
  );
}
export default EditDetails;
