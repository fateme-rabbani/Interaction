import { useState } from "react";

import Interactions from "./components/Interactions";
import FreeResponseInteractionStudio from "./components/FreeResponse";
import MultipleChoiceInteractionStudio from "./components/MultipleChoice";
import TrueOrFalseInteractionStudio from "./components/TrueOrFalse";
import MatchingInteractionStudio from "./components/Maching";
import FillTheBlankInteractionStudio from "./components/FillTheBlank";

const interactionList = [
  { name: "FreeResponse", component: <FreeResponseInteractionStudio /> },
  { name: "MultipleChoice", component: <MultipleChoiceInteractionStudio /> },
  { name: "TrueOrFalse", component: <TrueOrFalseInteractionStudio /> },
  { name: "Matching", component: <MatchingInteractionStudio /> },
  { name: "FillTheBlank", component: <FillTheBlankInteractionStudio /> },
];

function App() {
  const [selectedInteraction, setSelectedInteraction] = useState(null);
  return (
    <div className="flex flex-col gap-20 w-full p-10">
      {!selectedInteraction && (
        <div className="flex flex-col gap-5">
          {interactionList.map((item) => (
            <button
              onClick={() => setSelectedInteraction(item.name)}
              style={{ background: "#ECFEFD", padding: 5, borderRadius: 5 }}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}

      {selectedInteraction && (
        <>
          <Interactions
            selectedInteraction={
              interactionList.find((item) => item.name === selectedInteraction)
                .component
            }
          />
          <div className="flex gap-4 justify-end">
            <button
              style={{ background: "#ECFEFD", padding: 10, borderRadius: 5 }}
              onClick={() => setSelectedInteraction(null)}
            >
              back
            </button>
            <button
              style={{ background: "#1AC0AE", padding: 10, borderRadius: 5 }}
            >
              submit
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
