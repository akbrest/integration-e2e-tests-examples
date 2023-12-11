import UserContext from '../../context/UserContext';
import { useState } from 'react';
import UserCard from './UserCard';

const ContextExample = () => {
  const [userName, setUserName] = useState('User Number 1');
  const [userDetails, setUserDetails] = useState('User details');

  return (
    <>
      <h1>Context Example Page</h1>
      <UserContext.Provider value={{ name: userName, details: userDetails }}>
        <UserCard />
      </UserContext.Provider>
    </>
  );
};

export default ContextExample;
