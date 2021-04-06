import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrazilPanel } from '../components';
import { makeServer } from '../service/mock';

describe('Testing BrazilPanel Component', () => {
  let server;

  const dummyData = {
    country: "Brazil",
    cases: 1275291,
    confirmed: 13013601,
    deaths: 332752,
    recovered: 11405558,
    updated_at: "2021-04-06T03:20:48.000Z"
  };

  const mockLoadContent = async() => {
    return dummyData;
  }

  beforeEach(() => {
    server = makeServer();
    server.logging = false;
    render(<BrazilPanel loadContent={mockLoadContent} country="/brazil"/>);
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

  it('Should do fetching correctly', async () => {
    const casesValue = await screen.findByTestId('brazil-panel-cases-value');
    const deathsValue = await screen.findByTestId('brazil-panel-deaths-value');
    const recoveredValue = await screen.findByTestId(
      'brazil-panel-recovered-value'
    );

    await waitFor(() => {
      expect(casesValue).toBeInTheDocument();
      expect(deathsValue).toBeInTheDocument();
      expect(recoveredValue).toBeInTheDocument();
    });
  });

  it('Should render correct data at their places', async() => {
    const casesValue = await screen.findByTestId('brazil-panel-cases-value');
    const deathsValue = await screen.findByTestId('brazil-panel-deaths-value');
    const recoveredValue = await screen.findByTestId(
      'brazil-panel-recovered-value'
    );

    await waitFor(() => {
      expect(casesValue).toHaveTextContent(dummyData.confirmed.toString()); // Must be 'dummmyData.cases'?
      expect(deathsValue).toHaveTextContent(dummyData.deaths.toString());
      expect(recoveredValue).toHaveTextContent(dummyData.recovered.toString());
    });
  });
});
