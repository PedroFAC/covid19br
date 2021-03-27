import React, { useState, useEffect } from 'react';
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  Button,
  TableRow,
  Grid,
  TableBody,
} from '@material-ui/core';
import api from '../service/api';
import { useHistory } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import common from '../styles/common';

const StatesPanel = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const emptyState = () => {
    let array = [];
    for (let i = 0; i < 5; i++) {
      array.push('');
    }
    return array;
  };

  useEffect(() => {
    const fetchStates = async () => {
      const response = await api.get('/');
      const { data } = response;
      setData(data);
      setLoaded(true);
    };
    fetchStates();
  }, []);

  let history = useHistory();

  const handleClick = () => {
    history.push('/brazil');
  };

  const classes = common();

  return (
    <div>
      <Paper elevation={3}>
        <Grid container direction="column">
          <Grid item>
            <TableContainer>
              <Table data-testid="states-panel-table">
                <TableHead>
                  <TableRow>
                    <TableCell data-testid="states-panel-state">
                      Estado
                    </TableCell>
                    <TableCell
                      data-testid="states-panel-confirmed"
                      align="right"
                    >
                      Casos Confirmados
                    </TableCell>
                    <TableCell data-testid="states-panel-deaths" align="right">
                      Mortes
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loaded
                    ? data.data.slice(0, 5).map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{row.state}</TableCell>
                          <TableCell align="right">{row.cases}</TableCell>
                          <TableCell align="right">{row.deaths}</TableCell>
                        </TableRow>
                      ))
                    : emptyState().map((_, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Skeleton />
                          </TableCell>
                          <TableCell align="right">
                            <Skeleton />
                          </TableCell>
                          <TableCell align="right">
                            <Skeleton />
                          </TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item>
            <Grid container justify="center">
              <Button
                className={classes.buttonAlign}
                onClick={handleClick}
                variant="outlined"
                color="primary"
              >
                Ver todos
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default StatesPanel;
