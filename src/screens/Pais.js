import React from "react";
import { Container, Breadcrumbs, Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import common from "../styles/common";
import { StatesPanelLarge, BrazilPanelLarge, SharePaper } from "../components";

const Pais = () => {
  const classes = common();

  return (
    <Container className={classes.root}>
      <Breadcrumbs>
        <Link to="/dashboard">Geral</Link>
        <Typography color="textPrimary">Brazil</Typography>
      </Breadcrumbs>
      <Grid container direction="row" spacing={2} className={classes.grid}>
        <Grid xs item className={classes.gridLeft}>
          <BrazilPanelLarge />
        </Grid>
        <Grid xs item className={classes.gridRight}>
          <StatesPanelLarge />
        </Grid>
      </Grid>
      <SharePaper />
    </Container>
  );
};

export default Pais;
