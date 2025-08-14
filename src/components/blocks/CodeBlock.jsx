export default function CodeBlock({ language, text }) {
  return (
    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto">
      <code>{text}</code>
    </pre>
  );
}
