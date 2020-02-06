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
      ReactDOM.render(<BpmInput tempoStyle="Quarter" updateBpm={() => {}} currentBpm="1234"></BpmInput>, container)
      inputElement = getByLabelText(container, "Enter Tempo")
    });
    expect(inputElement.value).toBe("1234")
  })
  test("can read typed Input", async () => {
    let inputElement
    await act(async () => {
      ReactDOM.render(<BpmInput tempoStyle="Quarter" updateBpm={() => {}} currentBpm="120"></BpmInput>, container)
      inputElement = getByLabelText(container, "Enter Tempo")
      await myUserEvent.type(inputElement, "333", { allAtOnce: false, delay: 1 });
    });
    expect(inputElement.value).toBe("120333")
  })
  test("can read pasted Input", async () => {
    let inputElement
    await act(async () => {
      ReactDOM.render(<BpmInput tempoStyle="Quarter" updateBpm={() => {}} currentBpm="120"></BpmInput>, container)
      inputElement = getByLabelText(container, "Enter Tempo")
      await myUserEvent.type(inputElement, "333", { allAtOnce: true });
    });
    expect(inputElement.value).toBe("120333")
  })

  test("doesn't accept Letters", async () => {
    let inputElement
    await act(async () => {
      ReactDOM.render(<BpmInput tempoStyle="Quarter" updateBpm={() => {}} currentBpm="" ></BpmInput>, container);
      inputElement = getByLabelText(container, "Enter Tempo")
      await myUserEvent.type(inputElement, "A1B1", { allAtOnce: false, delay: 1 })
    })
    expect(inputElement.value).toBe("11")
  })

  test("doesn't accept Whitespace", async () => {
    let inputElement
    await act(async () => {
      ReactDOM.render(<BpmInput tempoStyle="Quarter" updateBpm={() => {}} currentBpm="120" ></BpmInput>, container);
      inputElement = getByLabelText(container, "Enter Tempo")
      await myUserEvent.type(inputElement, " ", { allAtOnce: true })
    })
    expect(inputElement.value).toBe("120")
  })

  test("Adds 10BPM on +10 Button", () => {
    act(() => {
      ReactDOM.render(<BpmInput tempoStyle="Quarter" updateBpm={() => {}} currentBpm="110"></BpmInput>, container);
      userEvent.click(getByLabelText(container, "+10"))
    })
    expect(getByLabelText(container, "Enter Tempo").value).toBe("120")
  })
  test("Subtracts 10BPM on -10 Button", () => {
    act( () => {
      ReactDOM.render(<BpmInput tempoStyle="Quarter" updateBpm={() => {}} currentBpm="130"></BpmInput>, container);
      userEvent.click(getByLabelText(container, "-10"))
    })
    expect(getByLabelText(container, "Enter Tempo").value).toBe("120")
  })
  test("Multiplies BPM by 2 on x2 Button", () => {
    act( () => {
      ReactDOM.render(<BpmInput tempoStyle="Quarter" updateBpm={() => {}} currentBpm="60"></BpmInput>, container);
      userEvent.click(getByLabelText(container, "x2"))
    })
    expect(getByLabelText(container, "Enter Tempo").value).toBe("120")
  })
  test("Multiplies BPM by 1.5 on x1.5 Button", () => {
    act( () => {
      ReactDOM.render(<BpmInput tempoStyle="Quarter" updateBpm={() => {}} currentBpm="80"></BpmInput>, container);
      userEvent.click(getByLabelText(container, "x1.5"))
    })
    expect(getByLabelText(container, "Enter Tempo").value).toBe("120")
  })
  test("Divides BPM by 1.5 on ÷1.5 Button", () => {
    act( () => {
      ReactDOM.render(<BpmInput tempoStyle="Quarter" updateBpm={() => {}} currentBpm="160"></BpmInput>, container);
      userEvent.click(getByLabelText(container, "÷1.5"))
    })
    expect(getByLabelText(container, "Enter Tempo").value).toBe("120")
  })
  test("Divides BPM by 2 on ÷2 Button", () => {
    act( () => {
      ReactDOM.render(<BpmInput tempoStyle="Quarter" updateBpm={() => {}} currentBpm="240"></BpmInput>, container);
      userEvent.click(getByLabelText(container, "÷2"))
    })
    expect(getByLabelText(container, "Enter Tempo").value).toBe("120")
  })
})
