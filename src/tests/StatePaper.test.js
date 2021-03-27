import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StatePaper } from '../components';
import { makeServer } from '../service/mock';

describe('Testing StatePaper Component', () => {
  let server;
  beforeEach(() => {
    server = makeServer();
    render(<StatePaper uf="CE" />);
  });

  afterEach(() => {
    server.shutdown();
  });
  it('Should render paper correctly', async () => {
    const title = await screen.findByTestId('state-paper-title');
    const confirmed = await screen.findByTestId('state-paper-confirmed');
    const suspects = await screen.findByTestId('state-paper-suspects');
    const refuses = await screen.findByTestId('state-paper-refuses');
    const deaths = await screen.findByTestId('state-paper-deaths');
    const lethality = await screen.findByTestId('state-paper-lethality');

    expect(title).toBeInTheDocument();
    expect(confirmed).toBeInTheDocument();
    expect(suspects).toBeInTheDocument();
    expect(refuses).toBeInTheDocument();
    expect(deaths).toBeInTheDocument();
    expect(lethality).toBeInTheDocument();
  });
});
