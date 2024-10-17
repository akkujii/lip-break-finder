/**
 * @jest-environment jsdom
 */

import { DocumentController } from "../src/DocumentController";
import { LipBreakFinder } from "../src/LipBreakFinder";

afterEach(() => {
  document.body.innerHTML = '';
})

const initializeHtmlDocument = () => {
  const inputElement = document.createElement('input');
  inputElement.id = 'input-number';
  document.body.append(inputElement);

  const outputElement = document.createElement('div');
  outputElement.id = 'lip-breaks-output'
  document.body.append(outputElement);

  return { inputElement }
}

describe('Document controller', () => {
  it('should call parametrized function with inputted data', () => {

    const { inputElement } = initializeHtmlDocument();

    const lipBreakFinder = new LipBreakFinder();

    new DocumentController({
      lipBreakFinder: lipBreakFinder,
      inputElementId: 'input-number'
    });

    const getDescendingLipBreakTonesWithSlidePositionsForPartialSpy = jest.spyOn(lipBreakFinder, 'getDescendingLipBreakTonesWithSlidePositionsForPartial')

    inputElement.dispatchEvent(new InputEvent('input', {
      data: '3'
    }));

    expect(getDescendingLipBreakTonesWithSlidePositionsForPartialSpy).toHaveBeenCalledWith(3);

  });

  it('should populate lip breaks based on inputted data', () => {

    const { inputElement } = initializeHtmlDocument();

    const lipBreakFinder = new LipBreakFinder();

    new DocumentController({
      lipBreakFinder: lipBreakFinder,
      inputElementId: 'input-number'
    });

    inputElement.dispatchEvent(new InputEvent('input', {
      data: '2'
    }));

    expect(document.getElementById('lip-breaks-output')?.innerHTML).toEqual(
      `<ul><li>Bb1 in position 1</li><li>A1 in position 2</li><li>Ab1 in position 3</li><li>G1 in position 4</li><li>F#1 in position 5</li><li>F1 in position 6</li><li>E1 in position 7</li></ul>`
    );

  })

});
