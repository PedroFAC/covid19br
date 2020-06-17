import React from 'react';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const TopBar = () => {
    let history = useHistory()
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>
                    COVID-19 Brasil
                </Typography>
                <Button onClick={() => history.push('/dashboard')} color="inherit">Geral</Button>
                <Button onClick={() => history.push('/brazil')} color="inherit">Brasil</Button>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;