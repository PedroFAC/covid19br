import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StatesPanel } from '../components';
import { makeServer } from '../service/mock';

describe('Testing StatesPanel Component', () => {
  let server;
  beforeEach(() => {
    server = makeServer();
    render(<StatesPanel />);
  });

  afterEach(() => {
    server.shutdown();
  });
  it('Should render panel correctly', async () => {
    const table = await screen.findByTestId('states-panel-table');
    const state = await screen.findByTestId('states-panel-state');
    const confirmed = await screen.findByTestId('states-panel-confirmed');
    const deaths = await screen.findByTestId('states-panel-deaths');

    expect(table).toBeInTheDocument();
    expect(state).toBeInTheDocument();
    expect(confirmed).toBeInTheDocument();
    expect(deaths).toBeInTheDocument();
  });
});
