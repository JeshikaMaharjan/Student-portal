import { useEffect, useState, useRef } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import "../../css/Dues.css";
import { useToken } from "../../apis";
import { useAuth } from "../../Authentication/auth";
import KhaltiConfig from "./Khalti/khaltiConfig";
import { Input } from "reactstrap";

function Dues() {
  const { tokenInstance } = useToken();
  const [data, setData] = useState([]);
  const [amountpaid, setamountpaid] = useState(0);
  const [description, setdescription] = useState();
  const username = useAuth((state) => state.username);
  const setAmount = useAuth((state) => state.setAmount);
  const setDescription = useAuth((state) => state.setDescription);

  const { config } = KhaltiConfig();
  console.log(config);
  let checkout = new KhaltiCheckout(config);

  useEffect(() => {
    tokenInstance
      .get(`/due/${username}`)
      .then((res) => {
        // console.log(res.data);
        setData(res.data.message);
      })
      .catch((err) => {
        setData(err.data.message);
        // console.log(err);
      });
  }, []);
  console.log(data);

  const options = [
    {
      id: 1,
      name: "Fee for 6th semester",
      value: 40000,
    },
    {
      id: 2,
      name: "Due Payment for 5th semester",
      value: 3000000,
    },
    {
      id: 3,
      name: "Due Payment for 4th semester",
      value: 20000,
    },
    {
      id: 4,
      name: "Due Payment for 3rd semester",
      value: 15000,
    },
    {
      id: 5,
      name: "Due Payment for 2nd semester",
      value: 25000,
    },
  ];

  return (
    <>
      <div className="wholeBody">
        <div className="title">
          <h1>Payment Details</h1>
        </div>
        <div className="mainBody">
          <div className="leftDiv">
            <div className="card1">
              {options.map((singleoption) => (
                <div className="inBox">
                  <h4>
                    {singleoption.name} : {singleoption.value}
                  </h4>
                </div>
              ))}
            </div>
          </div>
          <div className="rightDiv">
            <div className="card2">
              <div className="c2Head">
                <span>Select Payment Option</span>
              </div>
              <div className="c2Body">
                <div className="selectDiv">
                  <div className="inBox">
                    <h4>Description for payment</h4>
                  </div>
                  <br />
                  <Input
                    type="select"
                    name="selectdescription"
                    id="selectdescription"
                    onChange={(e) => {
                      setdescription(e.target.value);
                    }}
                  >
                    {options.map((singleoption) => (
                      <option>{singleoption.name}</option>
                    ))}
                  </Input>
                </div>
                <div className="displayDiv">
                  <Input
                    type="number"
                    name="amount"
                    id="amount"
                    min="0"
                    placeholder="Amount Here"
                    onChange={(e) => {
                      setamountpaid(e.target.value * 100);
                    }}
                  ></Input>
                </div>
                <div className="paymentBtn">
                  {amountpaid !== 0 && (
                    <button
                      id="btn"
                      onClick={() => {
                        setAmount(amountpaid);
                        setDescription(description);
                        checkout.show({ amount: amountpaid });
                      }}
                    >
                      <span> Pay Via Khalti </span>{" "}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dues;
