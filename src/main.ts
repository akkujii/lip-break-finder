import { DocumentController } from "./DocumentController";
import { LipBreakFinder } from "./LipBreakFinder";

const lipBreakFinder = new LipBreakFinder();

new DocumentController({
  lipBreakFinder: lipBreakFinder,
  selectElementId: 'partial-select'
});
