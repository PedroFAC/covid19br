import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TopBar } from '../components';
import { makeServer } from '../service/mock';

describe('Testing TopBar Component', () => {
  let server;
  beforeEach(() => {
    server = makeServer();
    render(<TopBar />);
  });

  afterEach(() => {
    server.shutdown();
  });
  it('Should render top bar correctly', async () => {
    const title = await screen.findByTestId('top-bar-title');
    const generalButton = await screen.findByTestId('top-bar-general-button');
    const brazilButton = await screen.findByTestId('top-bar-brazil-button');

    expect(title).toBeInTheDocument();
    expect(generalButton).toBeInTheDocument();
    expect(brazilButton).toBeInTheDocument();
  });
});
