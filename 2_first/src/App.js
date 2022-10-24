import React, { useState,useEffect, useRef} from "react";
import './style.css';
import Box from '@mui/material/Box';
import Button  from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import {green} from '@mui/material/colors';
import {ThemeProvider,createTheme} from '@mui/material/styles';


const theme = createTheme({
  palette:{
    primary:{
      main: green[700],
    },
  },
});



function App() {
  const [messageList, setMessageList]= useState ([]);  
  const ref = useRef(null); 

function handleSubmit(event){
  event.preventDefault();
  const target = event.target;
  const author = target.author.value;
  const text = target.text.value;

setMessageList(prev=>[...prev, {
            id:giveLastId(prev),
            author:author,
            text:text,
}]);
}
function giveLastId(array) {
return array.length ? array[array.length-1].id+1:0;
}


useEffect(()=>{
  setTimeout(()=>{
    botAnswear(messageList);
  },1500);
},[messageList] );

function botAnswear() {
  const lastAuthor = messageList[messageList.length-1];
  if (lastAuthor && lastAuthor.author) {
    setMessageList(prev=>[...prev,{
id: giveLastId(prev),
text: `Сообщение автора ${lastAuthor.author} отправлено`,
    }]);
  }

  ref.current.focus()
}

return (
<ThemeProvider  theme={theme}>
    <div className="container">
      <Box component="form" noValidate
           autoComplete ="off"mt={4} display="flex"
           flexDirection ="column"onSubmit={handleSubmit}>

       <TextField id="name" label="Имя"
                  variant="outlined" sx={{mb:2}}
                  name="author"
                  inputRef={ref}/>
      <TextField id="message" label="Сообщение"
                  variant="outlined" sx={{mb:2}}
                  name="text"
                  inputRef={ref}/>
<Button variant="outlined"color='primary'
size="small" type="submit" sx={{mb:4}}>Отправить</Button>
     </Box>
   <div className="message-list">
      {messageList.map(message=>
      <div className="message-list__item" key={message.id}>
      {message.author &&
             <p className='message-list__p'><span>Автор</span>{message.author}</p>}
             <p className='message-list__p'>{message.author && <span>Текст</span>}{message.text}</p>
           </div> 
          )}
       </div>
    </div>

    </ThemeProvider>
  );
      }
export default App;