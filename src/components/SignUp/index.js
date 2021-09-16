import React from "react";
import Login from '../Login'
import { useState } from "react";
export default function SignUp(){
    const [nextPage,setNextPage] = useState(false);
    const [fullName,setFullName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
return(<div>
    {
        nextPage? <div style={{display:"flex",flexDirection:'column',}}>
            <Login name={fullName} email={email} password = {password} />
    </div> 
    :
    <div style={{display:"flex",flexDirection:'column',}}>
        <text>
            SignUp
        </text>
        <input type='text' style={{width:'5%'}} onChange={(e)=>setFullName(e.target.value)} />
        <input type='email'  style={{width:'5%'}} onChange={(e)=>setEmail(e.target.value)} />
        <input type='password' style={{width:'5%'}} onChange={(e)=>setPassword(e.target.value)} />
        <button style={{width:'5%'}} 
        onClick = {()=>setNextPage(true)}>Login</button>
    </div>
    }
    </div>
)
}