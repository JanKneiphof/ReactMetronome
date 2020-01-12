import { Button, Grid } from "@material-ui/core";
import MIDISounds from 'midi-sounds-react';
import React, { Component } from "react";
import BpmInput from "./BpmInput";
import TimeSignatureInput from "./TimeSignatureInput";

class Metronome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beatUnitsPerMinute: this.props.defaultBpm,
            subdivisionsPerBeat: this.props.defaultSubdivisionsPerBeat,
            beatUnit: this.props.defaultBeatUnit,
            beatsPerMeasure: this.props.defaultBeatsPerMeasure
        }
    }

    componentDidMount() {
        this.midiSounds.setEchoLevel(0);
        this.midiSounds.setMasterVolume(0.5);
    }

    async updateBpm(number) {
        await this.setState({ beatUnitsPerMinute: number })
        this.playLoop()
    }

    async updateTimeSignature([beatsPerMeasure, beatUnit]) {
        await this.setState({
            beatsPerMeasure: beatsPerMeasure,
            beatUnit: beatUnit
        })
        this.playLoop()
    }

    createBeatLoop(beatsPerMeasure, subdivisionsPerBeat) {
        const strongBeat = [[205], []];
        const weakBeat = [[210], []];
        const firstBeat = [[200], []];
        var beatLoop = [];

        beatLoop[0] = firstBeat;
        for (var tick = 1; tick < (beatsPerMeasure * subdivisionsPerBeat); tick++) {
            if (tick % subdivisionsPerBeat === 0) {
                beatLoop[tick] = strongBeat;
            }
            else {
                beatLoop[tick] = weakBeat;
            }
        }
        return beatLoop;

    }

    playLoop() {
        var loop = this.createBeatLoop(this.state.beatsPerMeasure, this.state.subdivisionsPerBeat)
        this.midiSounds.startPlayLoop(loop, this.state.beatUnitsPerMinute, 1 / (this.state.beatUnit * this.state.subdivisionsPerBeat));
    }
    stopLoop() {
        this.midiSounds.stopPlayLoop()
    }

    render() {
        return (
            <div style={{ padding: 20 }}> {/*This is the recommended Workaround if you want to use the spacing prop in a Grid container, see: https://material-ui.com/components/grid/ */}
                <Grid container spacing={2} justify="center" direction="column">
                    <Grid item>
                        <BpmInput defaultBpm={this.state.beatUnitsPerMinute} updateBpm={this.updateBpm.bind(this)}></BpmInput>
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
                    <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" drums={[200, 205, 210]}></MIDISounds>
                </Grid>
            </div>
        )
    }
}

export default Metronome