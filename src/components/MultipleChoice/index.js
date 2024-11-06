import { useState } from "react";

const MultipleChoiceInteractionStudio = () => {
  const [value, setValue] = useState(1);
  return (
    <div className="flex flex-col gap-5">
      {Array(value)
        .fill()
        .map((_, i) => (
          <div>
            <span>#choice{i}</span>
            <div className="flex gap-3">
              <input type="checkbox" id={i} name={i} value=""></input>
              <input type="text"></input>
            </div>
          </div>
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
      <label class="relative inline-block w-12 h-6">
        <input type="checkbox" class="opacity-0 w-0 h-0 peer" />
        <span class="absolute inset-0 bg-gray-300 rounded-full peer-checked:bg-blue-500 transition-all"></span>
        <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-6 transition-all"></span>
      </label>
    </div>
  );
};

export default MultipleChoiceInteractionStudio;
