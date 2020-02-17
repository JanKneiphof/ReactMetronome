import MIDISounds from 'midi-sounds-react';
import React, { Component } from 'react';

class MidiPlayback extends Component {
    render() {
        return (
            <MIDISounds
                ref={(ref) => (this.midiSounds = ref)}
                appElementName="root"
                drums={[200, 205, 210]}>
            </MIDISounds>
        )
    }
}

export default MidiPlayback