import React from 'react';
import { Container, Breadcrumbs, Typography } from '@material-ui/core'
import { Link, useParams } from 'react-router-dom'
import common from '../styles/common'
import { StatePaper, SharePaper } from '../components'

const Estado = (props) => {
  let { id } = useParams()
  const classes = common()
  return (
    <div>
      <Container className={classes.root}>
        <Breadcrumbs >
          <Link to="/dashboard">
            Geral
            </Link>
          <Link to="/brazil">
            Brazil
            </Link>
          <Typography color="textPrimary">{id}</Typography>
        </Breadcrumbs>
        <StatePaper uf={id} />
        <SharePaper />
      </Container>
    </div>
  );
};

export default Estado;