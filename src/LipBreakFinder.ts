import { TromboneNote, TromboneNoteMap } from "./notes";

export interface ILipBreakFinder {
  getDescendingLipBreakTonesWithSlidePositionsForPartial(partial: number): TromboneNote[]
  getAscendingLipBreakTonesWithSlidePositionsForPartial(partial: number): TromboneNote[]
}
export class LipBreakFinder {

  private static notesAndPartials = TromboneNoteMap

  constructor() { }

  getAscendingLipBreaksForNote(note: string) {

    const ret: {
      slidePositionOfStartingNote: number
      lipBreaks: TromboneNote[]
    }[] = [];

    LipBreakFinder.notesAndPartials.forEach((notes: TromboneNote[], partialKey) => {
      notes.forEach((tromboneNote) => {
        if (tromboneNote.noteName === note) {
          ret.push({
            slidePositionOfStartingNote: tromboneNote.slidePosition,
            lipBreaks: this.getAscendingLipBreakTonesWithSlidePositionsForPartial(partialKey)
          })
        }
      })
    })

    return ret
  }

  getAscendingLipBreakTonesWithSlidePositionsForPartial(partial: number): TromboneNote[] {
    return LipBreakFinder.notesAndPartials.get(partial + 1) ?? [];
  }

  getDescendingLipBreakTonesWithSlidePositionsForPartial(partial: number): TromboneNote[] {
    return LipBreakFinder.notesAndPartials.get(partial - 1) ?? [];
  }
}