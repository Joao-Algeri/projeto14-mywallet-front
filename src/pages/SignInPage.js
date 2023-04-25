import styled from "styled-components"
import { UseForm } from "../Contexts/UseForm.js";
import { Link,useNavigate} from "react-router-dom"
import axios from "axios";
import MyWalletLogo from "../components/MyWalletLogo"

export default function SignInPage() {
  const [form, handleForm] = UseForm({})
  const navigate = useNavigate();
  function SendForm(e) {
    e.preventDefault();
    LoggingIn()
    
    function LoggingIn() {
      const newForm = [{ email: form.email, password: form.password}]
      
      const promise = axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, newForm[0])
      promise.then(HandleSucess)
      promise.catch(HandleError)
    }
    function HandleSucess(answer) {
      console.log(answer)
      navigate("/cadastro")
    }
    function HandleError() {
      alert("Ocorreu um problema, tente mais tarde")
    }
  }
  return (
    <SingInContainer>
      <form onSubmit={SendForm}>
        <MyWalletLogo />
        <input required placeholder="E-mail" type={"email"} name="email" value={form.email || ""} onChange={handleForm} />
        <input required placeholder="Senha" type={"password"} name="password" value={form.password || ""} onChange={handleForm} />
        <button>Entrar</button>
      </form>

      <Link to="/cadastro">
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
