const VideoBlock = ({ url }) => (
  <div>
    <video controls width="600">
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);
export default VideoBlock;
