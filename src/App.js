import React from 'react';
import Metronome from './Metronome';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Metronome defaultSubdivisionsPerBeat="1" defaultBeatUnit="4" defaultBeatsPerMeasure="4" defaultBpm="120"></Metronome>
    </div>
  );
}

export default App;
