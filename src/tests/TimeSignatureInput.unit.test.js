import { getByLabelText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import TimeSignatureInput from '../Components/TimeSignatureInput';

let container = document.createElement("div");
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});
afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe("TimeSignatureInput", () => {
    test("display default Beats per Measure", () => {
        act(() => {
            ReactDOM.render(<TimeSignatureInput updateTimeSignature={() => { }} beatsPerMeasure={3} beatUnit={4} />, container)
        })
        expect(getByLabelText(container, "Beats per Measure").value).toBe("3")
    })
    test("display default Beat Unit", () => {
        act(() => {
            ReactDOM.render(<TimeSignatureInput updateTimeSignature={() => { }} beatsPerMeasure={3} beatUnit={4} />, container)
        })
        expect(getByLabelText(container, "Beat Unit").value).toBe("4")
    })
    test("calls update function after typing a number in Beats Per Measure field", () => {
        var updateTimeSignatureMock = jest.fn()
        act(() => {
            ReactDOM.render(<TimeSignatureInput updateTimeSignature={updateTimeSignatureMock} beatsPerMeasure={3} beatUnit={4} />, container)
            userEvent.type(getByLabelText(container, "Beats per Measure"), "1234", { allAtOnce: true })
        })
        expect(updateTimeSignatureMock.mock.calls.length).toBe(1)
        expect(updateTimeSignatureMock.mock.calls[0][0]).toBe("1234")
    })
    test("calls update function after typing a number in Beat Unit field", () => {
        var updateTimeSignatureMock = jest.fn()
        act(() => {
            ReactDOM.render(<TimeSignatureInput updateTimeSignature={updateTimeSignatureMock} beatsPerMeasure={3} beatUnit={4} />, container)
            userEvent.type(getByLabelText(container, "Beat Unit"), "1234", { allAtOnce: true })
        })
        expect(updateTimeSignatureMock.mock.calls.length).toBe(1)
        expect(updateTimeSignatureMock.mock.calls[0][1]).toBe("1234")
    })
    test("does not call update function after typing a negative number in Beats per Measure field", () => {
        var updateTimeSignatureMock = jest.fn()
        act(() => {
            ReactDOM.render(<TimeSignatureInput updateTimeSignature={updateTimeSignatureMock} beatsPerMeasure={3} beatUnit={4} />, container)
            userEvent.type(getByLabelText(container, "Beats per Measure"), "-1234", { allAtOnce: true })
        })
        expect(updateTimeSignatureMock.mock.calls.length).toBe(0)
    })
    test("does not call update function after typing a negative number in Beat Unit field", () => {
        var updateTimeSignatureMock = jest.fn()
        act(() => {
            ReactDOM.render(<TimeSignatureInput updateTimeSignature={updateTimeSignatureMock} beatsPerMeasure={3} beatUnit={4} />, container)
            userEvent.type(getByLabelText(container, "Beat Unit"), "-1234", { allAtOnce: true })
        })
        expect(updateTimeSignatureMock.mock.calls.length).toBe(0)
    })
})