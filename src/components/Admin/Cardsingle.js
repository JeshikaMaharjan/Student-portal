import React, { useRef } from "react";
import { navigate, useNavigate } from "react-router-dom";
import { useToken } from "../../apis";

function Cardsingle({ person }) {
  const { tokenInstance } = useToken();
  const name = useRef(null);
  const navigate = useNavigate();

  return (
    <>
      <ul>
        <div className="imageSec">
          <img
            id="img-profile"
            src={person.image}
            alt="demo"
            rel="norefferer"
          />
        </div>
        <div className="nameId">
          <div className="name">
            <span>{person.userName}</span>
          </div>
          <div className="id">
            <span>
              {person.firstName} {person.lastName}{" "}
            </span>
          </div>
        </div>
        <div className="option">
          {/* <div className="viewBtn">
                                    <button id='view'>View</button>
                                </div>
                                <div className="resultBtn">
                                    <button id='result'>Results</button>
                                </div> */}

          {/* <div className="editBtn">
            <button
              id="edit"
              onClick={() =>
                navigate("/secure/admin/edit", {
                  replace: true,
                  state: { ...person },
                })
              }
            >
              Edit
            </button>
          </div> */}
          <div className="editBtn">
            <button
              id="edit"
              onClick={() =>
                navigate("/secure/admin/edit", {
                  replace: true,
                  state: { ...person },
                })
              }
            >
              Edit
            </button>
          </div>

          {/* <div className="deleteBtn">
            <button
              id="delete"
              onClick={() =>
                navigate("/secure/admin/delete", {
                  replace: true,
                  state: { ...person },
                })
              }
            >
              Delete
            </button>
          </div> */}
          <div className="deleteBtn">
            <button
              id="delete"
              onClick={() =>
                navigate("/secure/admin/delete", {
                  replace: true,
                  state: { ...person },
                })
              }
            >
              Delete
            </button>
          </div>
        </div>
      </ul>
    </>
  );
}

export default Cardsingle;
