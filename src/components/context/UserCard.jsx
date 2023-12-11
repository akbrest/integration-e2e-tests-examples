import React from 'react';
import UserHeader from './UserHeader';
import UserBody from './UserBody';

const UserCard = () => {
  return (
    <div className="user-card">
      <h2>User Card</h2>
      <UserHeader />
      <UserBody />
    </div>
  );
};

export default UserCard;
