import { ILipBreakFinder } from "./LipBreakFinder";
import { TromboneNote } from "./notes";

export interface DocumentControllerConfig {
  lipBreakFinder: ILipBreakFinder;
  inputElementId: string;
}

export class DocumentController {

  constructor(config: DocumentControllerConfig) {

    document.getElementById(config.inputElementId)?.addEventListener('input', (event) => {

      if (event instanceof InputEvent && event.data) {
        const lipBreaks = config.lipBreakFinder.getDescendingLipBreakTonesWithSlidePositionsForPartial(Number.parseInt(event.data));
        const lipBreakOutputElement = document.getElementById('lip-breaks-output');
        if (lipBreakOutputElement) {
          lipBreakOutputElement.innerHTML = this.createHtmlListElementForLipBreaks(lipBreaks)
        }
      }

    })

  }

  private createHtmlListElementForLipBreaks(notes: TromboneNote[]): string {

    const notesAsListElements = notes.map((note) => {
      return `<li>${note.noteName} in position ${note.slidePosition}</li>`
    })

    return  '<ul>'.concat(...notesAsListElements, '</ul>')
  }

}