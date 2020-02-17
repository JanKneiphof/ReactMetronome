import { getByLabelText } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Metronome from '../Components/Metronome';

let container = document.createElement("div");
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});
afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

function createMetronome(
    subdivisionsPerBeat,
    beatUnit,
    beatsPerMeasure,
    beatsPerMinute,
    beatAccents,
    tempoStyle,
    updateBeatLoop,
    updateTempo,
    stopPlaying
) {
    return (
        <Metronome
            defaultSubdivisionsPerBeat={subdivisionsPerBeat}
            defaultBeatUnit={beatUnit}
            defaultBeatsPerMeasure={beatsPerMeasure}
            defaultBpm={beatsPerMinute}
            defaultBeatAccentuation={beatAccents}
            tempoStyle={tempoStyle}
            updateBeatLoop={updateBeatLoop}
            updateTempo={updateTempo}
            stopPlaying={stopPlaying} />
    )
}

describe("Metronome", () => {
    test('should display default Values', () => {
        let accents = new Map([[0, 3], [1, 1], [2, 1], [3, 2]])
        act(() => {
            ReactDOM.render(createMetronome("1", "4", "5", "120", accents, "Quarter", null, null, null), container)
        })
        expect(getByLabelText(container, "Enter Tempo").value).toBe("120")
        expect(getByLabelText(container, "Beat Unit").value).toBe("4")
        expect(getByLabelText(container, "Beats per Measure").value).toBe("5")
        expect(getByLabelText(container, "Quarter Notes per Minute").checked).toBe(true)
        expect(getByLabelText(container, "Subdivision 1").value).toBe("3")
        expect(getByLabelText(container, "Subdivision 2").value).toBe("1")
        expect(getByLabelText(container, "Subdivision 3").value).toBe("1")
        expect(getByLabelText(container, "Subdivision 4").value).toBe("2")
    })

})