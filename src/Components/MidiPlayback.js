import MIDISounds from 'midi-sounds-react';
import React, { Component } from 'react';

class MidiPlayback extends Component {

    startPlayLoop(beatLoop, beatsPerMinute, density) {
        this.midiSounds.startPlayLoop(beatLoop, beatsPerMinute, density)
    }

    stopPlayLoop() {
        this.midiSounds.stopPlayLoop()
    }

    componentDidMount() {
        this.midiSounds.setEchoLevel(0);
        this.midiSounds.setMasterVolume(1.0);
    }

    render() {
        return (
            <MIDISounds
                ref={(ref) => this.midiSounds = ref}
                appElementName="root"
                drums={[200, 205, 210]}>
            </MIDISounds>
        )
    }
}

export default MidiPlayback;