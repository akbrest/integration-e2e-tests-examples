import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ApiExample from './ApiExample';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { MemoryRouter, Routes } from 'react-router-dom';
import AppRouter from '../AppRouter';

jest.mock('axios');

describe('Call API Example tests', () => {
  let mock;
  let response;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    jest.clearAllMocks();
    mock.reset();
  });

  test('when success should show posts', async () => {
    response = {
      data: [
        {
          id: 10,
          userId: 1,
          title: 'Awesome title',
          body: 'Very very long post',
        },
        {
          id: 20,
          userId: 2,
          title: 'CRY - LIV 1:2',
          body: '57 min Jean-Philippe Mateta (1:0)\n76 min Mohamed Salah (1:1)\n90+1 min Harvey Elliott (1:2)',
        },
      ],
    };

    axios.get.mockReturnValue(response);

    render(
      <MemoryRouter initialEntries={['/api-example']}>
        <AppRouter />
      </MemoryRouter>
    );

    const links = await screen.findAllByTestId('post-link');
    expect(links.length).toBe(2);
    expect(axios.get).toHaveBeenCalledTimes(1);

    const firstLink = screen.getByText(/Awesome title/i);
    fireEvent.click(firstLink);

    const postId = screen.getByTestId('post-id');
    expect(postId.textContent).toBe('10');
  });

  test('when failed should show error', async () => {
    const expectedError = 'Failed to fetch data';

    mock.onGet('https://jsonplaceholder.typicode.com/posts').reply(500);

    render(<ApiExample />);

    await waitFor(() => {
      const errorElement = screen.getByTestId('error');
      expect(errorElement).toBeInTheDocument();
      expect(errorElement).toHaveTextContent(expectedError);
    });
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
