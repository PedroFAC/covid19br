import React, { useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  Typography,
  CircularProgress,
  Icon,
} from '@material-ui/core';
import api from '../service/api';
import { PieChart } from 'react-minimal-pie-chart';
import Skeleton from '@material-ui/lab/Skeleton';
import common from '../styles/common';
import dateParse from '../functions/dateParse';

const BrazilPanelLarge = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const pieData = [
    {
      title: 'Casos Ativos',
      value: data.confirmed - (data.deaths + data.recovered),
      color: '#1769AA',
    },
    { title: 'Óbitos', value: data.deaths, color: '#B23C17' },
    { title: 'Casos Curados', value: data.recovered, color: '#4CAF50' },
  ];
  const classes = common();
  const date = dateParse(data.updated_at);
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
          data-testid="brazil-panel-large-title"
          className={classes.header}
          variant="h6"
        >
          Brasil
        </Typography>
        <Grid
          className={classes.grid}
          direction="column"
          justify="center"
          container
        >
          <Grid xs item container direction="column">
            <Grid item container>
              <Icon>done</Icon>
              <Typography
                data-testid="brazil-panel-large-cases"
                variant="overline"
                gutterBottom
              >
                Número de casos
              </Typography>
            </Grid>
            <Typography
              data-testid={loaded ? 'brazil-panel-large-cases-value' : ''}
              className={classes.number}
              variant="body1"
              gutterBottom
            >
              {loaded ? data.confirmed : <Skeleton />}
            </Typography>
          </Grid>
          <Grid xs item container direction="row">
            <Grid item container>
              <Grid xs item container direction="column">
                <Grid item container>
                  <Icon>person_remove</Icon>
                  <Typography
                    data-testid="brazil-panel-large-deaths"
                    variant="overline"
                    gutterBottom
                  >
                    Óbitos Confirmados
                  </Typography>
                </Grid>
                <Typography
                  data-testid={loaded ? 'brazil-panel-large-deaths-value' : ''}
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
                    data-testid="brazil-panel-large-recovered"
                    variant="overline"
                    gutterBottom
                  >
                    Casos Curados
                  </Typography>
                </Grid>
                <Typography
                  data-testid={
                    loaded ? 'brazil-panel-large-recovered-value' : ''
                  }
                  className={classes.number}
                  variant="body1"
                  gutterBottom
                >
                  {loaded ? data.recovered : <Skeleton />}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs item>
            {loaded ? (
              <PieChart
                data={pieData}
                labelPosition={112}
                label={({ dataEntry }) => dataEntry.title}
                labelStyle={(index) => ({
                  fontSize: '5px',
                  fontFamily: 'Roboto',
                })}
                viewBoxSize={[100, 100]}
                radius={20}
              />
            ) : (
              <Grid className={classes.progress} container justify="center">
                <CircularProgress />
              </Grid>
            )}
          </Grid>
          <Grid xs item container>
            <Icon>access_time</Icon>
            <Typography variant="overline" gutterBottom>
              Atualizado em:{loaded ? date : <Skeleton />}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default BrazilPanelLarge;
