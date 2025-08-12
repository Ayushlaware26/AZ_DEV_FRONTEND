import React from "react";

// Import all block components
import HeadingBlock from "./blocks/HeadingBlock";
import ParagraphBlock from "./blocks/ParagraphBlock";
import CodeBlock from "./blocks/CodeBlock";
import VideoBlock from "./blocks/VideoBlock";
import MCQBlock from "./blocks/MCQBlock";

const LessonRenderer = ({ content }) => {
  if (!content || !Array.isArray(content)) {
    return <p>No lesson content available.</p>;
  }

  return (
    <div className="lesson-renderer">
      {content.map((block, index) => {
        switch (block.type) {
          case "heading":
            return <HeadingBlock key={index} text={block.text} />;

          case "paragraph":
            return <ParagraphBlock key={index} text={block.text} />;

          case "code":
            return (
              <CodeBlock
                key={index}
                language={block.language}
                text={block.text}
              />
            );

          case "video":
            return <VideoBlock key={index} url={block.url} />;

          case "mcq":
            return (
              <MCQBlock
                key={index}
                question={block.question}
                options={block.options}
                answer={block.answer}
              />
            );

          default:
            return (
              <p key={index} style={{ color: "red" }}>
                Unknown block type: {block.type}
              </p>
            );
        }
      })}
    </div>
  );
};

export default LessonRenderer;
