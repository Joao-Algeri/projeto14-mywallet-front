import styled from "styled-components"
import { useEffect,useState } from "react"
import axios from "axios"
import {useNavigate } from "react-router-dom"
import chalk from 'chalk';
import exit_icon from "../imgs/exiticon.png"
import plus_icon from "../imgs/plusicon.png"
import minus_icon from "../imgs/minusicon.png"
export default function Home(){
    const navigate=useNavigate();
    const a=[
        {date:"23/01",description:"Salário",ammount:4500,type:"deposit"},
        {date:"17/01",description:"Café",ammount:12,type:"withdraw"},
        {date:"08/01",description:"Bolão da firma",ammount:650,type:"deposit"},
        {date:"05/01",description:"Dívidas",ammount:2200,type:"withdraw"},
        {date:"01/01",description:"Jogatina",ammount:62,type:"deposit"}
    ]
    const [transactions,setTransactions]=useState([a]);
   function CalculatesBalance(){

   }
   // useEffect(()=>{
    //     const request=axios.get("localhost:5000/transactions");
        
    //     request.then(answer => {
        
    //         setTransactions(answer.data);
            
    
    //     });
    
    //     request.catch(error => {
            
    //         console.log("error message");
    //     });
  //  },[])
   
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
        {transactions[0].map((transaction,index) =>transaction===undefined ? 

        <div className="registry-placeholder">Não há registros de entrada ou saída</div>
        
    :
            index!==transactions.length-1?
        <div key={transaction.ammount+5}className="transaction">
        <div key={transaction.date}className="grey">{transaction.date}</div>
        <div key={transaction.description}className="black">{transaction.description}</div>
        <div key={transaction.ammount}className={transaction.type}>{transaction.ammount.toFixed(2)}</div>
        </div>
    :
    <>
    <div key={transaction.ammount+5}className="transaction">
    <div key={transaction.date}className="grey">{transaction.date}</div>
    <div key={transaction.description}className="black">{transaction.description}</div>
    <div key={transaction.ammount}className={transaction.type}>{transaction.ammount.toFixed(2)}</div>
    </div>
    <div className="balance-box">
    <div className="balance-text">Saldo</div>
    <div className="balance-number">XXXX,XX</div>
    </div>
    </>
    )
    }
                   
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
        flex-direction: column;
        align-items: center;
        width: 90vw;
        margin-left: 5vw ;
        margin-right: 5vw ;
        height:65vh ;
        background-color: white;
        border-radius: 5px;
        position :relative;
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
    .transaction{
        display: flex;        
        width: 95%;
        margin-top: 10px; 
        position:relative;      
    }
    .grey{

        color:grey;
        margin-right: 5px;
    }
    .black{
        margin-right: 5px;
    }
    .deposit{

        color:green;
        position:absolute;
        right: 0px;
    }
    .withdraw{

        color:red;
        position:absolute;
        right: 0px;
    }
    .balance-box{
        display: flex;
        justify-content: space-between;
        width: 90%;
        height: fit-content;
        height: 15px ;
        position:absolute;
        bottom:10px;
        
    }
    .balance-text{
        font-weight: 700;
        font-size: 20px;
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