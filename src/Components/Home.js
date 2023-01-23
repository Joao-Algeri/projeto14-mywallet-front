import styled from "styled-components"
import {useNavigate } from "react-router-dom"
import exit_icon from "../imgs/exiticon.png"
import plus_icon from "../imgs/plusicon.png"
import minus_icon from "../imgs/minusicon.png"
export default function Home(){
    const navigate=useNavigate();
    function Navigate(path){
        navigate(path);
    }
    return(
    <Content>
        <div className="top-box">
        <div className="user-greeting">Olá, Fulano</div>
        <img onClick={()=>Navigate("/")} className="exit-icon" src={exit_icon} alt="exit icon"/>
        </div>
        <div className="registry"> 
        <div className="registry-placeholder">Não há registros de entrada ou saída</div>           
        </div>
        <div className="buttons">
        <div onClick={()=>Navigate("/nova-entrada")}className="button">
            <div className="button-content">
            <img className="button-icon" src={plus_icon} alt="plus icon"/>
            <div className="button-text">Nova Entrada</div>
            </div>
        </div>
        
        <div onClick={()=>Navigate("/nova-saida")} className="button">
        <div className="button-content">
        <img className="button-icon" src={minus_icon} alt="minus icon"/>
        <div className="button-text">Nova saída</div>
        </div>
        </div>
        </div>
        </Content>)
    }
    const Content=styled.div`
    height: 100vh;
    background-color:#8c11be;
    font-family: 'Roboto';
    box-sizing: border-box;
    .top-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90vw;
        font-weight: 700;
        font-size: 25px;
        height: 10vh;
        margin-left: 5vw ;
        margin-right: 5vw ;        
        /* background-color: black; */
        color:white;
    }
    .top-box img{
        height: 45%;
    }
    .registry{
        display: flex;
        /* flex-direction: column; */
        width: 90vw;
        margin-left: 5vw ;
        margin-right: 5vw ;
        height:65vh ;
        background-color: white;
        border-radius: 5px;
    }
    .registry-placeholder{
        display: flex; 
        align-items:center ;
        width:60%;
        height: 20%;
        margin-left: 20%;
        margin-right: 20%;
         /* margin-bottom: 40%; */
        margin-top: 40%; 
        color:grey;
        
        
    }
    .buttons{
        display: flex;
        width: 90vw;
        margin-left: 5vw ;
        margin-right: 5vw ;
        height: 18vh;
        justify-content: space-between;
        margin-top: 2vh;
    }
    .button{
        display: flex;
        flex-direction: column;
        justify-content: center ;
        align-items: center;
        width: 48%;
        background-color: #a328d6;
        color :white;
        border-radius: 5px;       
        box-sizing: border-box;
        
    }
    .button-content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 80%;
        width: 90%;
        
    }
    .button-icon{
        width: 25px;  
        height:25px ;
    }
    .button-text{
        width: 54%;
    }
    `

  