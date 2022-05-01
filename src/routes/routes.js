import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import Login from "../pages/Login/login";
import SignIn from "../pages/SignIn/signin";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Routes>
  );
}

export default Rotas;
