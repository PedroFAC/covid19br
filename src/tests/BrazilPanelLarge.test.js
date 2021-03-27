import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrazilPanelLarge } from '../components';
import { makeServer } from '../service/mock';

describe('Testing BrazilPanelLarge Component', () => {
  let server;
  beforeEach(() => {
    server = makeServer();
    render(<BrazilPanelLarge />);
  });

  afterEach(() => {
    server.shutdown();
  });

  it('Should render card correctly', async () => {
    const title = await screen.findByTestId('brazil-panel-large-title');
    const cases = await screen.findByTestId('brazil-panel-large-cases');
    const recovered = await screen.findByTestId('brazil-panel-large-recovered');
    const deaths = await screen.findByTestId('brazil-panel-large-deaths');
    expect(title).toBeInTheDocument();
    expect(cases).toBeInTheDocument();
    expect(recovered).toBeInTheDocument();
    expect(deaths).toBeInTheDocument();
  });
});
