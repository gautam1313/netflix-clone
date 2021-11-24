import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import "./list.scss";
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";

const List = ({ list }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

  const listRef = useRef();
  const handleClick = (direction, listItemCount) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${distance + 230}px)`;
    }
    if (direction === "right" && slideNumber < listItemCount - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${distance - 230}px)`;
    }
  };
  console.log(list);
  return (
    <div className="list">
      <span className="listTitle">{list?.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left", list.content.length)}
          style={{ display: (!isMoved || slideNumber === 0) && "none" }}
        />
        <div className="container" ref={listRef}>
          {list?.content.map((item, i) => (
            <ListItem key={i} index={i} item={item} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right", list.content.length)}
        />
      </div>
    </div>
  );
};

export default List;
