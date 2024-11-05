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

  describe('when note has lip breaks on one partial', () => {

    it('should find the possible ascending lip breaks for the given note', () => {
      const libBreakFinder = new LipBreakFinder();

      const expectedThirdPartialnotes = [
        { noteName: 'F3', slidePosition: 1 },
        { noteName: 'E3', slidePosition: 2 },
        { noteName: 'Eb3', slidePosition: 3 },
        { noteName: 'D3', slidePosition: 4 },
        { noteName: 'C#3', slidePosition: 5 },
        { noteName: 'C3', slidePosition: 6 },
        { noteName: 'B2', slidePosition: 7 }
      ]

      expect(libBreakFinder.getAscendingLipBreaksForNote('Bb2'))
        .toEqual(expect.arrayContaining([
          {
            slidePositionOfStartingNote: 1,
            lipBreaks: expectedThirdPartialnotes
          }
        ]));

    });

  })

  describe('when note has lip breaks on multiple partials', () => {

    it('should find the possible ascending lip breaks for the given note', () => {
      const libBreakFinder = new LipBreakFinder();

      const expectedFourthPartialNotes = [
        { noteName: 'Bb3', slidePosition: 1 },
        { noteName: 'A3', slidePosition: 2 },
        { noteName: 'Ab3', slidePosition: 3 },
        { noteName: 'G3', slidePosition: 4 },
        { noteName: 'F#3', slidePosition: 5 },
        { noteName: 'F3', slidePosition: 6 },
        { noteName: 'E3', slidePosition: 7 }
      ];

      const expectedFifthPartialnotes = [
        { noteName: 'D4', slidePosition: 1 },
        { noteName: 'C#4', slidePosition: 2 },
        { noteName: 'C4', slidePosition: 3 },
        { noteName: 'B3', slidePosition: 4 },
        { noteName: 'Bb3', slidePosition: 5 },
        { noteName: 'A3', slidePosition: 6 },
        { noteName: 'Ab3', slidePosition: 7 }
      ]

      expect(libBreakFinder.getAscendingLipBreaksForNote('F3'))
        .toEqual(expect.arrayContaining([
          {
            slidePositionOfStartingNote: 1,
            lipBreaks: expectedFourthPartialNotes
          },
          {
            slidePositionOfStartingNote: 6,
            lipBreaks: expectedFifthPartialnotes
          }
        ]));

    });

  })

});