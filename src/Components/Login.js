import styled from "styled-components";
import axios from "axios";
import logo from "../imgs/logo.png"
import {useContext, useState} from 'react';
import UserContext from "../Contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { UseForm } from "./Useform";
export default function Login() {
  const [form, handleForm] = UseForm({})
  const {user,setUser}=useContext(UserContext)
  const navigate = useNavigate();
  function SendForm(event) {
    event.preventDefault();
    LoggingIn()
  }
  function LoggingIn() {
//     const promise = axios.post("localhost:5000/login", form)
//     promise.then(HandleSucess)
//     promise.catch(HandleError)

navigate("/home")  
  }
//   function HandleSucess(request) {    
//     if () {   
//       const userData={name:request.data.name,token:request.data.token}
      
//       setUser(userData);    
      
//       navigate("/subscriptions/")      
//     }
//     else {
      
//       const userData={name:request.data.name,token:request.data.token,image:request.data.membership.image,perks:request.data.membership.perks,cardInfo:{}}
//       setUser(userData);  
//       navigate("/home")
      
//     }
//   }
//   function HandleError() {
//     alert("Ocorreu um problema, tente mais tarde")
//  }  
  return (
    <Content>     
     <img src={logo} alt="logo" className="logo"/>
      <form onSubmit={SendForm}>
        <input required placeholder="E-mail" type={"email"} name="email" value={form.email || ""} onChange={handleForm} />
        <input required placeholder="Senha" type={"password"} name="password" value={form.password || ""} onChange={handleForm} />
        <button>ENTRAR</button>
      </form>
      <Link to="/cadastro">
        <div className="link"> Não possui uma conta? Cadastre-se</div>
      </Link>
    </Content>
  )
}
const Content=styled.div`
height: 100vh;
background-color:#8c11be;
font-family: 'Roboto';
color:white;
.logo{

  display: flex;  
  justify-content: center;
  padding-top: 20vh;
  margin-right:25vw ;
  margin-left: 25vw;
  width: 50vw;
  
}

form{
  margin-left: 10vw;
  margin-right: 10vw;
  display:flex;
  flex-direction: column;
  margin-top:3vh;
  }
input{
  height: 52px;
  margin-bottom:16px;
  border-radius: 8px;
  border:none;
  padding-left: 14px;
    }   
button{
  height: 52px;
  border-radius: 8px;
  background-color: #a328d6;
  color:white;
  font-weight: 700;
  font-size: 14px;
  border:none;
  margin-top: 8px;
  margin-bottom: 24px;
  }

.link{
  display: flex;
  width: 60vw;
  justify-content: center;
  align-items: center;
  margin-left: 20vw;
  margin-right: 20vw;
  font-size: 14px;
  font-weight: 400;
  color:white;
  text-decoration:underline;
}
`