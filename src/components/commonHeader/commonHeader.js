import React from 'react';
import "./commonHeader.css";
import { BsPower } from "react-icons/bs";
import {useHistory} from 'react-router-dom'
function CommonHeader(props){
    const history = useHistory();
    const gotoLogin= ()=>{
        history.push('/');
    }
    return (
  <div className="commonHeader">
    <span className="commonHeaderText">{props.title}</span>
    <BsPower style={{ fontWeight: "600", marginLeft: "5px" ,cursor :"pointer"}} onClick={gotoLogin}/>
  </div>
    )}

export default CommonHeader;
