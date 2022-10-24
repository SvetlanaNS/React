import React, { useEffect, useState } from 'react';

const ChatsPage= () =>{
  const [chats,setChats] =useState([
     {
     id:'1',
     name: 'Andrey'
     },
     {
     id:'2',
     name: 'Svetlana'
     }
  ])

const [name, setName]= useState('');  

const handleDelete = (id) => {
   const filteredValues = chats.filter((item)=>item.id !==id)
   setChats(filteredValues);

}
 const addHandler=() =>{
   const randomId= Math.random()
    const obj ={
      id: randomId,
      name:name
     }
    setChats(prevState => [...prevState, obj])


 }
     


    return(
     <div style={{backgroundColor:  'yellow'}}  >
      <input value ={name} onChange={(e) =>setName(e.target.value)}/>
      <button  onClick={addHandler}>Добавить чат</button>

{chats.map((chat)=> {
    return (
        <div style={{display:'flex' ,color:'blue' }}  key ={chat.id}>
           <h4>{chat.name}</h4>
           <button onClick={() => handleDelete(chat.id)}>x</button>

          </div>
           )
       })}
    </div>
    );
   };
        
        
export default ChatsPage