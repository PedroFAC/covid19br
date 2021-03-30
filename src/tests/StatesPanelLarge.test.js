import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StatesPanelLarge } from '../components';
import { makeServer } from '../service/mock';

describe('Testing StatesPanelLarge Component', () => {
  let server;
  beforeEach(() => {
    server = makeServer();
    render(<StatesPanelLarge />);
  });

  afterEach(() => {
    server.shutdown();
  });
  it('Should render panel correctly', async () => {
    const table = await screen.findByTestId('states-panel-large-table');
    const state = await screen.findByText('Estado');
    const title = await screen.findByText('Estados Afetados');
    const cases = await screen.findByText('Casos Confirmados');
    const deaths = await screen.findByText('Mortes');

    expect(table).toBeInTheDocument();
    expect(table).toContainElement(title);
    expect(table).toContainElement(state);
    expect(table).toContainElement(cases);
    expect(table).toContainElement(deaths);
  });
});
