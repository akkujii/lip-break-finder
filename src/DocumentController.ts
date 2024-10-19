import { ILipBreakFinder } from "./LipBreakFinder";
import { TromboneNote } from "./notes";

export interface DocumentControllerConfig {
  lipBreakFinder: ILipBreakFinder;
  inputElementId: string;
  selectElementId?: string;
}

export class DocumentController {

  constructor(config: DocumentControllerConfig) {

    document.getElementById(config.inputElementId)?.addEventListener('input', (event) => {

      if (event instanceof InputEvent && event.data) {
        const partial = Number.parseInt(event.data)
        this.populateLipBreaks(config, partial);
      }

    })

    // TODO: Remove this if block / make selectElementId mandatory
    if (config.selectElementId) {

      document.getElementById(config.selectElementId)?.addEventListener('input', (event) => {
        
          const partial = Number.parseInt((document.getElementById(config.selectElementId!) as HTMLSelectElement).value)
          this.populateLipBreaks(config, partial);

      })
    }

  }

  private populateLipBreaks(config: DocumentControllerConfig, partial: number) {
    const ascendingLipBreaks = config.lipBreakFinder.getAscendingLipBreakTonesWithSlidePositionsForPartial(partial);
    const descendingLipBreaks = config.lipBreakFinder.getDescendingLipBreakTonesWithSlidePositionsForPartial(partial);
    const lipBreakOutputElement = document.getElementById('lip-breaks-output');
    if (lipBreakOutputElement) {

      const ascendingLipBreaksHtml = `<p>Ascending lip breaks:</p>${this.createHtmlListElementForLipBreaks(ascendingLipBreaks)}`;
      const descendingLipBreaksHtml = `<p>Descending lip breaks:</p>${this.createHtmlListElementForLipBreaks(descendingLipBreaks)}`;

      lipBreakOutputElement.innerHTML = ascendingLipBreaksHtml.concat(descendingLipBreaksHtml);
    }
  }

  private createHtmlListElementForLipBreaks(notes: TromboneNote[]): string {

    const notesAsListElements = notes.map((note) => {
      return `<li>${note.noteName} in position ${note.slidePosition}</li>`
    })

    return  '<ul>'.concat(...notesAsListElements, '</ul>')
  }

}