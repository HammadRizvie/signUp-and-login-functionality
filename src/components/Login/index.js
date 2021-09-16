import React from "react";
import DashBoard from '../DashBoard'
import { useState } from "react";
export default function Login(props){
    const [nextPage,setNextPage] = useState(false);
    const [email] = useState(props.email);
    const [password] = useState(props.password);

    const [enteredemail,setEnteredEmail] = useState();
    const [enteredpassword,setEnteredPassword] = useState();

    const login = () =>{
        enteredemail == email && enteredpassword == password ?
        setNextPage(true)
        :
        setNextPage(false)
    }
return(
    <div>
        {
            nextPage?
            <DashBoard />
            :
            <div style={{display:"flex",flexDirection:'column',}}>
            <text>
                Login
            </text>
            <input type='email'  style={{width:'5%'}} onChange={(e)=>setEnteredEmail(e.target.value)} />
            <input type='password' style={{width:'5%'}} onChange={(e)=>setEnteredPassword(e.target.value)} />
            <button style={{width:'5%'}} 
            onClick = {login}>Login</button>
        </div>
        }
    </div>
)
}