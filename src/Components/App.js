import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import UserContext from "../Contexts/UserContext";
import NewWithdraw from "./NewWithdraw";
import Home from "./Home";
import Login from "./Login";
import NewDeposit from "./NewDeposit";
import SignUp from "./SignUp";
export default function App() {
    const initState=[];
    const [user,setUser]=useState(initState)
    return (
        <BrowserRouter>
            <UserContext.Provider value={{user,setUser}}>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/nova-entrada" element={<NewDeposit />} />
                <Route path="/nova-saida" element={<NewWithdraw />} />
            </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}