import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useEffect, useState } from "react";
import "./featured.scss";
import axios from "axios";

const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      let isApiSubscribed = true;
      if (isApiSubscribed) {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token: `Bearer ${
              JSON.parse(localStorage.getItem("user")).accessToken
            }`,
          },
        });
        setContent(res.data[0]);
      }
      return () => {
        isApiSubscribed = false;
      };
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="Anime">Anime</option>
            <option value="Comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="Superhero">Superhero</option>
            <option value="Anime">Animation</option>
            <option value="Sports">Drama</option>
            <option value="Action">Action</option>
          </select>
        </div>
      )}
      <img src={content?.img} alt="" />
      <div className="info">
        <img src={content?.imgTitle} alt="" />
        <span className="desc">{content?.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
