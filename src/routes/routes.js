import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default Rotas;
