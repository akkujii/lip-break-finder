import { TromboneNote, TromboneNoteMap } from "./notes";

export interface ILipBreakFinder {
  getDescendingLipBreakTonesWithSlidePositionsForPartial(partial: number): TromboneNote[] 
}
export class LipBreakFinder {

  private static notesAndPartials = TromboneNoteMap

  constructor() { }

  getAscendingLipBreakTonesWithSlidePositionsForPartial(partial: number): TromboneNote[] {
    return LipBreakFinder.notesAndPartials.get(partial + 1) ?? [];
  }

  getDescendingLipBreakTonesWithSlidePositionsForPartial(partial: number): TromboneNote[] {
    return LipBreakFinder.notesAndPartials.get(partial - 1) ?? [];
  }
}