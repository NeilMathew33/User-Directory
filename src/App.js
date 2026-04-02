import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllUsers from './Components/ViewAllUsers';
import AddUser from './Components/AddUser'
import UserNavbar from './Components/UserNavbar';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" element= {<AddUser />}/>
      <Route path= "/ViewAll" element= {<ViewAllUsers />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
