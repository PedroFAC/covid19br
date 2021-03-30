import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { VaccinationPanel } from '../components';
import { makeServer } from '../service/mock';

describe('Testing VaccinationPanel Component', () => {
  let server;
  beforeEach(() => {
    server = makeServer();
    render(<VaccinationPanel />);
  });

  afterEach(() => {
    server.shutdown();
  });

  it('Should render table correctly', async () => {
    const table = await screen.findByTestId('vaccination-panel-table');
    const title = await screen.findByText('Vacinação');
    const country = await screen.findByText('País');
    const cases = await screen.findByText('Vacinados');

    expect(table).toBeInTheDocument();
    expect(table).toContainElement(title);
    expect(table).toContainElement(country);
    expect(table).toContainElement(cases);
  });
});
