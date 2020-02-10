import { Grid, TextField, Card, Typography } from "@material-ui/core";
import React, { Component } from "react";
import {captionInCard, gridInCard} from '../styles/card.styles'

class TimeSignatureInput extends Component {
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
            this.props.updateTimeSignature(number, this.props.beatUnit)
        }
    }
    updateBeatUnit(inputEvent) {
        let number = inputEvent.target.value.trim()
        if (this.isPositiveInteger(number)) {
            this.props.updateTimeSignature(this.props.beatsPerMeasure, number)
        }
    }

    render() {
        return (
            <Card variant="outlined">
                <Typography style={captionInCard} variant="caption">Time Signature</Typography>
                <Grid container alignItems="center" justify="center" direction="column">
                    <Grid item style={gridInCard}>
                        <TextField variant="standard" value={this.props.beatsPerMeasure} onChange={this.updateBeatsPerMeasure.bind(this)} label="Beats per Measure"></TextField>
                    </Grid>
                    <Grid item style={gridInCard}>
                        <TextField variant="standard" value={this.props.beatUnit} onChange={this.updateBeatUnit.bind(this)} label="Beat Unit"></TextField>
                    </Grid>
                </Grid>
            </Card>
        )
    };
}

export default TimeSignatureInput