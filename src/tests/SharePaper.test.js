import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SharePaper } from '../components';
import { makeServer } from '../service/mock';

describe('Testing SharePaper Component', () => {
  let server;
  beforeEach(() => {
    server = makeServer();
    render(<SharePaper />);
  });

  afterEach(() => {
    server.shutdown();
  });

  it('Should render buttons correctly', async () => {
    const subtitle = await screen.findByTestId('share-paper-subtitle');
    const facebookButton = await screen.findByTestId('share-paper-facebook');
    const twitterButton = await screen.findByTestId('share-paper-twitter');
    const whatsappButton = await screen.findByTestId('share-paper-whatsapp');

    expect(subtitle).toBeInTheDocument();
    expect(facebookButton).toBeInTheDocument();
    expect(twitterButton).toBeInTheDocument();
    expect(whatsappButton).toBeInTheDocument();
  });
});
