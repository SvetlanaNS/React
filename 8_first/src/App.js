import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "./redux/postsReducer/postsReduser";

function App() {
  const posts = useSelector(state =>state.posts);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state =>state.error);
  const dispatch = useDispatch();

useEffect(( ) =>{
dispatch (getPosts())
},[ ]);
  
  const restart =()=>{
  dispatch(getPosts)
}
  if(loading) {
    return (
      <div>
        ИДЁТ ЗАГРУЗКА...
      </div>
    )
  }

  
  
  if( error){
    return (
      <div>
     ПРОИЗОШЛА ОШИБКА.<button onClick={restart}>ОБНОВИТЬ</button>
    </div>
    )
  }

  return (
    <div>
       {posts.map((post) => {
         return (
          <div key={post.id}>
            {post.title}
      </div>
      )
    })}
   </div>
    );
  }

export default App;







/*import {useEffect, useState} from "react";



function App() {
  const [users, setUsers] = useState([]);


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (response => response.json())
    .then (data =>setUsers(data))

  })
  return (
    <div>
 users.map((message) => {
    return (
      <div key={message.id}>
{message.name}
      </div>
    )
  })}
    </div>
  );
}

export default App;
*/