import { getByLabelText } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Metronome from '../Components/Metronome';
import myUserEvent from './customLibraries/myUserTesting'
import userEvent from '@testing-library/user-event'

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
        expect(getByLabelText(container, "Beats per Minute").checked).toBe(false)
        expect(getByLabelText(container, "Subdivision 1").value).toBe("3")
        expect(getByLabelText(container, "Subdivision 2").value).toBe("1")
        expect(getByLabelText(container, "Subdivision 3").value).toBe("1")
        expect(getByLabelText(container, "Subdivision 4").value).toBe("2")
    })
    test('should display Tempo values typed by User', async () => {
        let accents = new Map([[0, 3], [1, 1], [2, 1], [3, 2]])
        let inputElement
        await act(async () => {
            ReactDOM.render(createMetronome("1", "4", "5", "1", accents, "Quarter", null, null, null), container)
            inputElement = getByLabelText(container, "Enter Tempo")
            await myUserEvent.type(inputElement, "20", {allAtOnce: false, delay: 1})
        })
        expect(inputElement.value).toBe("120")
    })
    test('should display Tempostyle change by User', () => {
        let accents = new Map([[0, 3], [1, 1], [2, 1], [3, 2]])
        let inputElement
        act(() => {
            ReactDOM.render(createMetronome("1", "4", "5", "120", accents, "Quarter", null, null, null), container)
            inputElement = getByLabelText(container, "Beats per Minute")
            userEvent.click(inputElement)
        })
        expect(getByLabelText(container, "Quarter Notes per Minute").checked).toBe(false)
        expect(getByLabelText(container, "Beats per Minute").checked).toBe(true)
    })

})