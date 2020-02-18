import React, { Component } from 'react';
import Metronome from './Metronome';
import { createBeatLoop } from '../JsModules/BeatLoopCalculator'

class BeatLoopPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beatLoop: null
        }
    }

    updateBeatLoop(beatsPerMeasure, subdivisionsPerBeat, beatAccentuation, tempoStyle, beatUnitsPerMinute, beatUnit) {
        var loop = createBeatLoop(beatsPerMeasure, subdivisionsPerBeat, beatAccentuation)
        this.setState({ beatLoop: loop })
        if (tempoStyle === "Quarter") {
            this.props.midiPlayback.current.startPlayLoop(loop, beatUnitsPerMinute, 1 / (beatUnit * subdivisionsPerBeat));
        }
        else {
            this.props.midiPlayback.current.startPlayLoop(loop, beatUnitsPerMinute, 1 / (4 * subdivisionsPerBeat));
        }
    }

    updateTempo(beatUnitsPerMinute, tempoStyle, beatUnit, subdivisionsPerBeat) {
        if (tempoStyle === "Quarter") {
            this.props.midiPlayback.current.startPlayLoop(this.state.beatLoop, beatUnitsPerMinute, 1 / (beatUnit * subdivisionsPerBeat));
        }
        else {
            this.props.midiPlayback.current.startPlayLoop(this.state.beatLoop, beatUnitsPerMinute, 1 / (4 * subdivisionsPerBeat));
        }
    }

    stopPlaying() {
        this.props.midiPlayback.current.stopPlayLoop()
    }

    render() {
        return (
            <Metronome
                defaultSubdivisionsPerBeat="1"
                defaultBeatUnit="4"
                defaultBeatsPerMeasure="4"
                defaultBpm="120"
                defaultBeatAccentuation={new Map([[0, 3], [1, 1], [2, 1], [3, 1]])}
                tempoStyle="Quarter"
                updateBeatLoop={this.updateBeatLoop.bind(this)}
                updateTempo={this.updateTempo.bind(this)}
                stopPlaying={this.stopPlaying.bind(this)}>
            </Metronome>
        )
    }
}

export default BeatLoopPlayer