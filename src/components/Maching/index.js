import { useState } from "react";

const MatchingInteractionStudio = () => {
  const [value, setValue] = useState(1);
  return (
    <div className="flex flex-col gap-3">
      {Array(value)
        .fill()
        .map((_, i) => (
          <>
            <div className="flex gap-5">
              <div className="flex flex-col gap-2">
                <span>matchPairComplementQ #{i}</span>
                <input type="text"></input>
              </div>
              <div className="flex flex-col gap-2">
                <span>matchPairComplementA #{i}</span>{" "}
                <input type="text"></input>
              </div>
            </div>
          </>
        ))}

      <button
        style={{
          background: "#ECFEFD",
          padding: 5,
          borderRadius: 3,
          width: 120,
        }}
        onClick={() => setValue(value + 1)}
      >
        add choice
      </button>
    </div>
  );
};

export default MatchingInteractionStudio;
