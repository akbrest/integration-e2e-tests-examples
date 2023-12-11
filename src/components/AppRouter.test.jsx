import { render, screen, fireEvent } from '@testing-library/react';
import AppRouter from './AppRouter';
import { MemoryRouter } from 'react-router-dom';

describe('Routing tests', () => {
  test('render home page by default', () => {
    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );

    const homeElement = screen.getByText(/Home Page/i);
    expect(homeElement).toBeInTheDocument();
  });

  test('navigate to about page', () => {
    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );

    const aboutLink = screen.getByText(/About/i);
    fireEvent.click(aboutLink);

    const aboutElement = screen.getByText(/About Page/i);
    expect(aboutElement).toBeInTheDocument();
  });

  test('navigate to contact page', () => {
    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );

    const contactLink = screen.getByText(/Contact/i);
    fireEvent.click(contactLink);

    const contactElement = screen.getByText(/Contact Page/i);
    expect(contactElement).toBeInTheDocument();
  });

  test('navigate from contact to main page', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <AppRouter />
      </MemoryRouter>
    );

    const contactLink = screen.getByText(/Home/i);
    fireEvent.click(contactLink);

    const contactElement = screen.getByText(/Home Page/i);
    expect(contactElement).toBeInTheDocument();
  });
});
