import { getAllRiddles } from "../API/riddleApi.js";
import { ChoiceRidle } from "../classes/ChoiceRidle.js";
import { Riddle } from "../classes/Riddle.js";

// Convert all obj riddles and load to an instances
export async function loadRiddles() {
    const allRiddles = await getAllRiddles();
    const loadedRiddles = allRiddles.map((r) => {
        if (r.type === "regular") {
            return new Riddle(r)
        } else if (r.type === "choices") {
            return new ChoiceRidle(r, r.choices)
        }
    });
    return loadedRiddles;
}

const loadedRiddles = await loadRiddles();

export default loadedRiddles;