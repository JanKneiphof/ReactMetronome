import { AppBar, Typography, Toolbar } from "@material-ui/core";
import React from 'react';

function Navbar() {
    return (<AppBar position="static" color="primary">
        <Toolbar>
            <Typography variant="h6" color="initial">
                Metronome
            </Typography>
        </Toolbar>
    </AppBar>);
}
export default Navbar;