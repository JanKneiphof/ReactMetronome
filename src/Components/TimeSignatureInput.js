import { Grid, TextField, Card, Typography } from "@material-ui/core";
import React, { Component } from "react";
import {captionInCard, gridInCard} from '../styles/card.styles'

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
        return (
            <Card variant="outlined">
                <Typography style={captionInCard} variant="caption">Time Signature</Typography>
                <Grid container alignItems="center" justify="center" direction="column">
                    <Grid item style={gridInCard}>
                        <TextField variant="standard" value={this.state.beatsPerMeasure} onChange={this.updateBeatsPerMeasure.bind(this)} label="Beats per Measure"></TextField>
                    </Grid>
                    <Grid item style={gridInCard}>
                        <TextField variant="standard" value={this.state.beatUnit} onChange={this.updateBeatUnit.bind(this)} label="Beat Unit"></TextField>
                    </Grid>
                </Grid>
            </Card>
        )
    };
}

export default TimeSignatureInput