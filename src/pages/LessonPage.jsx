import LessonRender from "../components/LessonRenderer";

export default function LessonPage() {
  // Hardcoded lesson content
  const lessonData = [
    { type: "heading", text: "Introduction to AI" },
    { type: "paragraph", text: "Artificial intelligence (AI) is a rapidly evolving field..." },
    { type: "code", language: "python", text: "print('Hello, AI!')" },
    { type: "video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    {
      type: "mcq",
      question: "What is AI?",
      options: ["A type of robot", "A field of computer science", "A programming language"],
      answer: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <LessonRender blocks={lessonData} />
    </div>
  );
}
