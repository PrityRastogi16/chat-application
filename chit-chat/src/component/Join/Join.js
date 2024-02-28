import React, { useState } from 'react'
import "./Join.css"

import {Link} from "react-router-dom"

let user;
const sendUser = () =>{
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
}
const Join = () => {
   const [name, setname] = useState("")
  return (
    <div className='JoinPage'>
        <div className='JoinContainer'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH9n7iNj1EP7UCA2sOEFH0Dqsczl1WsDUlig&s" alt="logo" />
        <h1>CHIT-CHAT</h1>
        <input onChange={(e)=> setname(e.target.value)} type="text" placeholder='Enter Your Name' id='joinInput' />
        <Link onClick={(e)=>!name?e.preventDefault():null} to="/chat"> <button onClick={sendUser} className='joinBtn'>Login In</button></Link>
       
        </div>

    </div>
  )
}
export default Join
export {user}