import React from 'react';
import Metronome from './Components/Metronome';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Metronome
        defaultSubdivisionsPerBeat="1"
        defaultBeatUnit="4"
        defaultBeatsPerMeasure="4"
        defaultBpm="120"
        defaultBeatAccentuation={new Map([[0,3],[1,1],[2,1],[3,1]])}
        tempoStyle="Quarter">
        </Metronome>
    </div>
  );
}

export default App;
