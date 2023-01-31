import { useEffect, useState } from "react";
// import { useAuthUser } from "react-auth-kit";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./Khalti/khaltiConfig";
import "../../css/Dues.css";
import { useToken } from "../../apis";

function Dues() {
  const { tokenInstance } = useToken();
  const [data, setData] = useState([]);
  const [amount, setamount] = useState();
  // const auth = useAuthUser();

  let checkout = new KhaltiCheckout(config);

  useEffect(() => {
    tokenInstance
      //   .get(`/details/${user}`)
      .get(`/due/student1`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.due);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);

  return (
    <>
      <div className="wholeBody">
        <div className="title">
          <h1>Payment Details</h1>
        </div>
        <div className="card">
          <div className="inBox">
            {/* <h4>Payment for 6th semester</h4> */}
            <h4>Payment for {data.semester} semester</h4>
          </div>
          <div className="inBox">
            {/* <h4>Due Payment : Rs 40,000.00</h4> */}
            <h4>Due Payment : {data}</h4>
          </div>
          <div className="paymentBtn">
            <button
              id="btn"
              onClick={() => checkout.show({ amount: { data } * 100 })}
            >
              <span> Pay Via Khalti </span>{" "}
            </button>
            {/* <button ><span>Make Payment</span></button> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Dues;
