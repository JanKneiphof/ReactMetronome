import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import SubdivisionInput from '../Components/SubdivisionInput'
import { getAllByLabelText, getByLabelText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

let container = document.createElement("div");
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});
afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

function createSubdivisionInput(changeSubdivisionMock, beatAccentuation, numberOfSubdivisions) {
    return (<SubdivisionInput
        changeSubdivision={changeSubdivisionMock}
        beatAccentuation={beatAccentuation}
        numberOfSubdivisions={numberOfSubdivisions}>
    </SubdivisionInput>)
}

describe("SubdivisionInput", () => {
    test("matches Snapshot", () => {
        act(() => {
            ReactDOM.render(createSubdivisionInput(() => {}, new Map([[0, 3], [1, 1], [2, 1], [3, 1]]), "4"), container)
        });
        expect(container.firstChild).toMatchSnapshot()
    })

    test("renders correct amount of Buttons", () => {
        let correctAmount = 4
        act(() => {
            ReactDOM.render(<SubdivisionInput changeSubdivision={() => { }} beatAccentuation={new Map()} numberOfSubdivisions={correctAmount}></SubdivisionInput>, container)
        })
        expect(getAllByLabelText(container, /Subdivision \d/).length).toBe(correctAmount)
    })
    test("renders correct amount of Buttons, even with big numbers", () => {
        let correctAmount = 123
        act(() => {
            ReactDOM.render(<SubdivisionInput changeSubdivision={() => { }} beatAccentuation={new Map()} numberOfSubdivisions={correctAmount}></SubdivisionInput>, container)
        })
        expect(getAllByLabelText(container, /Subdivision \d/).length).toBe(correctAmount)
    })
    test("calls update function on Buttonclick", () => {
        var updateMock = jest.fn()
        act(() => {
            ReactDOM.render(createSubdivisionInput(updateMock, new Map([[0, 3], [1, 1], [2, 1], [3, 1]]), "4"), container)
            userEvent.click(getByLabelText(container, "Subdivision 2"))
        })
        expect(updateMock.mock.calls.length).toBe(1)
        expect(updateMock.mock.calls[0][0]).toBe(2)
    })
})