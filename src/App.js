import { Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import BeatLoopPlayer from './Components/BeatLoopPlayer';
import Metronome from './Components/Metronome';
import MidiPlayback from './Components/MidiPlayback';
import Navbar from './Components/Navbar';

function App() {

  let midiPlayback = React.createRef()
  let beatPlayer = React.createRef()

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
            tempoStyle="Quarter"
            beatPlayer={beatPlayer}>
          </Metronome>
        </Grid>
        <Grid item>
          <BeatLoopPlayer ref={beatPlayer} midiPlayback={midiPlayback} ></BeatLoopPlayer>
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
