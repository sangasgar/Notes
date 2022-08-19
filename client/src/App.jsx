import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Chat from './components/Chat/Chat';
import MyAccount from './components/MyAccount/MyAccount';
import MyPosts from './components/MyPosts/MyPosts';
import NavBar from './components/NavBar/NavBar';
import NavBarReg from './components/NavBarReg/NavBarReg';
import PostAdd from './components/Posts/PostAdd/PostAdd';
import Posts from './components/Posts/Posts';
import Register from './components/Register/Register';
import SendMessage from './components/SendMessage/SendMessage';
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
        <Route path="/" element={<Posts />} />
        <Route path="/singin" element={user.name ? <Navigate replace to="/my-account" /> : <Singin />} />
        <Route path="/register" element={user.name ? <Navigate replace to="/my-account" /> : <Register />} />
        <Route path="/send" element={!user.name ? <Navigate replace to="/" /> : <SendMessage />} />
        <Route path="/my-account" element={!user.name ? <Navigate replace to="/" /> : <MyAccount />} />
        <Route path="/posts/add" element={!user.name ? <Navigate replace to="/" /> : <PostAdd />} />
        <Route path="/my-posts" element={!user.name ? <Navigate replace to="/" /> : <MyPosts />} />
        <Route path="/chat" element={!user.name ? <Navigate replace to="/" /> : <Chat />} />
      </Routes>
    </div>
  );
}

export default App;
