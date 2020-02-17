import MIDISounds from 'midi-sounds-react';
import React, { Component } from 'react';

class MidiPlayback extends Component {

    componentDidMount() {
        this.midiSounds.setEchoLevel(0);
        this.midiSounds.setMasterVolume(1.0);
    }

    updateBeatLoop(beatsPerMeasure, subdivisionsPerBeat, beatAccentuation, tempoStyle, beatUnitsPerMinute, beatUnit) {
        var loop = this.createBeatLoop(beatsPerMeasure, subdivisionsPerBeat, beatAccentuation)
        if (tempoStyle === "Quarter") {
            this.midiSounds.startPlayLoop(loop, beatUnitsPerMinute, 1 / (beatUnit * subdivisionsPerBeat));
        }
        else {
            this.midiSounds.startPlayLoop(loop, beatUnitsPerMinute, 1 / (4 * subdivisionsPerBeat));
        }
    }

    createBeatLoop(beatsPerMeasure, subdivisionsPerBeat, beatAccentuation) {
        if (!beatsPerMeasure) {
            return [[[], []]]
        }

        const firstBeat = [[200], []];
        const weakBeat = [[210], []];
        const strongBeat = [[205], []];
        const muteBeat = [[], []]
        var beatLoop = [];

        for (let tick = 0; tick < (beatsPerMeasure * subdivisionsPerBeat); tick++) {
            let accent = beatAccentuation.get(tick)
            switch (accent) {
                case 1: beatLoop[tick] = weakBeat;
                    break;
                case 2: beatLoop[tick] = strongBeat;
                    break;
                case 3: beatLoop[tick] = firstBeat;
                    break;
                case 0: beatLoop[tick] = muteBeat;
                    break;
                default: beatLoop[tick] = muteBeat;
            }
        }
        return beatLoop;
    }

    stopPlaying(){
        this.midiSounds.stopPlayLoop()
    }

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