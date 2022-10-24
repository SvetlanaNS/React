import React, { useState,useEffect, useRef} from "react";
import './style.css';
import Box from '@mui/material/Box';
import Button  from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import {green, red} from '@mui/material/colors';
import {ThemeProvider,createTheme} from '@mui/material/styles';
import List from '@mui/material/List';
import {recomposeColor, Typography} from '@mui/material';
import Chats from "./Chats";
import Message from "./Message";

const theme = createTheme({
  palette:{
    primary:{
      main: red[700],
    },
  },
});


function App() {
  const [author, setAuthor] = useState();
  const [message,setMessage] = useState();
  const [messages,setMessages] = useState([]);
  const [chatList]=useState([
     {name:"Some chat",id: "1"},
     {name:"Complicated discussion",id: "2"},
     {name:"Discription and documentation",id: "3"}
  ]);

const inputRef = useRef(null); 

const onButtonClick = () => {
  let newId = 1;
    if (messages.length > 0) newId = messages [messages.length - 1] .id + 1;
    if (author.length > 0) {
      setMessages (messages => [...messages, {text:message, author:author, id: newId }]);
    } else {
  alert("Author name needed")
    }
};

useEffect(()=>{
  if (messages.length>0) {
     setTimeout(()=>{
      alert (author + ",your message sent");
  }, 1500 ) ;
};

 focusTextField(inputRef.current);
}, [messages,author]);

function focusTextField(input){
if (input) {
  input.focus();
       }
     }


return (
<ThemeProvider  theme={theme} >
    <div className="App main" >
      <div className="message-text">
         
         <Typography 
         variant="h5" 
         component="div" 
         color="primary">Chat list</Typography>
            <List sx={{margin: '10px 0 10px o', witch:'100%',bgcolor:'background.paper'}}>
            {chatList.map((item )=><Chats name={item.name} key={item.id}/>)}
            </List>
          </div>
         <div className="messages">

      <Box 
           component="form" 
           sx={{m:1,borderRadius:'10px',
           gap:'10px',
           witch:'400px',
           margin:'10px',
           padding:'15px',
           backgroundColor: 'pink'}}
           noValidate
           autoComplete ="off">
          
          <Typography 
          variant="h5" 
          component="div" color="primary">messages</Typography>




       <TextField sx={{margin: '10px 0 10px 0', backgroundColor:'#fff'}}
                id="outlined-multiline-flexible" fullWidth
                label="Autor name"
                multiline
                maxRows={4}  
                vallue={author}
                inputRef={inputRef}
                onChange={(e)=>setAuthor(e.target.vallue)}/>

        i
      <TextField sx={{margin: '10px 0 10px 0', backgroundColor:'#fff'}}
                id="outlined-multiline-flexible" fullWidth
                label="Message text"
                multiline
                maxRows={4}  
                vallue={message}
                inputRef={inputRef}
                onChange={(e)=>setMessage(e.target.vallue)}/>



<Button sx={{margin: '10px 0 10px 0', color:'red'}} 
        variant="outlined"
        size="large" fullWidth onClick={onButtonClick}>Send message</Button>
     </Box>
    

      {messages.map(item=>{
        return(
<Message author={item.author} text={item.text} key ={item.id}/>

          )
        })
      }
      </div>
      </div>
    </ThemeProvider>
  );
      }
export default App;