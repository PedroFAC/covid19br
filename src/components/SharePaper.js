import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import common from '../styles/common';

const SharePaper = () => {
  const url = 'https://covid-19brazil.netlify.app/';
  const title = 'Informações sobre COVID-19 no Brasil ';
  const classes = common();
  return (
    <div>
      <Grid className={classes.share} container direction="column" spacing={1}>
        <Grid item>
          <Typography data-testid="share-paper-subtitle" variant="subtitle1">
            Compartilhe:
          </Typography>
        </Grid>
        <Grid
          className={classes.share}
          container
          item
          direction="row"
          spacing={1}
        >
          <Grid item>
            <FacebookShareButton
              data-testid="share-paper-facebook"
              url={url}
              quote={title}
            >
              <FacebookIcon size={48} round />
            </FacebookShareButton>
          </Grid>
          <Grid item>
            <TwitterShareButton
              data-testid="share-paper-twitter"
              url={url}
              title={title}
            >
              <TwitterIcon size={48} round />
            </TwitterShareButton>
          </Grid>
          <Grid item>
            <WhatsappShareButton
              data-testid="share-paper-whatsapp"
              url={url}
              title={title}
            >
              <WhatsappIcon size={48} round />
            </WhatsappShareButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SharePaper;
