import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import SubdivisionInput from '../Components/SubdivisionInput'
import { getAllByLabelText } from '@testing-library/react';

let container = document.createElement("div");
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});
afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe("SubdivisionInput", () => {
    test("matches Snapshot", () => {
        act(() => {
            ReactDOM.render(<SubdivisionInput changeSubdivision={() => {}} beatAccentuation={new Map([[0,3],[1,1],[2,1],[3,1]])} numberOfSubdivisions="4"></SubdivisionInput>, container)
        });
        expect(container.firstChild).toMatchSnapshot()
    })

    test("renders correct amount of Buttons", () => {
        let correctAmount = 4
        act(() => {
            ReactDOM.render(<SubdivisionInput changeSubdivision={() => {}} beatAccentuation={new Map()} numberOfSubdivisions={correctAmount}></SubdivisionInput>, container)
        })
        expect(getAllByLabelText(container, /Subdivision \d/).length).toBe(correctAmount)
    })
    test("renders correct amount of Buttons, even with big numbers", () => {
        let correctAmount = 123
        act(() => {
            ReactDOM.render(<SubdivisionInput changeSubdivision={() => {}} beatAccentuation={new Map()} numberOfSubdivisions={correctAmount}></SubdivisionInput>, container)
        })
        expect(getAllByLabelText(container, /Subdivision \d/).length).toBe(correctAmount)
    })
})