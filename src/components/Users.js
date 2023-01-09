import React, {useState} from "react";
import apiClient from "../http-common";


function Users() {
    console.log('Users')
  const [getResult, setGetResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
    // res - value to turn to string
    // null - repalcer
    // 2 - etti white spaces or indentation dineyy 
  };

  async function getAllData() {
    try {    
      const res = await apiClient.get("/getInfo");

      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };

      setGetResult(fortmatResponse(result));
    } catch (err) {
      setGetResult(fortmatResponse(err.response?.data || err));
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx then err.response.data 
    }
  }  
  

  return (
    <div id="app" className="container">      
          <div className="input-group input-group-sm">
            <button onClick={getAllData}>Click</button>         
          </div>   
          
          { getResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{getResult}</pre></div> }
          
          {/* The <pre> tag defines preformatted text. Text in a <pre> element is displayed in a fixed-width font, and the text 
          preserves both spaces and line breaks. The text will be displayed exactly as written in the HTML source code. */}
        </div>      
  );
}

export default Users;