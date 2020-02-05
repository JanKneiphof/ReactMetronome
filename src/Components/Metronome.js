import { Button, Grid } from "@material-ui/core";
import MIDISounds from 'midi-sounds-react';
import React, { Component } from "react";
import BpmInput from "./BpmInput";
import TimeSignatureInput from "./TimeSignatureInput";
import SubdivisionInput from "./SubdivisionInput";

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

    componentDidMount() {
        this.midiSounds.setEchoLevel(0);
        this.midiSounds.setMasterVolume(0.5);
    }

    updatePlayingLoop() {
        if (this.state.isPlaying === true) {
            this.playLoop()
        }
    }

    async changeTempoStyle(style) {
        await this.setState({ tempoStyle: style})
        this.updatePlayingLoop()
    }

    async updateBpm(number) {
        await this.setState({ beatUnitsPerMinute: number })
        this.updatePlayingLoop()
    }

    async updateTimeSignature([beatsPerMeasure, beatUnit]) {
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

    createBeatLoop(beatsPerMeasure, subdivisionsPerBeat) {
        const firstBeat = [[200], []];
        const weakBeat = [[210], []];
        const strongBeat = [[205], []];
        const muteBeat = [[], []]
        var beatLoop = [];

        for (let tick = 0; tick < (beatsPerMeasure * subdivisionsPerBeat); tick++) {
            let accent = this.state.beatAccentuation.get(tick)
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

    async changeAccentuation(index) {
        let currentAccent = this.state.beatAccentuation.get(index - 1) || 0
        let updatedAccents = new Map(this.state.beatAccentuation).set(index - 1, ((currentAccent + 1) % 4))
        await this.setState({
            beatAccentuation: updatedAccents
        })

        this.updatePlayingLoop()
    }

    playLoop() {
        this.setState({ isPlaying: true })
        var loop = this.createBeatLoop(this.state.beatsPerMeasure, this.state.subdivisionsPerBeat)
        if (this.state.tempoStyle === "Quarter") {
        this.midiSounds.startPlayLoop(loop, this.state.beatUnitsPerMinute, 1 / (this.state.beatUnit * this.state.subdivisionsPerBeat));
    }
        else {
            this.midiSounds.startPlayLoop(loop, this.state.beatUnitsPerMinute, 1 / (4 * this.state.subdivisionsPerBeat));
        }
    }
    stopLoop() {
        this.setState({ isPlaying: false })
        this.midiSounds.stopPlayLoop()
    }

    render() {
        return (
            <div style={{ padding: 20 }}> {/*This is the recommended Workaround if you want to use the spacing prop in a Grid container, see: https://material-ui.com/components/grid/ */}
                <Grid container spacing={2} alignItems="center" justify="center" direction="column">
                    <Grid item>
                        <BpmInput defaultBpm={this.state.beatUnitsPerMinute} changeTempoStyle={this.changeTempoStyle.bind(this)} updateBpm={this.updateBpm.bind(this)} tempoStyle={this.state.tempoStyle}></BpmInput>
                    </Grid>
                    <Grid item >
                        <TimeSignatureInput defaultTimeSignature={[this.state.beatsPerMeasure, this.state.beatUnit]} updateTimeSignature={this.updateTimeSignature.bind(this)}></TimeSignatureInput>
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