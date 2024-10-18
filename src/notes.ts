export interface TromboneNote {
  noteName: string;
  slidePosition: number
}

export const TromboneNoteMap: Map<number, TromboneNote[]> = new Map<number, TromboneNote[]>()
  .set(1, [
    { noteName: 'Bb1', slidePosition: 1 },
    { noteName: 'A1', slidePosition: 2 },
    { noteName: 'Ab1', slidePosition: 3 },
    { noteName: 'G1', slidePosition: 4 },
    { noteName: 'F#1', slidePosition: 5 },
    { noteName: 'F1', slidePosition: 6 },
    { noteName: 'E1', slidePosition: 7 }
  ])
  .set(2, [
    { noteName: 'Bb2', slidePosition: 1 },
    { noteName: 'A2', slidePosition: 2 },
    { noteName: 'Ab2', slidePosition: 3 },
    { noteName: 'G2', slidePosition: 4 },
    { noteName: 'F#2', slidePosition: 5 },
    { noteName: 'F2', slidePosition: 6 },
    { noteName: 'E2', slidePosition: 7 }
  ])
  .set(3, [
    { noteName: 'F3', slidePosition: 1 },
    { noteName: 'E3', slidePosition: 2 },
    { noteName: 'Eb3', slidePosition: 3 },
    { noteName: 'D3', slidePosition: 4 },
    { noteName: 'C#3', slidePosition: 5 },
    { noteName: 'C3', slidePosition: 6 },
    { noteName: 'B2', slidePosition: 7 }
  ])
  .set(4, [
    { noteName: 'Bb3', slidePosition: 1 },
    { noteName: 'A3', slidePosition: 2 },
    { noteName: 'Ab3', slidePosition: 3 },
    { noteName: 'G3', slidePosition: 4 },
    { noteName: 'F#3', slidePosition: 5 },
    { noteName: 'F3', slidePosition: 6 },
    { noteName: 'E3', slidePosition: 7 }
  ])
  .set(5, [
    { noteName: 'D4', slidePosition: 1 },
    { noteName: 'C#4', slidePosition: 2 },
    { noteName: 'C4', slidePosition: 3 },
    { noteName: 'B3', slidePosition: 4 },
    { noteName: 'Bb3', slidePosition: 5 },
    { noteName: 'A3', slidePosition: 6 },
    { noteName: 'Ab3', slidePosition: 7 }
  ])
  .set(6, [
    { noteName: 'F4', slidePosition: 1 },
    { noteName: 'E4', slidePosition: 2 },
    { noteName: 'Eb4', slidePosition: 3 },
    { noteName: 'D4', slidePosition: 4 },
    { noteName: 'C#4', slidePosition: 5 },
    { noteName: 'C4', slidePosition: 6 },
    { noteName: 'B3', slidePosition: 7 }
  ])
  .set(7, [
    { noteName: 'Ab4', slidePosition: 1 },
    { noteName: 'G4', slidePosition: 2 },
    { noteName: 'F#4', slidePosition: 3 },
    { noteName: 'F4', slidePosition: 4 },
    { noteName: 'E4', slidePosition: 5 },
    { noteName: 'Eb4', slidePosition: 6 },
    { noteName: 'D4', slidePosition: 7 }
  ])
  .set(8, [
    { noteName: 'Bb4', slidePosition: 1 },
    { noteName: 'A4', slidePosition: 2 },
    { noteName: 'Ab4', slidePosition: 3 },
    { noteName: 'G4', slidePosition: 4 },
    { noteName: 'F#4', slidePosition: 5 },
    { noteName: 'F4', slidePosition: 6 },
    { noteName: 'E4', slidePosition: 7 }
  ])
  .set(9, [
    { noteName: 'C5', slidePosition: 1 },
    { noteName: 'B4', slidePosition: 2 },
    { noteName: 'Bb4', slidePosition: 3 },
    { noteName: 'A4', slidePosition: 4 },
    { noteName: 'Ab4', slidePosition: 5 },
    { noteName: 'G4', slidePosition: 6 },
    { noteName: 'F#4', slidePosition: 7 }
  ])
  .set(10, [
    { noteName: 'D5', slidePosition: 1 },
    { noteName: 'C#5', slidePosition: 2 },
    { noteName: 'C5', slidePosition: 3 },
    { noteName: 'B4', slidePosition: 4 },
    { noteName: 'Bb4', slidePosition: 5 },
    { noteName: 'A4', slidePosition: 6 },
    { noteName: 'Ab4', slidePosition: 7 }
  ])
  .set(11, [
    { noteName: 'E5', slidePosition: 1 },
    { noteName: 'Eb5', slidePosition: 2 },
    { noteName: 'D5', slidePosition: 3 },
    { noteName: 'C#5', slidePosition: 4 },
    { noteName: 'C5', slidePosition: 5 },
    { noteName: 'B4', slidePosition: 6 },
    { noteName: 'Bb4', slidePosition: 7 }
  ])
  .set(12, [
    { noteName: 'F5', slidePosition: 1 },
    { noteName: 'E5', slidePosition: 2 },
    { noteName: 'Eb5', slidePosition: 3 },
    { noteName: 'D5', slidePosition: 4 },
    { noteName: 'C#5', slidePosition: 5 },
    { noteName: 'C5', slidePosition: 6 },
    { noteName: 'B4', slidePosition: 7 }
  ])