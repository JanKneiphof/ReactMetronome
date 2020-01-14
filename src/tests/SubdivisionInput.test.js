import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import SubdivisionInput from '../Components/SubdivisionInput'

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
            ReactDOM.render(<SubdivisionInput changeSubdivision={() => {}} numberOfSubdivisions="4"></SubdivisionInput>, container)
        });
        expect(container.firstChild).toMatchSnapshot()
    })
})