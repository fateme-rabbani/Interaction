const Interactions = ({ selectedInteraction }) => {
  return (
    <div className="flex flex-col gap-2 p-5">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label for="Question">Question</label>
          <input type="text" id="Question"></input>
        </div>

        {selectedInteraction}

        <div className="flex flex-col gap-2">
          <label for="solution">solution</label>
          <input type="text" id="solution"></input>
        </div>
      </div>

      <div className="flex flex-col gap-5 border p-5 rounded">
        Difficulty
        <div className="flex gap-4">
          {Array(5)
            .fill()
            .map((_, i) => (
              <div className="flex gap-2">
                <input type="radio" id={i} name="difficulty" value={i}></input>
                <label for={i}>difficulty{i}</label>
              </div>
            ))}
        </div>
        <label for="tag">tags</label>
        <select name="tag" id="tag">
          <option value="physics">Physics</option>
          <option value="history">History</option>
          <option value="chemistry">Chemistry</option>
        </select>
      </div>
    </div>
  );
};

export default Interactions;
