import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrazilPanel } from '../components';
import { makeServer } from '../service/mock';

describe('Testing BrazilPanel Component', () => {
  let server;
  beforeEach(() => {
    server = makeServer();
    render(<BrazilPanel />);
  });

  afterEach(() => {
    server.shutdown();
  });

  it('Should render card correctly', async () => {
    const title = await screen.findByTestId('brazil-panel-title');
    const cases = await screen.findByTestId('brazil-panel-cases');
    const recovered = await screen.findByTestId('brazil-panel-recovered');
    const deaths = await screen.findByTestId('brazil-panel-deaths');
    expect(title).toBeInTheDocument();
    expect(cases).toBeInTheDocument();
    expect(recovered).toBeInTheDocument();
    expect(deaths).toBeInTheDocument();
  });
});
