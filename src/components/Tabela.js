import React from 'react';
import MaterialTable from 'material-table';

const Tabela = (props) => {
  return (
    <MaterialTable
      title={props.title}
      columns={props.columns}
      data={props.data}
    />
  );
};

export default Tabela;
