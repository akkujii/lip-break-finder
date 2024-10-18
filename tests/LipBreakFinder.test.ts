import { LipBreakFinder } from "../src/LipBreakFinder";

describe('LipBreakFinder', () => {
  it('should find the possible ascending lip break notes with slide positions for thre given partial', () => {
    const libBreakFinder = new LipBreakFinder();

    const expectedFourthPartialNotes = [
      { noteName: 'Bb3', slidePosition: 1 },
      { noteName: 'A3', slidePosition: 2 },
      { noteName: 'Ab3', slidePosition: 3 },
      { noteName: 'G3', slidePosition: 4 },
      { noteName: 'F#3', slidePosition: 5 },
      { noteName: 'F3', slidePosition: 6 },
      { noteName: 'E3', slidePosition: 7 },
    ]

    const expectedTwelfthPartialNotes = [
      { noteName: 'F5', slidePosition: 1 },
      { noteName: 'E5', slidePosition: 2 },
      { noteName: 'Eb5', slidePosition: 3 },
      { noteName: 'D5', slidePosition: 4 },
      { noteName: 'C#5', slidePosition: 5 },
      { noteName: 'C5', slidePosition: 6 },
      { noteName: 'B4', slidePosition: 7 },
    ]

    expect(libBreakFinder.getAscendingLipBreakTonesWithSlidePositionsForPartial(3))
      .toEqual(expect.arrayContaining(expectedFourthPartialNotes));
    expect(libBreakFinder.getAscendingLipBreakTonesWithSlidePositionsForPartial(11))
      .toEqual(expect.arrayContaining(expectedTwelfthPartialNotes));

  });
  it('should find the possible descending lip break notes with slide positions for thre given partial', () => {
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