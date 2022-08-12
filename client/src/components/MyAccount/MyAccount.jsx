import { Button } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../Redux/Actions/userActions';

function MyAccount() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const [value, setValue] = useState(false);
  const [valueNameBool, setValueBool] = useState(false);
  const [valueName, setValueName] = useState(user.name);
  const [valueEmail, setValueEmail] = useState(user.email);
  const edit = () => {
    setValue(true);
  };
  const cancel = () => {
    setValue(false);
  };
  const save = () => {
    dispatch(editUser({ id: user.id, name: valueName, email: valueEmail }));
    setValue(false);
  };
  const editName = () => {
    setValueBool(true);
  };
  const cancelName = () => {
    setValueBool(false);
  };
  const saveName = () => {
    dispatch(editUser({ id: user.id, name: valueName, email: valueEmail }));
    setValueBool(false);
  };
  const emailHandler = (event) => {
    event.preventDefault();
    setValueEmail(event.target.value);
  };
  const namelHandler = (event) => {
    event.preventDefault();
    setValueName(event.target.value);
  };
  return (
    <div className="info">
      {user.name ? (
        <h1>
          Добро пожаловать
          {' '}
          {user.name}
        </h1>
      ) : null}

      <h3>
        Ваша почта:
        {' '}
        {!value ? user.email : (
          <form>
            {' '}
            <input type="email" name="email" value={valueEmail} onChange={emailHandler} />
          </form>
        ) }
        {' '}
        {!value ? <Button onClick={edit}>Ред.</Button> : (
          <>
            <Button onClick={save}>Сохранить.</Button>
            {' '}
            <Button onClick={cancel}>X</Button>
          </>
        )}
      </h3>
      <h3>
        Ваша имя:

        {!valueNameBool ? user.name : (
          <form>
            {' '}
            <input type="text" name="name" value={valueName} onChange={namelHandler} />
          </form>
        ) }
        {' '}
        {!valueNameBool ? <Button onClick={editName}>Ред.</Button> : (
          <>
            <Button onClick={saveName}>Сохранить.</Button>
            {' '}
            <Button onClick={cancelName}>X</Button>
          </>
        )}
      </h3>
    </div>
  );
}

export default MyAccount;
