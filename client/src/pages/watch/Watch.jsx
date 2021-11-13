import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

const Watch = () => {
  const location = useLocation();
  console.log(location);
  const { movie } = location.state;
  //{movie.video}
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
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
