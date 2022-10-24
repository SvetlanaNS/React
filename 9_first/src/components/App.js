import {Routes,Route} from "react-router-dom";
import HomePage from "../PAGES/HomePage";
import LoginPage from  "../PAGES/LoginPage";
import RegisterPage from  "../PAGES/RegisterPage";
import NotFoundPage from "../PAGES/NotFoundPage";
import { applyMiddleware } from "redux";
import '../style/app.css';

function App() {
  return (

      <Routes>
        <Route path='/'element={<HomePage/>}/>
        <Route path='/login'element={<LoginPage/>}/>
        <Route path='/register'element={<RegisterPage/>}/>
        <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>

  
  );
}

export default App;
