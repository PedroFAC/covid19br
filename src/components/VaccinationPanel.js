import React, { useState, useEffect } from 'react';
import { Tabela } from './';
import { Paper } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import faker from 'faker';

const VaccinationPanel = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const colunas = [
    {
      title: 'País',
      field: 'country',
    },
    { title: 'Vacinados', field: 'cases' },
  ];

  const emptyState = () => {
    let array = [];
    for (let i = 0; i < 5; i++) {
      array.push({ state: '', cases: '' });
    }
    return array;
  };
  const emptyColumns = [
    { title: 'País', field: 'country', render: () => <Skeleton /> },
    {
      title: 'Vacinados',
      field: 'cases',
      render: () => <Skeleton />,
    },
  ];

  const getRandomCountries = () => {
    const newArray = Array(192)
      .fill(0)
      .map(() => {
        return {
          country: faker.address.country(),
          cases: faker.random.number(),
        };
      });
    console.log(newArray);
    setData(newArray);
    setLoaded(true);
  };

  useEffect(() => {
    setTimeout(getRandomCountries, 5000);
  }, []);

  return (
    <div>
      <Paper data-testid="vaccination-panel-table" elevation={3}>
        <Tabela
          data={loaded ? data : emptyState()}
          columns={loaded ? colunas : emptyColumns}
          title="Vacinação"
        />
      </Paper>
    </div>
  );
};

export default VaccinationPanel;
