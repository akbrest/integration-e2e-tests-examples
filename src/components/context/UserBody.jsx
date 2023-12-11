import React from 'react';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';

const UserBody = () => {
  const { details } = useContext(UserContext);

  return (
    <div className="user-body" data-testid="user-details">
      {details}
    </div>
  );
};

export default UserBody;
