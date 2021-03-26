import React, { useState, useEffect } from 'react';
import { Tabela } from './';
import { Paper } from '@material-ui/core';
import api from '../service/api';
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';

const CountriesPanel = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const colunas = [
    {
      title: 'País',
      field: 'country',
      render: (rowData) => {
        if (rowData.country === 'Brazil') {
          return <Link to="/brazil">{rowData.country}</Link>;
        } else {
          return rowData.country;
        }
      },
    },
    { title: 'Casos Confirmados', field: 'confirmed' },
    { title: 'Mortes', field: 'deaths' },
  ];

  const emptyState = () => {
    let array = [];
    for (let i = 0; i < 5; i++) {
      array.push({ state: '', cases: '', deaths: '' });
    }
    return array;
  };
  const emptyColumns = [
    { title: 'País', field: 'state', render: () => <Skeleton /> },
    {
      title: 'Casos Confirmados',
      field: 'cases',
      render: () => <Skeleton />,
    },
    { title: 'Mortes', field: 'deaths', render: () => <Skeleton /> },
  ];

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await api.get('/countries');
      const { data } = response.data;
      setData(data);
      setLoaded(true);
    };
    fetchCountries();
  }, []);

  return (
    <div>
      <Paper elevation={3}>
        {loaded ? (
          <Tabela data={data} columns={colunas} title="Países Afetados" />
        ) : (
          <Tabela
            data={emptyState()}
            columns={emptyColumns}
            title="Países Afetados"
          />
        )}
      </Paper>
    </div>
  );
};

export default CountriesPanel;
