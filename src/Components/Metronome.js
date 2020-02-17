import { Button, Grid } from "@material-ui/core";
import MIDISounds from 'midi-sounds-react';
import React, { Component } from "react";
import BpmInput from "./BpmInput";
import PolyrythmInput from './PolyrythmInput';
import SubdivisionInput from "./SubdivisionInput";
import TimeSignatureInput from "./TimeSignatureInput";

class Metronome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beatUnitsPerMinute: this.props.defaultBpm,
            subdivisionsPerBeat: this.props.defaultSubdivisionsPerBeat,
            beatUnit: this.props.defaultBeatUnit,
            beatsPerMeasure: this.props.defaultBeatsPerMeasure,
            isPlaying: false,
            beatAccentuation: this.props.defaultBeatAccentuation,
            tempoStyle: this.props.tempoStyle
        }
    }

    updatePlayingLoop() {
        if (this.state.isPlaying === true) {
            this.playLoop()
        }
    }

    playLoop() {
        this.setState({ isPlaying: true })
        this.props.midiPlayback.current.updateBeatLoop(
            this.state.beatsPerMeasure,
            this.state.subdivisionsPerBeat,
            this.state.beatAccentuation,
            this.state.tempoStyle,
            this.state.beatUnitsPerMinute,
            this.state.beatUnit
        )
    }
    stopLoop() {
        this.setState({ isPlaying: false })
        this.props.midiPlayback.current.stopPlaying()
    }

    async playPolyrythm(counterRythm, basicPulse) {
        let accents = this.createPolyrythmAccents(counterRythm, basicPulse)
        await this.setState({
            beatsPerMeasure: (counterRythm * basicPulse),
            beatUnit: (counterRythm * basicPulse),
            beatAccentuation: accents
        })
        this.playLoop()
    }
    createPolyrythmAccents(counterRythm, basicPulse) {
        var accents = new Map()
        accents.set(0, 3)
        for (let tick = 1; tick < (counterRythm * basicPulse); tick++) {
            if ((tick % counterRythm) === 0) {
                accents.set(tick, 2)
            }
            else if ((tick % basicPulse) === 0) {
                accents.set(tick, 1)
            }
            else {
                accents.set(tick, 0)
            }
        }
        return accents
    }


    async changeAccentuation(index) {
        let currentAccent = this.state.beatAccentuation.get(index - 1) || 0
        let updatedAccents = new Map(this.state.beatAccentuation).set(index - 1, ((currentAccent + 1) % 4))
        await this.setState({
            beatAccentuation: updatedAccents
        })

        this.updatePlayingLoop()
    }

    async changeTempoStyle(style) {
        await this.setState({ tempoStyle: style })
        this.updatePlayingLoop()
    }

    async updateBpm(number) {
        await this.setState({ beatUnitsPerMinute: number })
        this.updatePlayingLoop()
    }

    async updateTimeSignature(beatsPerMeasure, beatUnit) {
        let updatedAccents = new Map(this.state.beatAccentuation)
        for (let index = this.state.beatsPerMeasure; index < beatsPerMeasure; index++) {
            updatedAccents.set(parseInt(index), 1)
        }
        await this.setState({
            beatsPerMeasure: beatsPerMeasure,
            beatUnit: beatUnit,
            beatAccentuation: updatedAccents
        })
        this.updatePlayingLoop()
    }

    render() {
        return (
            <div style={{ padding: 20 }}> {/*This is the recommended Workaround if you want to use the spacing prop in a Grid container, see: https://material-ui.com/components/grid/ */}
                <Grid container spacing={2} alignItems="center" justify="center" direction="column">
                    <Grid item>
                        <BpmInput defaultBpm={this.state.beatUnitsPerMinute} changeTempoStyle={this.changeTempoStyle.bind(this)} updateBpm={this.updateBpm.bind(this)} currentBpm={this.state.beatUnitsPerMinute} tempoStyle={this.state.tempoStyle}></BpmInput>
                    </Grid>
                    <Grid item >
                        <TimeSignatureInput beatUnit={this.state.beatUnit} beatsPerMeasure={this.state.beatsPerMeasure} updateTimeSignature={this.updateTimeSignature.bind(this)}></TimeSignatureInput>
                    </Grid>
                    <Grid item>
                        <Grid container justify="center" spacing={2} column="row">
                            <Grid item>
                                <Button variant="contained" onClick={this.playLoop.bind(this)}>Play sound</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" onClick={this.stopLoop.bind(this)}>Stop sound</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <PolyrythmInput playPolyrythm={this.playPolyrythm.bind(this)}></PolyrythmInput>
                    </Grid>
                    <Grid item>
                        <SubdivisionInput changeSubdivision={this.changeAccentuation.bind(this)} beatAccentuation={this.state.beatAccentuation} numberOfSubdivisions={this.state.beatsPerMeasure}></SubdivisionInput>
                    </Grid>
                    <Grid item>
                        <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" drums={[200, 205, 210]}></MIDISounds>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Metronome