import { useEffect, useState } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import "../../css/Dues.css";
import { useToken } from "../../apis";
import { useAuth } from "../../Authentication/auth";
import KhaltiConfig from "./Khalti/khaltiConfig";
import { Input } from "reactstrap";

function Dues() {
  const { tokenInstance } = useToken();
  const [data, setData] = useState([]);
  const [amount, setamount] = useState("77");
  const [description, setdescription] = useState("ll");
  const username = useAuth((state) => state.username);

  const { config } = KhaltiConfig();
  console.log(config);
  let checkout = new KhaltiCheckout(config);

  useEffect(() => {
    tokenInstance
      .get(`/due/${username}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  function handleSelect(event) {
    console.log(event.target.value);
    const fulldetail = event.target.value;
  }
  const options = [
    {
      id: 1,
      name: "Fee for 6th semester",
      value: 40000,
    },
    {
      id: 2,
      name: "Due Payment",
      value: 3000000,
    },
    {
      id: 3,
      name: "Due Payment",
      value: 20000,
    },
    {
      id: 4,
      name: "Due Payment",
      value: 15000,
    },
    {
      id: 5,
      name: "Due Payment",
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
              <div className="inBox">
                <h4>Fee for 6th semester: Rs 40,000.00</h4>
              </div>
              <div className="inBox">
                <h4>Due Payment : Rs 30,000.00</h4>
              </div>
              <div className="inBox">
                <h4>Due Payment : Rs 20,000.00</h4>
              </div>
              <div className="inBox">
                <h4>Due Payment : Rs 15,000.00</h4>
              </div>
              <div className="inBox">
                <h4>Due Payment : Rs 25,000.00</h4>
              </div>
            </div>
          </div>
          <div className="rightDiv">
            <div className="card2">
              <div className="c2Head">
                <span>Select Payment Option</span>
              </div>
              <div className="c2Body">
                <div className="selectDiv">
                  <Input type="select" name="selectStream" id="selectStream">
                    <option>Fee for 6th semester: Rs 40,000.00</option>
                    <option>Due Payment : Rs 30,000.00</option>
                    <option>Due Payment : Rs 20,000.00</option>
                    <option>Due Payment : Rs 15,000.00</option>
                    <option>Due Payment : Rs 25,000.00</option>
                    <option id="others">Others</option>
                  </Input>
                  {/* <select
                    name="selectStream"
                    id="selectStream"
                    onChange={handleSelect}
                  >
                    {options.map((singleoption) => (
                      <option id={singleoption.id}>
                        {singleoption.name}:{singleoption.value}
                      </option>
                    ))}
                    <option id="others">Others</option>
                  </select> */}
                </div>
                <div className="remarkDiv">
                  <Input
                    type="text"
                    name="remark"
                    id="remark"
                    // placeholder="Remarks Here"
                    value={description}
                  ></Input>
                </div>
                <div className="displayDiv">
                  <Input
                    type="number"
                    name="amount"
                    id="amount"
                    min="0"
                    // placeholder="Amount Here"
                    value={amount}
                  ></Input>
                </div>
                <div className="paymentBtn">
                  <button
                    id="btn"
                    onClick={() => checkout.show({ amount: 1000 })}
                  >
                    <span> Pay Via Khalti </span>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="wholeBody">
        <div className="title">
          <h1>Payment Details</h1>
        </div>
        <div className="card">
          <div className="inBox">
            
            <h4>Payment for {data.semester} semester</h4>
          </div>
          <div className="inBox">
            
            <h4>Due Payment : {data}</h4>
          </div>
          <div className="paymentBtn">
            <button id="btn" onClick={() => checkout.show({ amount: 1000 })}>
              <span> Pay Via Khalti </span>{" "}
            </button>
            
          </div>
        </div>
      </div> */}
    </>
  );
}
export default Dues;
