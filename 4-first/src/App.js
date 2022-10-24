import './App.css';
import {Routes,Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ChatsPage from "./pages/ChatsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";



function App() {
  return (
    <Routes>
     <Route/>
       <Route path = '/'element={<HomePage/>}/>
       <Route path={'/chats'}element={<ChatsPage/>}/>
       <Route path={'*'}element={<NotFoundPage/>}/>
       <Route path={'profile'}element={<ProfilePage/>}/>
    </Routes>
  );
}

export default App;
