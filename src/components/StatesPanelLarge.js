import React, { useState, useEffect } from 'react';
import { Tabela } from './';
import { Paper } from '@material-ui/core';
import api from '../service/api';
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';

const StatesPanelLarge = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const emptyState = () => {
    let array = [];
    for (let i = 0; i < 5; i++) {
      array.push({ state: '', cases: '', deaths: '' });
    }
    return array;
  };

  const emptyColumns = [
    { title: 'Estado', field: 'state', render: () => <Skeleton /> },
    {
      title: 'Casos Confirmados',
      field: 'cases',
      render: () => <Skeleton />,
    },
    { title: 'Mortes', field: 'deaths', render: () => <Skeleton /> },
  ];

  const colunas = [
    {
      title: 'Estado',
      field: 'state',
      render: (rowData) => (
        <Link to={'/estados/' + rowData.uf}>{rowData.state}</Link>
      ),
    },
    { title: 'Casos Confirmados', field: 'cases' },
    { title: 'Mortes', field: 'deaths' },
  ];

  useEffect(() => {
    const fetchStates = async () => {
      const response = await api.get('/');
      const { data } = response.data;
      setData(data);
      setLoaded(true);
    };
    fetchStates();
  }, []);
  return (
    <div>
      <Paper data-testid="states-panel-large-table" elevation={3}>
        <Tabela
          data={loaded ? data : emptyState()}
          columns={loaded ? colunas : emptyColumns}
          title="Estados Afetados"
        />
      </Paper>
    </div>
  );
};

export default StatesPanelLarge;
