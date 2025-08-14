import { useState } from "react";

export default function MCQBlock({ question, options, answer }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <p className="font-semibold">{question}</p>
      <div className="mt-2 space-y-2">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`block w-full text-left px-4 py-2 border rounded ${
              selected === idx
                ? idx === answer
                  ? "bg-green-200 border-green-500"
                  : "bg-red-200 border-red-500"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
