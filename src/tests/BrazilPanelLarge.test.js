import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrazilPanelLarge } from '../components';
import { makeServer } from '../service/mock';

describe('Testing BrazilPanelLarge Component', () => {
  let server;
  beforeEach(() => {
    server = makeServer();
    server.logging = false;
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

  it('Should do fetching correctly', async () => {
    const casesValue = await screen.findByTestId(
      'brazil-panel-large-cases-value'
    );
    const deathsValue = await screen.findByTestId(
      'brazil-panel-large-deaths-value'
    );
    const recoveredValue = await screen.findByTestId(
      'brazil-panel-large-recovered-value'
    );

    await waitFor(() => {
      expect(casesValue).toBeInTheDocument();
      expect(deathsValue).toBeInTheDocument();
      expect(recoveredValue).toBeInTheDocument();
    });
  });
});
