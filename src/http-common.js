import axios from "axios";

export default axios.create({
  baseURL: "https://minor-production.up.railway.app/api",
  headers: {
    "Content-type": "application/json"
  }
});
