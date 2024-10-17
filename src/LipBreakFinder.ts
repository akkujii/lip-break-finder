import { TromboneNoteMap } from "./notes";

export class LipBreakFinder {

  private static notesAndPartials = TromboneNoteMap

  constructor() { }

  getDescendingLipBreakTonesWithSlidePositionsForPartial(partial: number) {
    return LipBreakFinder.notesAndPartials.get(partial - 1);
  }
}