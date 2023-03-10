import { useNavigate } from "react-router-dom";

export function Confirmation() {
  const navigate = useNavigate();
  return (
    <>
      <div className="msgForLogout">
        <p>Do you want to logout?</p>
        <button
          onClick={() => {
            navigate("/logout");
          }}
        >
          Yes
        </button>
      </div>
    </>
  );
}
