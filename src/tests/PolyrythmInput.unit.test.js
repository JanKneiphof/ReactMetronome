import { getByLabelText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import PolyrythmInput from '../Components/PolyrythmInput';

let container = document.createElement("div");
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});
afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe("PolyrythmInput, ", () => {
    test('should display default Counterrythm', () => {
        act(() => {
            ReactDOM.render(<PolyrythmInput />, container)
        })
        expect(getByLabelText(container, "Counterrythm").value).toBe("1")
    })
    test('should display selected Counterrythm', () => {
        act(() => {
            ReactDOM.render(<PolyrythmInput/>, container)
            userEvent.selectOptions(getByLabelText(container, "Counterrythm"),"10")
        })
        expect(getByLabelText(container, "Counterrythm").value).toBe("10")
    })
    test('should display default Basic Pulse', () => {
        act(() => {
            ReactDOM.render(<PolyrythmInput />, container)
        })
        expect(getByLabelText(container, "Basic Pulse").value).toBe("1")
    })
    test('should display selected Basic Pulse', () => {
        act(() => {
            ReactDOM.render(<PolyrythmInput/>, container)
            userEvent.selectOptions(getByLabelText(container, "Basic Pulse"),"10")
        })
        expect(getByLabelText(container, "Basic Pulse").value).toBe("10")
    })
    test('should call update function after Buttonclick', async () => {
        var playPolyrythmMock = jest.fn()
        await act(async () => {
            ReactDOM.render(<PolyrythmInput playPolyrythm={playPolyrythmMock}/>, container)
            await userEvent.selectOptions(getByLabelText(container, "Counterrythm"),"7")
            await userEvent.selectOptions(getByLabelText(container, "Basic Pulse"), "11")
            userEvent.click(getByLabelText(container, "Play-Polyrythm"))
        })
        expect(playPolyrythmMock.mock.calls.length).toBe(1)
        expect(playPolyrythmMock.mock.calls[0][0]).toBe("7")
        expect(playPolyrythmMock.mock.calls[0][1]).toBe("11")
    })

})