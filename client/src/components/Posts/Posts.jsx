/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../Redux/Actions/postsAction';
import PostsItem from './PostsItem/PostsItem';

function Posts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const { posts } = useSelector((state) => state);
  return (
    <div className="info">
      <h1>Все записи</h1>
      <div className="posts">
        {posts.map((el) => <PostsItem key={el.id} user_id={el.user_id} id={el.id} description={el.description} name={el.name} />)}
      </div>
    </div>
  );
}

export default Posts;
