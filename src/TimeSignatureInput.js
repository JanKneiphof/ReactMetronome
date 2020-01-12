import React, { Component } from "react";
import { TextField, Grid } from "@material-ui/core"

class TimeSignatureInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beatsPerMeasure: this.props.defaultTimeSignature[0],
            beatUnit: this.props.defaultTimeSignature[1]
        };
    }
    isPositiveInteger(number) {
        if (isNaN(number) || number < 0) {
            return false
        }
        else {
            return true
        }
    }

    updateBeatsPerMeasure(inputEvent) {
        let number = inputEvent.target.value.trim()
        if (this.isPositiveInteger(number)) {
            this.setState({ beatsPerMeasure: number })
            this.props.updateTimeSignature([number, this.state.beatUnit])
        }
    }
    updateBeatUnit(inputEvent) {
        let number = inputEvent.target.value.trim()
        if (this.isPositiveInteger(number)) {
            this.setState({ beatUnit: number })
            this.props.updateTimeSignature([this.state.beatsPerMeasure, number])
        }
    }

    render() {
        return (<div style={{ padding: 1 }}>
            <Grid container spacing={1} justify="center" direction="column">
                <Grid item>
                    <TextField variant="standard" value={this.state.beatsPerMeasure} onChange={this.updateBeatsPerMeasure.bind(this)} label="Beats per Measure"></TextField>
                </Grid>
                <Grid item>
                    <TextField variant="standard" value={this.state.beatUnit} onChange={this.updateBeatUnit.bind(this)} label="Beat Unit"></TextField>
                </Grid>
            </Grid>
        </div>
        )
    };
}

export default TimeSignatureInput