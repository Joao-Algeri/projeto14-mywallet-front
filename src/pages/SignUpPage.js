import { Link, useNavigate } from "react-router-dom";
import { UseForm } from "../Contexts/UseForm.js";
import axios from "axios";
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"

export default function SignUpPage() {
  const [form, handleForm] = UseForm({})
  const navigate = useNavigate();
  function SendForm(e) {
    e.preventDefault();
    LoggingIn()
  }
  function LoggingIn() {
    if(form.password!==form.passwordCheck)return(alert("Digite sua senha corretamente"))
    const newForm = [{ name: form.name,email: form.email, password: form.password }]
    const promise = axios.post(`https://mywallet-api-3ziv.onrender.com/sign-up`, newForm[0])
    promise.then(HandleSucess)
    promise.catch(HandleError)
  }
  function HandleSucess(resposta) {
    console.log(resposta)
    navigate("/home")
  }
  function HandleError() {
    alert("Ocorreu um problema, tente mais tarde")
  }
  return (
    <SingUpContainer>
      <form onSubmit={SendForm}>
        <MyWalletLogo />
        <input required placeholder="Nome" type={"text"} name="name" value={form.name || ""} onChange={handleForm} />
        <input required placeholder="E-mail" type={"email"} name="email" value={form.email || ""} onChange={handleForm} />
        <input required placeholder="Senha" type={"password"} name="password" value={form.password || ""} onChange={handleForm} />
        <input required placeholder="Confirme a senha" type={"password"} name="passwordCheck" value={form.passwordCheck || ""} onChange={handleForm} />
        <button>Cadastrar</button>
      </form>

      <Link to="/" >
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
