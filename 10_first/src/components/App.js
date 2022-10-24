import {Routes,Route} from "react-router-dom";
import HomePage from "../PAGES/HomePage";
import LoginPage from  "../PAGES/LoginPage";
import RegisterPage from  "../PAGES/RegisterPage";
import NotFoundPage from "../PAGES/NotFoundPage";
import AboutPage from "../PAGES/AboutPage";
import Layout from "./layout";
import ProtectedRoutes from "./ProtectedRoutes";
import AddContactPage from "../PAGES/AddContactPage";

function App() {
  return (

      <Routes>
        <Route path={'/'}element={<Layout/>}>
          <Route path='/'element={<HomePage/>}/>
          <Route path='/login'element={<LoginPage/>}/>
          <Route path={'/addcontact'}element={<ProtectedRoutes>
            <AddContactPage/>
          </ProtectedRoutes>}/>
          <Route path={'/register'}element={<RegisterPage/>}/>
          <Route path={'/about'}element={<AboutPage/>}/>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
      </Routes>

  
  );
}

export default App;
