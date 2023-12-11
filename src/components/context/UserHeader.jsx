import UserContext from '../../context/UserContext';
import { useContext } from 'react';

const UserHeader = () => {
  const { name } = useContext(UserContext);

  return (
    <h3 className="user-header" data-testid="user-name">
      {name}
    </h3>
  );
};

export default UserHeader;
