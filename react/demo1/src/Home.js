import { useState } from "react";


function Home(){
    let fname="sathish";
    
    const [email1,setEmail]=useState('');
    const [address,setAddress]=useState("erode");
    const[num,setNumber]=useState("");
    const validate=()=>{
        if(email1 == ""){
            alert("email is empty");
        }else if(num == ""){
            alert("number is empty");
        }else 
        {alert("everything is fine")}
    }
    return(
    <div>
        <h1>im super man</h1>
        <h1>name {fname}</h1>
        <h1>email {email1}</h1>
        <h1>num {num}</h1>
        <h1>address {address}</h1>
        <input type="text" onChange={(e)=>setEmail(e.target.value)}/><br></br>
        <input type="number" onChange={(e)=>setNumber(e.target.value)}/><br></br>
        <input type="submit" onClick={()=>validate()}/>
            </div>
        

    );
        
    
}
export default Home;