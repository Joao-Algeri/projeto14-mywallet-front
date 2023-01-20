import { BrowserRouter, route, routes } from "react-router-dom";
import NewWithdraw from "../NewWithdraw";
import Home from "./Home";
import Login from "./Login";
import NewDeposit from "./NewDeposit";
import SignUp from "./SignUp";
export default function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/nova-entrada" element={<NewDeposit />} />
                <Route path="/nova-saida" element={<NewWithdraw />} />
            </Routes>
        </BrowserRouter>
    )
}