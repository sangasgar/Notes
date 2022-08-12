import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Routes,
  Route,
} from 'react-router-dom';
import MyAccount from './components/MyAccount/MyAccount';
import NavBar from './components/NavBar/NavBar';
import NavBarReg from './components/NavBarReg/NavBarReg';
import Register from './components/Register/Register';
import Singin from './components/Singin/Singin';
import { chekUser } from './Redux/Actions/userActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(chekUser());
  }, []);
  const { user } = useSelector((state) => state);
  return (
    <div className="App">
      {user.name ? <NavBarReg /> : <NavBar />}
      <Routes>
        <Route path="/" element={<Singin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
    </div>
  );
}

export default App;
