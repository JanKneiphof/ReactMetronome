import React from 'react';
import ReactDOM from 'react-dom';
import BpmInput from '../Components/BpmInput';
import { act } from 'react-dom/test-utils'
import myUserEvent from "./myUserTesting"
import { getByLabelText } from '@testing-library/react'
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

function createBpmInput(updateBpmMock, defaultBpm) {
  return (<BpmInput
    tempoStyle="Quarter"
    updateBpm={updateBpmMock}
    currentBpm={defaultBpm}>
  </BpmInput>)
}

describe("BpmInput", () => {
  test("displays default Value", async () => {
    let inputElement
    await act(async () => {
      ReactDOM.render(createBpmInput(() => { }, 1234), container)
      inputElement = getByLabelText(container, "Enter Tempo")
    });
    expect(parseInt(inputElement.value)).toBe(1234)
  })

  test("calls update function if a number is typed", async () => {
    let inputElement
    let updateBpmMock = jest.fn()
    await act(async () => {
      ReactDOM.render(createBpmInput(updateBpmMock, 120), container)
      inputElement = getByLabelText(container, "Enter Tempo")
      await myUserEvent.type(inputElement, "5", { allAtOnce: true })
    })
    expect(updateBpmMock.mock.calls.length).toBe(1)
    expect(parseInt(updateBpmMock.mock.calls[0][0])).toBe(1205)
  })

  test("does not call the update function if a letter is typed", async () => {
    let inputElement
    let updateBpmMock = jest.fn()
    await act(async () => {
      ReactDOM.render(createBpmInput(updateBpmMock, 120), container)
      inputElement = getByLabelText(container, "Enter Tempo")
      await myUserEvent.type(inputElement, "E", { allAtOnce: true })
    })
    expect(updateBpmMock.mock.calls.length).toBe(0)
  })

  test("calls update Function after click on +10 Button", () => {
    let updateBpmMock = jest.fn()
    act(() => {
      ReactDOM.render(createBpmInput(updateBpmMock, 110), container);
      userEvent.click(getByLabelText(container, "+10"))
    })
    expect(parseInt(updateBpmMock.mock.calls[0][0])).toBe(120)
    expect(updateBpmMock.mock.calls.length).toBe(1)
  })
  test("calls update Function after click on -10 Button", () => {
    let updateBpmMock = jest.fn()
    act(() => {
      ReactDOM.render(createBpmInput(updateBpmMock, 130), container);
      userEvent.click(getByLabelText(container, "-10"))
    })
    expect(parseInt(updateBpmMock.mock.calls[0][0])).toBe(120)
    expect(updateBpmMock.mock.calls.length).toBe(1)
  })
  test("calls update Function after click on x2 Button", () => {
    let updateBpmMock = jest.fn()
    act(() => {
      ReactDOM.render(createBpmInput(updateBpmMock, 60), container);
      userEvent.click(getByLabelText(container, "x2"))
    })
    expect(parseInt(updateBpmMock.mock.calls[0][0])).toBe(120)
    expect(updateBpmMock.mock.calls.length).toBe(1)
  })
  test("calls update Function after click on x1.5 Button", () => {
    let updateBpmMock = jest.fn()
    act(() => {
      ReactDOM.render(createBpmInput(updateBpmMock, 80), container);
      userEvent.click(getByLabelText(container, "x1.5"))
    })
    expect(parseInt(updateBpmMock.mock.calls[0][0])).toBe(120)
    expect(updateBpmMock.mock.calls.length).toBe(1)
  })
  test("calls update Function after click on ÷1.5 Button", () => {
    let updateBpmMock = jest.fn()
    act(() => {
      ReactDOM.render(createBpmInput(updateBpmMock, 160), container);
      userEvent.click(getByLabelText(container, "÷1.5"))
    })
    expect(parseInt(updateBpmMock.mock.calls[0][0])).toBe(120)
    expect(updateBpmMock.mock.calls.length).toBe(1)
  })
  test("calls update Function after click on ÷2 Button", () => {
    let updateBpmMock = jest.fn()
    act(() => {
      ReactDOM.render(createBpmInput(updateBpmMock, 240), container);
      userEvent.click(getByLabelText(container, "÷2"))
    })
    expect(parseInt(updateBpmMock.mock.calls[0][0])).toBe(120)
    expect(updateBpmMock.mock.calls.length).toBe(1)
  })
})
