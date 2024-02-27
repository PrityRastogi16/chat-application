import React from 'react'
import "./Join.css"
import {Link} from "react-router-dom"

let user;
const Join = () => {
    const sendUser = () =>{
        user = document.getElementById("joinInput").value;
    }
  return (
    <div className='JoinPage'>
        <div className='JoinContainer'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH9n7iNj1EP7UCA2sOEFH0Dqsczl1WsDUlig&s" alt="logo" />
        <h1>CHIT-CHAT</h1>
        <input type="text" placeholder='Enter Your Name' id='joinInput' />
        <Link to="/chat"> <button onClick={sendUser} className='joinBtn'>Login In</button></Link>
       
        </div>

    </div>
  )
}

export default Join
export {user}