import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress="true"
        controls
        src="/video/trailer.mp4"
      />
    </div>
  );
};

export default Watch;
