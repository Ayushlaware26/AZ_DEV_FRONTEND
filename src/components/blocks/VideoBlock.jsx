export default function VideoBlock({ url }) {
  return (
    <div className="w-full aspect-video">
      <iframe
        src={url}
        title="Lesson Video"
        className="w-full h-full rounded-lg"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}
