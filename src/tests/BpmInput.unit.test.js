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

function createBpmInput(tempostyle, changeTempoStyleMock, updateBpmMock, defaultBpm) {
  return (<BpmInput
    tempoStyle={tempostyle}
    changeTempoStyle={changeTempoStyleMock}
    updateBpm={updateBpmMock}
    currentBpm={defaultBpm}>
  </BpmInput>)
}

describe("BpmInput", () => {
  test("displays default Value", async () => {
    let inputElement
    await act(async () => {
      ReactDOM.render(createBpmInput("Quarter", () => { }, () => { }, 1234), container)
      inputElement = getByLabelText(container, "Enter Tempo")
    });
    expect(inputElement.value).toBe("1234")
  })

  test("calls update function if a number is typed", async () => {
    let inputElement
    let updateBpmMock = jest.fn()
    await act(async () => {
      ReactDOM.render(createBpmInput("Quarter", () => { }, updateBpmMock, 120), container)
      inputElement = getByLabelText(container, "Enter Tempo")
      await myUserEvent.type(inputElement, "5", { allAtOnce: true })
    })
    expect(updateBpmMock.mock.calls.length).toBe(1)
    expect(updateBpmMock.mock.calls[0][0]).toBe("1205")
  })

  test("does not call the update function if a letter is typed", async () => {
    let inputElement
    let updateBpmMock = jest.fn()
    await act(async () => {
      ReactDOM.render(createBpmInput("Quarter", () => { }, updateBpmMock, 120), container)
      inputElement = getByLabelText(container, "Enter Tempo")
      await myUserEvent.type(inputElement, "E", { allAtOnce: true })
    })
    expect(updateBpmMock.mock.calls.length).toBe(0)
  })
  test("does not call the update function if a negative number is typed", async () => {
    let inputElement
    let updateBpmMock = jest.fn()
    await act(async () => {
      ReactDOM.render(createBpmInput("Quarter", () => { }, updateBpmMock, 120), container)
      inputElement = getByLabelText(container, "Enter Tempo")
      await myUserEvent.type(inputElement, "-10", { allAtOnce: true })
    })
    expect(updateBpmMock.mock.calls.length).toBe(0)
  })
  test("calls update function if a decimal number is typed", async () => {
    let inputElement
    let updateBpmMock = jest.fn()
    await act(async () => {
      ReactDOM.render(createBpmInput("Quarter", () => { }, updateBpmMock), container)
      inputElement = getByLabelText(container, "Enter Tempo")
      await myUserEvent.type(inputElement, "12.5", { allAtOnce: true })
    })
    expect(updateBpmMock.mock.calls.length).toBe(1)
    expect(updateBpmMock.mock.calls[0][0]).toBe("12.5")
  })

  test("calls update Function after click on +10 Button", () => {
    let updateBpmMock = jest.fn()
    act(() => {
      ReactDOM.render(createBpmInput("Quarter", () => { }, updateBpmMock, 110), container);
      userEvent.click(getByLabelText(container, "+10"))
    })
    expect(parseInt(updateBpmMock.mock.calls[0][0])).toBe(120)
    expect(updateBpmMock.mock.calls.length).toBe(1)
  })
  test("calls update Function after click on -10 Button", () => {
    let updateBpmMock = jest.fn()
    act(() => {
      ReactDOM.render(createBpmInput("Quarter", () => { }, updateBpmMock, 130), container);
      userEvent.click(getByLabelText(container, "-10"))
    })
    expect(parseInt(updateBpmMock.mock.calls[0][0])).toBe(120)
    expect(updateBpmMock.mock.calls.length).toBe(1)
  })
  test("calls update Function after click on x2 Button", () => {
    let updateBpmMock = jest.fn()
    act(() => {
      ReactDOM.render(createBpmInput("Quarter", () => { }, updateBpmMock, 60), container);
      userEvent.click(getByLabelText(container, "x2"))
    })
    expect(parseInt(updateBpmMock.mock.calls[0][0])).toBe(120)
    expect(updateBpmMock.mock.calls.length).toBe(1)
  })
  test("calls update Function after click on x1.5 Button", () => {
    let updateBpmMock = jest.fn()
    act(() => {
      ReactDOM.render(createBpmInput("Quarter", () => { }, updateBpmMock, 80), container);
      userEvent.click(getByLabelText(container, "x1.5"))
    })
    expect(parseInt(updateBpmMock.mock.calls[0][0])).toBe(120)
    expect(updateBpmMock.mock.calls.length).toBe(1)
  })
  test("calls update Function after click on ÷1.5 Button", () => {
    let updateBpmMock = jest.fn()
    act(() => {
      ReactDOM.render(createBpmInput("Quarter", () => { }, updateBpmMock, 160), container);
      userEvent.click(getByLabelText(container, "÷1.5"))
    })
    expect(parseInt(updateBpmMock.mock.calls[0][0])).toBe(120)
    expect(updateBpmMock.mock.calls.length).toBe(1)
  })
  test("calls update Function after click on ÷2 Button", () => {
    let updateBpmMock = jest.fn()
    act(() => {
      ReactDOM.render(createBpmInput("Quarter", () => { }, updateBpmMock, 240), container);
      userEvent.click(getByLabelText(container, "÷2"))
    })
    expect(parseInt(updateBpmMock.mock.calls[0][0])).toBe(120)
    expect(updateBpmMock.mock.calls.length).toBe(1)
  })
  test("calls update Function after changing to BPM Tempostyle", () => {
    let changeTempoStyleMock = jest.fn()
    act(() => {
      ReactDOM.render(createBpmInput("Quarter", changeTempoStyleMock, () => { }, 120), container);
      userEvent.click(getByLabelText(container, "Beats per Minute"))
    })
    expect(changeTempoStyleMock.mock.calls[0][0]).toBe("BPM")
    expect(changeTempoStyleMock.mock.calls.length).toBe(1)
  })
  test("calls update Function after changing to Quarter Tempostyle", () => {
    let changeTempoStyleMock = jest.fn()
    act(() => {
      ReactDOM.render(createBpmInput("BPM", changeTempoStyleMock, () => { }, 120), container);
      userEvent.click(getByLabelText(container, "Quarter Notes per Minute"))
    })
    expect(changeTempoStyleMock.mock.calls[0][0]).toBe("Quarter")
    expect(changeTempoStyleMock.mock.calls.length).toBe(1)
  })
})
