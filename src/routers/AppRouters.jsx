import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from '../pages/login/Login'

import { Register } from '../pages/register/Register'

export function AppRouters(){


return(

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  </BrowserRouter>


)


}