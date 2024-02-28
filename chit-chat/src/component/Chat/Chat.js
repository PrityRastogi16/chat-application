import React, { useEffect } from 'react'
import {user} from "../Join/Join";
import socketIo from "socket.io-client";
import "./Chat.css"
const ENDPOINT = "http://localhost:2002";
let socket;
const Chat = () => {
  const send=()=>{
    socket.emit('message',{})
  }
  useEffect(()=>{
     socket = socketIo(ENDPOINT, {transports:['websocket']})
    socket.on('connect',() => {
      alert("connected");
    })
    socket.emit('joined',{user})
    socket.on('welcome', (data)=>{
      console.log(data.user, data.message)
    })
    socket.on('userJoined',(data)=>{
      console.log(data.user, data.message);
    }) 
    socket.on('leave',(data)=>{
      console.log(data.user, data.message);
    })
    return()=>{
    socket.emit('disconnect');
    socket.off();
    }
  },[])
  return (

    <div className='chatPage'>
      <div className='chatContainer'>
        <div className='header'></div>
        <div className='chatBox'></div>
        <div className='inputBox'>
          <input type="text" id="chatInput" />
          <button className='sendBtn'>Send</button>
        </div>
      </div>
    
    </div>
  )
}

export default Chat
