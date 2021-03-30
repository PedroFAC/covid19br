import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StatePaper } from '../components';
import { makeServer } from '../service/mock';

describe('Testing StatePaper Component', () => {
  let server;
  beforeEach(() => {
    server = makeServer();
    server.logging = false;
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

  it('Should do fetching correctly', async () => {
    const stateName = await screen.findByText('Ceará');
    const confirmedValue = await screen.findByTestId(
      'state-paper-confirmed-value'
    );
    const suspectsValue = await screen.findByTestId(
      'state-paper-suspects-value'
    );
    const refusesValue = await screen.findByTestId('state-paper-refuses-value');
    const deathsValue = await screen.findByTestId('state-paper-deaths-value');

    await waitFor(() => {
      expect(stateName).toBeInTheDocument();
      expect(confirmedValue).toBeInTheDocument();
      expect(suspectsValue).toBeInTheDocument();
      expect(refusesValue).toBeInTheDocument();
      expect(deathsValue).toBeInTheDocument();
    });
  });
});
