import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllUsers from './Components/ViewAllUsers';
import AddUser from './Components/AddUser'
import UserNavbar from './Components/UserNavbar';
import Login from './Components/Login';
import SignUp from './Components/Signup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/Add" element= {<AddUser />}/>
      <Route path= "/ViewAll" element= {<ViewAllUsers />}/>
      <Route path= "/" element= {<Login />}/>
      <Route path= "/Signup" element= {<SignUp />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
