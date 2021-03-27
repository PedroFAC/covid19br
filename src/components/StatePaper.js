import React, { useState, useEffect } from 'react';
import {
  Paper,
  Grid,
  Typography,
  CircularProgress,
  Icon,
} from '@material-ui/core';
import api from '../service/api';
import { PieChart } from 'react-minimal-pie-chart';
import Skeleton from '@material-ui/lab/Skeleton';
import common from '../styles/common';
import dateParse from '../functions/dateParse';

const StatePaper = ({ uf }) => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const pieData = [
    {
      title: 'Casos Ativos',
      value: data.cases - (data.deaths + data.refuses + data.suspects),
      color: '#1769AA',
    },
    { title: 'Óbitos', value: data.deaths, color: '#B23C17' },
  ];
  const date = dateParse(data.datetime);
  const classes = common();
  useEffect(() => {
    const fetchState = async () => {
      const response = await api.get('/brazil/uf/' + uf);
      const { data } = response;
      setData(data);
      setLoaded(true);
    };
    fetchState();
  }, []);
  return (
    <div>
      <Paper elevation={3} className={classes.paper}>
        <Typography data-testid="state-paper-title" variant="h3">
          {loaded ? data.state : <Skeleton />}
        </Typography>
        <Grid container direction="column">
          <Grid xs container item direction="row" spacing={4}>
            <Grid xs container item direction="column">
              <Grid container item xs>
                <Icon>done</Icon>
                <Typography
                  data-testid="state-paper-confirmed"
                  variant="overline"
                  gutterBottom
                >
                  Casos Confirmados
                </Typography>
              </Grid>
              <Typography
                className={classes.number}
                variant="body1"
                gutterBottom
              >
                {loaded ? data.cases : <Skeleton />}
              </Typography>
            </Grid>
            <Grid xs container item direction="column">
              <Grid container item>
                <Icon>block</Icon>
                <Typography
                  data-testid="state-paper-suspects"
                  variant="overline"
                  gutterBottom
                >
                  Casos não-confirmados
                </Typography>
              </Grid>
              <Typography
                className={classes.number}
                variant="body1"
                gutterBottom
              >
                {loaded ? data.suspects : <Skeleton />}
              </Typography>
            </Grid>
            <Grid xs container item direction="column">
              <Grid container item>
                <Icon>call_split</Icon>
                <Typography
                  data-testid="state-paper-refuses"
                  variant="overline"
                  gutterBottom
                >
                  Casos Reiterados
                </Typography>
              </Grid>
              <Typography
                className={classes.number}
                variant="body1"
                gutterBottom
              >
                {loaded ? data.refuses : <Skeleton />}
              </Typography>
            </Grid>
            <Grid xs container item direction="column">
              <Grid container item>
                <Icon>person_remove</Icon>
                <Typography
                  data-testid="state-paper-deaths"
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
          </Grid>
          <Grid xs container item direction="row" spacing={2}>
            <Grid container item direction="column">
              <Grid container item>
                <Grid container item>
                  <Icon>pie_chart</Icon>
                  <Typography
                    data-testid="state-paper-lethality"
                    variant="overline"
                    gutterBottom
                  >
                    Letalidade
                  </Typography>
                </Grid>
                <Typography
                  className={classes.number}
                  variant="body1"
                  gutterBottom
                >
                  {loaded ? (
                    Math.round((data.deaths / data.cases) * 100) + '%'
                  ) : (
                    <Skeleton />
                  )}
                </Typography>
              </Grid>
              <Grid container item>
                {loaded ? (
                  <PieChart
                    data={pieData}
                    labelPosition={106}
                    label={({ dataEntry }) => dataEntry.title}
                    labelStyle={(index) => ({
                      fontSize: '5px',
                      fontFamily: 'Roboto',
                    })}
                    center={[300, 50]}
                    viewBoxSize={[400, 100]}
                    radius={40}
                  />
                ) : (
                  <Grid container justify="center">
                    <CircularProgress />
                  </Grid>
                )}
              </Grid>
              <Grid xs container item>
                <Icon>access_time</Icon>
                <Typography variant="overline" gutterBottom>
                  Atualizado em:{loaded ? date : <Skeleton />}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default StatePaper;
