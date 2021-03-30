import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CountriesPanel } from '../components';
import { makeServer } from '../service/mock';

describe('Testing CountriesPanel Component', () => {
  let server;
  beforeEach(() => {
    server = makeServer();
    render(<CountriesPanel />);
  });

  afterEach(() => {
    server.shutdown();
  });

  it('Should render table correctly', async () => {
    const table = await screen.findByTestId('countries-panel-table');
    const title = await screen.findByText('Países Afetados');
    const country = await screen.findByText('País');
    const cases = await screen.findByText('Casos Confirmados');
    const deaths = await screen.findByText('Mortes');

    expect(table).toBeInTheDocument();
    expect(table).toContainElement(title);
    expect(table).toContainElement(country);
    expect(table).toContainElement(cases);
    expect(table).toContainElement(deaths);
  });
});
