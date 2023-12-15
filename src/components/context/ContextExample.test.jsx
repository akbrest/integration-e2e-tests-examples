import { render, screen } from '@testing-library/react';
import UserContext from '../../context/UserContext';
import UserCard from './UserCard';

describe('Context Example test', () => {
  test('render with expectd context data', () => {
    const expectedUser = {
      name: 'Itegration Test User',
      details: 'Test User Details',
    };

    render(
      <UserContext.Provider value={expectedUser}>
        <UserCard />
      </UserContext.Provider>
    );

    const userName = screen.getByTestId('user-name');
    expect(userName.textContent).toBe(expectedUser.name);

    const userDetails = screen.getByTestId('user-details');
    expect(userDetails.textContent).toBe(expectedUser.details);
  });
});
