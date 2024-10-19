/**
 * @jest-environment jsdom
 */

import { DocumentController } from "../src/DocumentController";
import { LipBreakFinder } from "../src/LipBreakFinder";

afterEach(() => {
  document.body.innerHTML = '';
})

const initializeHtmlDocument = () => {

  const selectElement = document.createElement('select');
  selectElement.id = 'partial-select';
  for (let i = 1; i < 13; i++) {
    const optionElement = document.createElement('option');
    optionElement.value = i.toString();
    selectElement.append(optionElement);
  }
  document.body.append(selectElement);

  const inputElement = document.createElement('input');
  inputElement.id = 'input-number';
  document.body.append(inputElement);

  const outputElement = document.createElement('div');
  outputElement.id = 'lip-breaks-output'
  document.body.append(outputElement);

  return { inputElement, selectElement }
}

describe('Document controller', () => {
  it('should call parametrized function with inputted data', () => {

    const { inputElement, selectElement } = initializeHtmlDocument();

    const lipBreakFinder = new LipBreakFinder();

    new DocumentController({
      lipBreakFinder: lipBreakFinder,
      selectElementId: 'partial-select'
    });

    const getDescendingLipBreakTonesWithSlidePositionsForPartialSpy = jest.spyOn(lipBreakFinder, 'getDescendingLipBreakTonesWithSlidePositionsForPartial')

    selectElement.value = '3';
    selectElement.dispatchEvent(new Event('input'));

    expect(getDescendingLipBreakTonesWithSlidePositionsForPartialSpy).toHaveBeenCalledWith(3);

  });

  it('should populate descending lip breaks based on inputted data', () => {

    const { selectElement } = initializeHtmlDocument();

    const lipBreakFinder = new LipBreakFinder();

    new DocumentController({
      lipBreakFinder: lipBreakFinder,
      selectElementId: 'partial-select'
    });

    selectElement.value = '2';
    selectElement.dispatchEvent(new Event('input'));

    const expectedDescendingLipBreaks = `<p>Descending lip breaks:</p><ul><li>Bb1 in position 1</li><li>A1 in position 2</li><li>Ab1 in position 3</li><li>G1 in position 4</li><li>F#1 in position 5</li><li>F1 in position 6</li><li>E1 in position 7</li></ul>`;

    expect(document.getElementById('lip-breaks-output')?.innerHTML).toMatch(expectedDescendingLipBreaks);

  })

  it('should populate ascending lip breaks based on inputted data', () => {

    const { selectElement } = initializeHtmlDocument();

    const lipBreakFinder = new LipBreakFinder();

    new DocumentController({
      lipBreakFinder: lipBreakFinder,
      selectElementId: 'partial-select'
    });

    selectElement.value = '2';
    selectElement.dispatchEvent(new Event('input'));

    const expectedAscendingLipBreaks = `<p>Ascending lip breaks:</p><ul><li>F3 in position 1</li><li>E3 in position 2</li><li>Eb3 in position 3</li><li>D3 in position 4</li><li>C#3 in position 5</li><li>C3 in position 6</li><li>B2 in position 7</li></ul>`;

    expect(document.getElementById('lip-breaks-output')?.innerHTML).toMatch(expectedAscendingLipBreaks);

})

});
