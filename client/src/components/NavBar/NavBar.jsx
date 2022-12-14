import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
      <Menu mode="horizontal" defaultSelectedKeys={['main']}>
        <Menu.Item key="maim">
          <Link to="/">Главная</Link>
        </Menu.Item>
        <Menu.Item key="singin">
          <Link to="/singin">Вход</Link>
        </Menu.Item>
        <Menu.Item key="register">
          <Link to="/register">Регистрация</Link>
        </Menu.Item>

      </Menu>
    </div>
  );
}

export default NavBar;
