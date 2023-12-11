import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ApiExample = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts(response.data);
    } catch (error) {
      setError('Failed to fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Api Example Page</h1>
      <div>
        {isLoading && <div>Loading ...</div>}
        {error && <div data-testid="error">{error}</div>}
        {posts &&
          posts.map((post) => {
            return (
              <div key={post.id} className="post-link" data-testid="post-link">
                <Link to={`/api-example/${post.id}`}>{post.title}</Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ApiExample;
