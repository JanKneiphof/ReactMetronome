import { fireEvent } from "@testing-library/dom";

/*IMPORTANT: This method is a modified version from the userEvent library from "@testing-library/user-event"
Because their type(...) method is:
1.: supposed to ignore everything that is already typed 
2.: supposed to ignore all modifications done by the onChange event Handler to the input Field
I want to use both of these attributes in my Test, so I modified their version
*/

function wait(time) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), time);
  });
}

function fireChangeEvent(event) {
  fireEvent.change(event.target);
  event.target.removeEventListener("blur", fireChangeEvent);
}

const myUserEvent = {

  async type(element, text, userOpts = {}) {
    if (element.disabled) return;
    const defaultOpts = {
      allAtOnce: false,
      delay: 0
    };
    const opts = Object.assign(defaultOpts, userOpts);
    if (opts.allAtOnce) {
      if (element.readOnly) return;
      fireEvent.input(element, { target: { value: element.value + text } });
    } else {
      for (let index = 0; index < text.length; index++) {
        let actuallyTyped = element.value;
        const char = text[index];
        const key = char; // TODO: check if this also valid for characters with diacritic markers e.g. úé etc
        const keyCode = char.charCodeAt(0);

        if (opts.delay > 0) await wait(opts.delay);

        const downEvent = fireEvent.keyDown(element, {
          key: key,
          keyCode: keyCode,
          which: keyCode
        });
        if (downEvent) {
          const pressEvent = fireEvent.keyPress(element, {
            key: key,
            keyCode,
            charCode: keyCode
          });
          if (pressEvent) {
            actuallyTyped += key;
            if (!element.readOnly)
              fireEvent.input(element, {
                target: {
                  value: actuallyTyped
                },
                bubbles: true,
                cancelable: true
              });
          }
        }

        fireEvent.keyUp(element, {
          key: key,
          keyCode: keyCode,
          which: keyCode
        });
      }
    }
    element.addEventListener("blur", fireChangeEvent);
  }
};

export default myUserEvent;