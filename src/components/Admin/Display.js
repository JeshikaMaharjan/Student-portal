import Search from "./Search";
import { useState, useEffect } from "react";
import { tokenInstance } from "../../http-common";

const Display = () => {
  const [UserList, setUserList] = useState([]);
  useEffect(() => {
    tokenInstance
      .get(`/getInfo/allUser`)
      .then((res) => {
        console.log(res);
        const data = res.data;
        setUserList(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log(UserList);

  return (
    <>
      <Search details={UserList} />
    </>
  );
};
export default Display;
