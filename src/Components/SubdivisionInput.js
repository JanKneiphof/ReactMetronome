import { Button, ButtonGroup, Card, Grid, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import {captionInCard, gridInCard} from '../styles/card.styles'


class SubdivisionInput extends Component {

    handleClick(index) {
        this.props.changeSubdivision(index)
    }

    createButtonGroups(size) {
        let buttons = []

        for (let index = 1; index <= size; index++) {
            let accentString = "█".repeat(this.props.beatAccentuation.get(index - 1))
            if (accentString.length === 0) {
                accentString = "mute"
            }
            buttons.push(
                <Grid key={index} item>
                    <Grid container alignItems="center" direction="column">
                        <Grid item>
                            <Typography>{accentString}</Typography>
                        </Grid>
                        <Grid item>
                            <ButtonGroup
                                key={"upTo" + index}
                                size="small"
                            >
                                <Button
                                    size="small"
                                    onClick={this.props.changeSubdivision.bind(this, index)}
                                    variant="outlined"
                                    value={index}
                                    aria-label={"Subdivision " + index}
                                >
                                    {index}
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
            )

        }
        return (<Grid container style={gridInCard} direction="row">{buttons}</Grid>)
    }

    render() {
        return (
            <Card variant="outlined">
                <Typography variant="caption" style={captionInCard}>Beat Accents</Typography>
                {this.createButtonGroups(this.props.numberOfSubdivisions)}
            </Card>
        )
    }
}

export default SubdivisionInput