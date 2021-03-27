import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Icon } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import api from '../service/api';
import common from '../styles/common';
import dateParse from '../functions/dateParse';

const BrazilPanel = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const date = dateParse(data.updated_at);
  const classes = common();
  useEffect(() => {
    const fetchCountry = async () => {
      const response = await api.get('/brazil');
      const { data } = response.data;
      setData(data);
      setLoaded(true);
    };
    fetchCountry();
  }, []);

  return (
    <div>
      <Paper elevation={3} className={classes.paper}>
        <Typography
          data-testid="brazil-panel-title"
          className={classes.header}
          variant="h6"
          gutterBottom
        >
          Brasil
        </Typography>
        <Grid
          className={classes.grid}
          direction="column"
          justify="center"
          container
          spacing={2}
        >
          <Grid xs item container direction="column">
            <Grid item container>
              <Icon>done</Icon>
              <Typography
                data-testid="brazil-panel-cases"
                variant="overline"
                gutterBottom
              >
                Número de casos
              </Typography>
            </Grid>
            <Typography className={classes.number} variant="body1" gutterBottom>
              {loaded ? data.confirmed : <Skeleton />}
            </Typography>
          </Grid>
          <Grid xs item container direction="row">
            <Grid item container>
              <Grid xs item container direction="column">
                <Grid item container>
                  <Icon>person_remove</Icon>
                  <Typography
                    data-testid="brazil-panel-deaths"
                    variant="overline"
                    gutterBottom
                  >
                    Óbitos Confirmados
                  </Typography>
                </Grid>
                <Typography
                  className={classes.number}
                  variant="body1"
                  gutterBottom
                >
                  {loaded ? data.deaths : <Skeleton />}
                </Typography>
              </Grid>
              <Grid xs item container direction="column">
                <Grid container>
                  <Icon>healing</Icon>
                  <Typography
                    data-testid="brazil-panel-recovered"
                    variant="overline"
                    gutterBottom
                  >
                    Casos Curados
                  </Typography>
                </Grid>
                <Typography
                  className={classes.number}
                  variant="body1"
                  gutterBottom
                >
                  {loaded ? data.recovered : <Skeleton />}
                </Typography>
              </Grid>
            </Grid>
            <Grid xs item container>
              <Icon>access_time</Icon>
              <Typography variant="overline" gutterBottom>
                Atualizado em:{loaded ? date : <Skeleton />}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default BrazilPanel;
