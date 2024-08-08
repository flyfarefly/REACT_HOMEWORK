// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const SinglePost = () => {
  const params = useParams();
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const req = await fetch(
        'https://jsonplaceholder.typicode.com/posts/' + params.postId
      );
      const resp = await req.json();
      setCurrentPost(resp);
    };
    fetchPosts();
  }, [params]);

  return (
    <BaseTemplate title="Single Post">
      <ul>
        {currentPost &&
          Object.keys(currentPost).map((key) => {
            return (
              <li key={uuidv4()}>
                <b>{key}</b>: {currentPost[key]}
              </li>
            );
          })}
      </ul>
    </BaseTemplate>
  );
};

export default SinglePost;
