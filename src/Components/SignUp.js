import styled from "styled-components";
import axios from "axios";
import logo from "../imgs/logo.png"
import { Link, useNavigate } from "react-router-dom";
import { UseForm } from "./Useform";
export default function Signup() {
  const [form, handleForm] = UseForm({})
  const navigate = useNavigate();
  function SendForm(e) {
    e.preventDefault();
    LoggingIn()
  }
  function LoggingIn() {
    const newForm = [{name: form.name, email: form.email, password: form.password }]
//     const promise = axios.post("localhost:5000/users", newForm[0])
//     promise.then(HandleSucess)
//     promise.catch(HandleError)
console.log(newForm);
navigate("/home")
  }
//   function HandleSucess() {
//     navigate("/")
//   }
//   function HandleError() {
//     alert("Ocorreu um problema, tente mais tarde")
//   }
  return (
    <Content>
        <img className="logo" src={logo} alt="logo"/>
      <form onSubmit={SendForm}>
        <input required placeholder="Nome" type={"text"} name="name" value={form.name || ""} onChange={handleForm} />
        <input required placeholder="E-mail" type={"email"} name="email" value={form.email || ""} onChange={handleForm} />
        <input required placeholder="Senha" type={"password"} name="password" value={form.password || ""} onChange={handleForm} />
        <input required placeholder="Confirme a senha" type={"text"} name="password_confirmation" value={form.password_confirmation || ""} onChange={handleForm} />
        <button>CADASTRAR</button>
      </form>
      <Link to="/" >
        <div className="link">Já possui uma conta? Entre Agora!</div>
      </Link>
    </Content>
  )
}
const Content=styled.div`
height: 100vh;
background-color: #8c11be;
font-family: 'Roboto';
color:white;
.logo{

  display: flex;  
  justify-content: center;
  padding-top: 5vh;
  margin-right:25vw ;
  margin-left: 25vw;
  width: 50vw;  
  padding-top: 15vh;
}
form{
  margin-left: 10vw;
  margin-right: 10vw;
  display:flex;
  flex-direction: column;
  padding-top:3vh;
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
