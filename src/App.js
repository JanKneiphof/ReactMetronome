import { Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import BeatLoopPlayer from './Components/BeatLoopPlayer';
import MidiPlayback from './Components/MidiPlayback';
import Navbar from './Components/Navbar';

function App() {

  let midiPlayback = React.createRef()


  return (
    <div className="App">
      <Navbar></Navbar>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <BeatLoopPlayer midiPlayback={midiPlayback} ></BeatLoopPlayer>
        </Grid>
        <Grid item>
          <MidiPlayback
            ref={midiPlayback}>
          </MidiPlayback>
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
