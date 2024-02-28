import React, { useEffect, useState } from 'react'
import {user} from "../Join/Join";
import socketIo from "socket.io-client";
import "./Chat.css"
import ReactScrollToBottom from "react-scroll-to-bottom"
import Message from "../Message/Message"
const ENDPOINT = "http://localhost:2002";
let socket;
const Chat = () => {
  const [id,setid] = useState("")
  const [messages,setMessages] = useState([])
  const send=()=>{
    const message = document.getElementById("chatInput").value;
    socket.emit('message',{message,id})
    document.getElementById("chatInput").value ="";
  }
  useEffect(()=>{
     socket = socketIo(ENDPOINT, {transports:['websocket']})
    socket.on('connect',() => {
      alert("connected");
      setid(socket.id);
    })
    socket.emit('joined',{user})
    socket.on('welcome', (data)=>{
      setMessages([...messages,data]);
      console.log(data.user, data.message)
    })
    socket.on('userJoined',(data)=>{
      setMessages([...messages,data]);
      console.log(data.user, data.message);
    }) 
    socket.on('leave',(data)=>{
      setMessages([...messages,data]);
      console.log(data.user, data.message);
    })
    return()=>{
    // socket.emit('disconnect');
    socket.disconnect();
    socket.off();
    }
  },[])
  useEffect(()=>{
    socket.on('sendMessage',(data)=>{
      setMessages([...messages,data]);
     console.log(data.user, data.message, data.id)
    })
    return ()=>{
     
    }
  },[])
  return (

    <div className='chatPage'>
      <div className='chatContainer'>
        <div className='header'></div>
        <ReactScrollToBottom className='chatBox'>
         {messages.map((item,i)=> <Message message={item}/> )}
        </ReactScrollToBottom>
        <div className='inputBox'>
          <input type="text" id="chatInput" />
          <button onClick={send} className='sendBtn'>Send</button>
        </div>
      </div>
    
    </div>
  )
}

export default Chat
