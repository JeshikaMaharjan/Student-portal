import React, { useRef } from "react";
import { navigate, useNavigate } from "react-router-dom";
import { tokenInstance } from "../../http-common";
import DeleteUser from "./DeleteUser";
import EditDetails from "./EditDetails";

function Card({ person }) {
  const name = useRef(null);
  const navigate = useNavigate();

  return (
    <>
      <div>
        <ul>
          <div className="body">
            <div className="card">
              <div className="individualCard">
                <div className="imageSec">
                  <img
                    id="img-profile"
                    src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9j5kXSP12ylfgHx30qabxtDu0GAX1cm19TTaKZVA1hONj-t6MfsXechjGt6hyYoPBD4Y&usqp=CAU"
                    alt="demo"
                    rel="norefferer"
                  />
                </div>
                <div className="nameId">
                  <div className="name">
                    <span>{person.userName}</span>
                  </div>
                  <div className="id">
                    <span>{person.id}</span>
                  </div>
                </div>
                <div className="option">
                  {/* <div className="viewBtn">
                                    <button id='view'>View</button>
                                </div>
                                <div className="resultBtn">
                                    <button id='result'>Results</button>
                                </div> */}

                  <div className="editBtn">
                    <button
                      id="edit"
                      onClick={
                        () =>
                          navigate("/admin/edit", {
                            replace: true,
                            state: { ...person },
                          })

                        // <EditDetails detail={person} />
                      }
                    >
                      Edit
                    </button>
                  </div>

                  <div className="deleteBtn">
                    <button
                      id="delete"
                      onClick={() =>
                        navigate("/admin/delete", {
                          replace: true,
                          state: { ...person },
                        })
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Card;
