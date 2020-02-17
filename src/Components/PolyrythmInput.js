import { Button, Card, FormControl, Grid, InputLabel, NativeSelect, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { captionInCard, gridInCard } from '../styles/card.styles';

class PolyrythmInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counterRythm: 1,
            basicPulse: 1
        }
    }

    async updateCounterRythm(changeEvent) {
        if (isNaN(changeEvent.target.value) || parseInt(changeEvent) <= 0) {
            return
        }
        else {
            await this.setState({ counterRythm: changeEvent.target.value })
        }
    }
    async updateBasicPulse(changeEvent) {
        if (isNaN(changeEvent.target.value) || parseInt(changeEvent) <= 0) {
            return
        }
        else {
            await this.setState({ basicPulse: changeEvent.target.value })
        }
    }

    createOptions(maxIndex) {
        var options = []
        for (let index = 1; index < maxIndex + 1; index++) {
            options.push(<option key={index} value={index}>{index}</option>);

        }
        return (options)
    }


    playPolyrythm() {
        this.props.playPolyrythm(this.state.counterRythm, this.state.basicPulse)
    }

    render() {
        return (
            <Card variant="outlined">
                <Typography style={captionInCard} variant="caption">Polyrythm</Typography>
                <Grid container alignItems="center" justify="center" direction="row">
                    <Grid item style={gridInCard}>
                        <FormControl>
                            <InputLabel htmlFor="Counterrythm-Input">
                                Counterrythm
                            </InputLabel>
                            <NativeSelect id="Counterrythm-Input" onChange={(event) => this.updateCounterRythm(event)}>
                                {this.createOptions(25)}
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                    <Grid item style={gridInCard}>
                        <Typography> against </Typography>
                    </Grid>
                    <Grid item style={gridInCard}>
                        <FormControl>
                            <InputLabel htmlFor="Basic-Pulse-Input">
                                Basic&nbsp;Pulse
                            </InputLabel>
                            <NativeSelect id="Basic-Pulse-Input" onChange={(event) => this.updateBasicPulse(event)}>
                                {this.createOptions(25)}
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                    <Grid item style={gridInCard}>
                        <Button variant="contained" aria-label="Play-Polyrythm" onClick={() => this.playPolyrythm()}>Play Polyrythm</Button>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}

export default PolyrythmInput