import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { NoMatch } from "./components/NoMatch";
import { SecureComponent } from "./components/Routes/secureComponent";
import { RequireAuth } from "react-auth-kit";
import Image from "./components/image";
//----------------------------------------------------
import AdminRoutes from "./components/Routes/AdminRoutes";
import AccountRoutes from "./components/Routes/Account_staffRoutes";
import StudentRoutes from "./components/Routes/StudentRoutes";
import Unauthorized from "./components/Unauthorized";
// import RegisterStudent from "./components/Admin/RegisterStudent";

import { useState } from "react";

// import { useEffect, useState } from "react";
// import { useBearStore } from "./Stores/bear-store";

function App() {
  // return <Image />;

  // const [count, setCount] = useState(0);

  // const bears = useBearStore((state) => state.bears);
  // const increasePopulation = useBearStore((state) => state.increasePopulation);

  // console.log({ bears });

  // useEffect(() => {
  //   increasePopulation(25);
  //   setCount((count) => count + 1);
  //   setCount((count) => count + 1);
  // }, []);

  // const data = { name: "Jane Doe", age: 25, address: "Unknown" };
  // const { ...rest } = data;
  // console.log(rest);
  // return <div>count: {count}</div>;

  // return(
  // <>
  //   <Routes>
  //     {/* public routes */}
  //     <Route path ='/' element = {<Login/>}/>
  //     <Route path ='/login' element = {<Login/>}/>
  //     <Route path='*' element ={<NoMatch/>}/>
  //     <Route path={'/secure/*'} element={
  //       <RequireAuth loginPath={'/login'}>  {/* loginPath : The fallback path, which will be used in case of the user is not authenticated */}
  //         <SecureComponent/>
  //       </RequireAuth>
  //     }/>
  //   </Routes>
  // </>

  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="accountstaff/*" element={<AccountRoutes />} />
        <Route path="student/*" element={<StudentRoutes />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
