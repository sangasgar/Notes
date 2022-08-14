/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../Redux/Actions/postsAction';
import MyPostItem from './MyPostItem/MyPostItem';

function MyPosts() {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state);
  const { user } = useSelector((state) => state);
  const [valueDelete, setValueDelete] = useState(false);
  const [valueChange, setValueChange] = useState(false);
  useEffect(() => {
    setValueDelete(false);
    setValueChange(false);
    dispatch(getPosts());
  }, [valueDelete, valueChange]);

  return (
    <div className="info">
      <h1>Мои записи</h1>
      <div className="posts">
        {posts.map((el) => (el.user_id === user.id ? <MyPostItem key={el.id} setValueChange={setValueChange} setValueDelete={setValueDelete} userId={el.user_id} id={el.id} description={el.description} name={el.name} /> : null))}
      </div>
    </div>
  );
}

export default MyPosts;
