import { useState } from "react";

const MCQBlock = ({ question, options, answer }) => {
  const [selected, setSelected] = useState(null);

  const checkAnswer = () => {
    if (selected === answer) {
      alert("✅ Correct!");
    } else {
      alert("❌ Try again!");
    }
  };

  return (
    <div>
      <p><strong>{question}</strong></p>
      {options.map((opt, i) => (
        <div key={i}>
          <label>
            <input
              type="radio"
              name={question}
              onChange={() => setSelected(i)}
            />
            {opt}
          </label>
        </div>
      ))}
      <button onClick={checkAnswer}>Submit</button>
    </div>
  );
};

export default MCQBlock;
