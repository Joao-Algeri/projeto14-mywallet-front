import styled from "styled-components"
import dayjs from 'dayjs';
import { Navigate, useNavigate } from "react-router-dom";
import { UseForm } from "./Useform";
import { useContext } from "react";
export default function NewWithdraw(){
    const [form, handleForm] = UseForm({})
    const navigate = useNavigate();
    function SendForm(event) {
        event.preventDefault();
        LoggingIn()
    }
    function LoggingIn(){
        const data=dayjs().format("DD/MM")
        const newForm=[{...form,date:data,type:"withdraw"}]
        // const request=axios.post("localhost:5000/transactions",newForm[0])        
        navigate("/home")
    }
    return(
    <Content>
        <div className="title-top">Nova saída</div>
<form onSubmit={SendForm}>
        <input required placeholder="Valor" type={"number"} name="ammount" value={form.ammount || ""} onChange={handleForm} />
        <input required placeholder="Descrição" type={"text"} name="description" value={form.description || ""} onChange={handleForm} />
        <button>Salvar saída</button>
      </form>
    </Content>
    )
    }
    const Content=styled.div`
    height: 100vh;
    background-color: #8c11be;
    font-family: 'Roboto';      
    .title-top{
        display: flex;
        align-items: center;
        width: 90vw;
        margin-left: 5vw;
        margin-right: 5vw;
        height: 10vh;
        color: white;
        font-weight: 700;
        font-size: 25px;
    }
    form{
  margin-left: 5vw;
  margin-right: 5vw;
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