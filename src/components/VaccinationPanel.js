import React, { useState, useEffect } from 'react';
import { Tabela } from './';
import { Paper } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import faker from 'faker';
import { arrayGenerator } from '../functions/arrayGenerator';

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
    return arrayGenerator(5).map(() => ({ state: '', cases: '' }));
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
    const newArray = arrayGenerator(192).map(() => ({
      country: faker.address.country(),
      cases: faker.random.number(),
    }));
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
