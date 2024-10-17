import { LipBreakFinder } from "../src/LipBreakFinder";

describe('LipBreakFinder', () => {
  it('should find the possible lib break tones with slide positions for a given partial from the partial below', () => {
    const libBreakFinder = new LipBreakFinder();

    const expectedSecondPartialNotes = [
      { noteName: 'Bb2', slidePosition: 1 },
      { noteName: 'A2', slidePosition: 2 },
      { noteName: 'Ab2', slidePosition: 3 },
      { noteName: 'G2', slidePosition: 4 },
      { noteName: 'F#2', slidePosition: 5 },
      { noteName: 'F2', slidePosition: 6 },
      { noteName: 'E2', slidePosition: 7 },
    ]

    const expectedEleventhPartialNotes = [
      { noteName: 'E5', slidePosition: 1 },
      { noteName: 'Eb5', slidePosition: 2 },
      { noteName: 'D5', slidePosition: 3 },
      { noteName: 'C#5', slidePosition: 4 },
      { noteName: 'C5', slidePosition: 5 },
      { noteName: 'B4', slidePosition: 6 },
      { noteName: 'Bb4', slidePosition: 7 },
    ]

    expect(libBreakFinder.getDescendingLipBreakTonesWithSlidePositionsForPartial(3))
      .toEqual(expect.arrayContaining(expectedSecondPartialNotes));
    expect(libBreakFinder.getDescendingLipBreakTonesWithSlidePositionsForPartial(12))
      .toEqual(expect.arrayContaining(expectedEleventhPartialNotes));

  });
});