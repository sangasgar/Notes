import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/Actions/userActions';

function NavBarReg() {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout);
    window.location.assign('/');
  };
  return (
    <div className="NavBar">
      <Menu mode="horizontal" defaultSelectedKeys={['my-account']}>
        <Menu.Item key="maim">
          <Link to="/">Главная</Link>
        </Menu.Item>
        <Menu.Item key="posts-add">
          <Link to="/posts/add">Добавить запись</Link>
        </Menu.Item>
        <Menu.Item key="posts">
          <Link to="/my-posts">Мои записи</Link>
        </Menu.Item>
        <Menu.Item key="send">
          <Link to="/send">Отправить письмо</Link>
        </Menu.Item>
        <Menu.Item key="my-account">
          <Link to="/my-account">Мой аккаунт</Link>
        </Menu.Item>
        <Menu.Item key="chat">
          <Link to="/chat">Чат</Link>
        </Menu.Item>
        <Menu.Item key="my-account">
          <Link onClick={logoutUser} to="/#">Выход</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default NavBarReg;
