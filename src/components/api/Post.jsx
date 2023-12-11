import React from 'react';
import { useParams } from 'react-router-dom';

const Post = (props) => {
  const params = useParams();

  return (
    <div className="post" data-testid="post">
      <h2 data-testid="post-id">{params.id}</h2>
      <h3 data-testid="post-title">Title from API</h3>
      <p data-testid="post-body">Body from API</p>
    </div>
  );
};

export default Post;
