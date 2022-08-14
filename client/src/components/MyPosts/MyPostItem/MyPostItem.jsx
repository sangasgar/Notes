import React, { useState } from 'react';
import { Button, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { updatePost, deletePost } from '../../../Redux/Actions/postAction';

const { Title, Paragraph } = Typography;

function MyPostItem({
  name, id, description, userId, setValueDelete, setValueChange,
}) {
  // const [value, setValue] = useState(false);
  const [valueName, setValueName] = useState(name);
  const [valueDescription, setValueDescription] = useState(description);
  const [value, setValue] = useState(false);
  const edit = () => {
    setValue(true);
  };
  const cancel = () => {
    setValue(false);
  };
  const dispatch = useDispatch();
  const save = () => {
    dispatch(updatePost({
      name: valueName, description: valueDescription, id, userId,
    }));
    setValue(false);
    setValueChange(true);
  };
  const deletePostOne = () => {
    dispatch(deletePost(id));
    setValueDelete(true);
  };
  const descriptionHandler = (event) => {
    event.preventDefault();
    setValueDescription(event.target.value);
  };
  const namelHandler = (event) => {
    event.preventDefault();
    setValueName(event.target.value);
  };
  return (
    <>
      <Title level={3}>
        {!value ? name : (
          <form>
            {' '}
            <input type="text" name="name" onChange={namelHandler} value={valueName} />
          </form>
        ) }
      </Title>
      {' '}
      {!value ? <Paragraph strong copyable>{description}</Paragraph> : (
        <form>
          {' '}
          <textarea rows="10" cols="100" className="textPost" type="text" name="description" onChange={descriptionHandler} value={valueDescription} />
        </form>
      ) }
      {!value ? (
        <>
          <Button onClick={edit}>Ред.</Button>
          {' '}
          <Button onClick={deletePostOne}>Удалить</Button>
        </>
      ) : (
        <>
          <Button onClick={save}>Сохранить.</Button>
          {' '}
          <Button onClick={cancel}>X</Button>
        </>
      )}
    </>
  );
}

export default MyPostItem;
