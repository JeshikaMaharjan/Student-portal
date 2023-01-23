import React,{useRef,useState} from "react";
import {basicInstance} from "../http-common";

// GET request

function UserDetails() {
  const get_id = useRef(null); //useRef persists the values in re-renders. and returns object current
  const [getResult, setGetResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
    // res - value to turn to string
    // null - repalcer
    // 2 - etti white spaces or indentation dineyy 
  }; 

  async function getDataById() {
    const id = get_id.current.value;

    if (id) {
      try {        
        const res = await basicInstance.get(`/getInfo/student/${id}`);

        const result = {
          data: res.data,
          status: res.status,
          statusText: res.statusText,
          headers: res.headers,
        };

        setGetResult(fortmatResponse(result));
      } catch (err) {
        setGetResult(fortmatResponse(err.response?.data || err));
      }
    }
  }

 

  return (
    <div id="app" className="container">      
          <div className="input-group input-group-sm">
            <input type="text" ref={get_id} className="form-control ml-2" placeholder="Id" />
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary" onClick={getDataById}>Get by Id</button>
            </div>
          </div>   
          
          { getResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{getResult}</pre></div> }
          
          {/* The <pre> tag defines preformatted text. Text in a <pre> element is displayed in a fixed-width font, and the text 
          preserves both spaces and line breaks. The text will be displayed exactly as written in the HTML source code. */}
        </div>     
  );
}

export default UserDetails;
