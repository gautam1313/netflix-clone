import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://pbs.twimg.com/media/ED9i1pXXsAAxpOh?format=jpg&name=medium"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kimi Raikkonen</span>
            <span className="widgetSmUserTitle">F1 Driver</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://pbs.twimg.com/media/ED9i1pXXsAAxpOh?format=jpg&name=medium"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kimi Raikkonen</span>
            <span className="widgetSmUserTitle">F1 Driver</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://pbs.twimg.com/media/ED9i1pXXsAAxpOh?format=jpg&name=medium"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kimi Raikkonen</span>
            <span className="widgetSmUserTitle">F1 Driver</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://pbs.twimg.com/media/ED9i1pXXsAAxpOh?format=jpg&name=medium"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kimi Raikkonen</span>
            <span className="widgetSmUserTitle">F1 Driver</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://pbs.twimg.com/media/ED9i1pXXsAAxpOh?format=jpg&name=medium"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kimi Raikkonen</span>
            <span className="widgetSmUserTitle">F1 Driver</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
