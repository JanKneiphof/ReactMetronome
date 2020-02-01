import { Button, Grid, InputAdornment, TextField, Card, Typography, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import React, { Component } from 'react';
import noCapslockButtonText from '../styles/bpmInputButton.styles'


class BpmInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultBpm,
        };
    }

    addBpm(value) {
        const number = parseInt(this.state.value, 10) + parseInt(value, 10)
        if (number < 0) {
            return
        }
        else {
            this.setState(
                { value: number },
                this.updateMetronomeBpm(number)
            )
        }
    }

    updateMetronomeBpm(number) {
        this.props.updateBpm(number)
    }

    multiplyBpmBy(value) {
        const number = Math.floor(parseInt(this.state.value, 10) * parseFloat(value, 10))
        if (number < 0) {
            return
        } else {
            this.setState(
                { value: number },
                this.updateMetronomeBpm(number)
            )
        }
    }

    isPositiveInteger(number) {
        if (isNaN(number) || number < 0) {
            return false
        }
        else {
            return true
        }
    }

    createAdornment() {
        if (this.props.tempoStyle === "Quarter") {
            return {
                startAdornment: <InputAdornment position="start">♩ = </InputAdornment>,
            }
        }
        else { 
            return {
                endAdornment: <InputAdornment position="end">BPM </InputAdornment>,
            }
        }
    }
    handleInput(inputEvent) {
        const number = inputEvent.target.value
        if (this.isPositiveInteger(number)) {
            this.setState(
                { value: number.trim() },
                this.updateMetronomeBpm(number)
            )
        }
    }

    render() {
        return (
            <Grid container>
                <Grid item>
                    <Card variant="outlined">
                        <Typography variant="caption" style={{ margin: 10 }}>Tempo</Typography>
                        <Grid container spacing={1} alignItems="center" justify="center" direction="row">
                            <Grid item style={{margin: 10}}>
                                <RadioGroup aria-label="Tempostyle" name="Tempostyle" value={this.props.tempoStyle}>
                                    <FormControlLabel value="Quarter" control={<Radio />} label="Quarter Notes per Minute" />
                                    <FormControlLabel value="Beats" control={<Radio />} label="Beats per Minute" />
                                </RadioGroup>
                            </Grid>
                            <Grid item>
                                <TextField
                                    InputProps={this.createAdornment()}
                                    style={{ margin: 10 }}
                                    id="username"
                                    onChange={this.handleInput.bind(this)}
                                    value={this.state.value}
                                    placeholder="0"
                                    margin="normal"
                                    label="Enter Tempo"
                                    variant="standard"
                                    autoFocus={true} />
                            </Grid>
                            <Grid item style={{ margin: 10 }}>
                                <Grid container alignItems="center" justify="center" spacing={1} direction="row">
                                    <Grid item>
                                        <Button aria-label="+10" onClick={this.addBpm.bind(this, '+10')} variant="contained">+10</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button aria-label="x1.5" style={noCapslockButtonText} onClick={this.multiplyBpmBy.bind(this, '1.5')} variant="contained">x1.5</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button aria-label="x2" style={noCapslockButtonText} onClick={this.multiplyBpmBy.bind(this, '2')} variant="contained" >x2.0</Button>
                                    </Grid>
                                </Grid>
                                <Grid container justify="center" alignItems="center" spacing={1} direction="row">
                                    <Grid item>
                                        <Button aria-label="-10" onClick={this.addBpm.bind(this, '-10')} variant="contained">-10</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button aria-label="÷1.5" onClick={this.multiplyBpmBy.bind(this, '0.75')} variant="contained">÷1.5</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button aria-label="÷2" onClick={this.multiplyBpmBy.bind(this, '0.5')} variant="contained">÷2</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}
export default BpmInput