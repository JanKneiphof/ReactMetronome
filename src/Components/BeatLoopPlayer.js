import React, { Component } from 'react';

class BeatLoopPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loop: null
        }
    }

    updateBeatLoop(beatsPerMeasure, subdivisionsPerBeat, beatAccentuation, tempoStyle, beatUnitsPerMinute, beatUnit) {
        var loop = this.createBeatLoop(beatsPerMeasure, subdivisionsPerBeat, beatAccentuation)
        this.setState({loop: loop})
        if (tempoStyle === "Quarter") {
            this.props.midiPlayback.current.startPlayLoop(loop, beatUnitsPerMinute, 1 / (beatUnit * subdivisionsPerBeat));
        }
        else {
            this.props.midiPlayback.current.startPlayLoop(loop, beatUnitsPerMinute, 1 / (4 * subdivisionsPerBeat));
        }
    }

    updateTempo(beatUnitsPerMinute, tempoStyle, beatUnit, subdivisionsPerBeat) {
        if (tempoStyle === "Quarter") {
            this.props.midiPlayback.current.startPlayLoop(this.state.loop, beatUnitsPerMinute, 1 / (beatUnit * subdivisionsPerBeat));
        }
        else {
            this.props.midiPlayback.current.startPlayLoop(this.state.loop, beatUnitsPerMinute, 1 / (4 * subdivisionsPerBeat));
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

    stopPlaying() {
        this.props.midiPlayback.current.stopPlayLoop()
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default BeatLoopPlayer