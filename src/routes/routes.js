import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import IMC from "../pages/IMC/imc";
import Login from "../pages/Login/login";
import SignIn from "../pages/SignIn/signin";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/imc" element={<IMC />}></Route>
    </Routes>
  );
}

export default Rotas;
