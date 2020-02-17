import { Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import Metronome from './Components/Metronome';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Metronome
            defaultSubdivisionsPerBeat="1"
            defaultBeatUnit="4"
            defaultBeatsPerMeasure="4"
            defaultBpm="120"
            defaultBeatAccentuation={new Map([[0, 3], [1, 1], [2, 1], [3, 1]])}
            tempoStyle="Quarter">
          </Metronome>
        </Grid>
        <Grid item>
          <Typography>
            Check out the Code on&nbsp;
              <Link href="https://github.com/JanKneiphof/ReactMetronome" target="_blank" rel="noreferrer">Github</Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
