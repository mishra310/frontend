import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import EventHandling from './components/EventHandling';

function App() {
  return (
    <div >

      {/* <Login /> */}

      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Navigate to={'/home'} />} />
          <Route path='home' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='Signup' element={<Signup />} />
          <Route path='event' element={<EventHandling />} />
          

        </Routes>
      </BrowserRouter>

      {/* <input type="text" /> */}
    </div>
  );
}

export default App;
