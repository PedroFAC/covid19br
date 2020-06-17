import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { BrazilPanel, CountriesPanel, StatesPanel, SharePaper } from '../components'
import common from '../styles/common'

const Dashboard = () => {
    const classes = common()
    return (
        <div>
            <Container className={classes.root}>
                <Grid container direction="row" spacing={2} className={classes.grid}>
                    <Grid xs container item direction='column' className={classes.gridLeft} spacing={2} >
                        <Grid xs item>
                            <BrazilPanel />
                        </Grid>
                        <Grid xs item>
                            <StatesPanel />
                        </Grid>
                    </Grid>
                    <Grid xs item className={classes.gridRight}>
                        <CountriesPanel />
                    </Grid>
                </Grid>
                <SharePaper />
            </Container>
        </div>
    );
};

export default Dashboard;