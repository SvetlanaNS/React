import {useDispatch, useSelector} from "react-redux";
import {getChats} from "../redux/chatReduser/selectors";
import {useState } from "react";

function App() {
 // const chats = useSelector (state=>state.chats.chats);
 const chats = useSelector (getChats);
 const dispatch = useDispatch ();
const [name, setName] = useState('');

 const handleDelete = (id)=> {
  dispatch ({type:'delete',payload:id})
 }
 const handleChange = (event) =>{
  setName(event.target.value)
 }
 const handleAdd=()=>{
  const obj={
    id:Math.random(),
    name: name
  }
  dispatch({
    type:'add',payload:obj
  })
 }
  return (
    <div>
      <input value={name} onChange={handleChange}/>
      <button onClick={handleAdd}>Добавить</button>
{
  chats.map((chat) =>{
    return(
      <div key ={chat.id}>
        {chat.name}
        <button onClick={()=>handleDelete(chat.id)}> x  </button>
      </div> 



     
    )
  })
}



    </div>
  );
}

export default App;
