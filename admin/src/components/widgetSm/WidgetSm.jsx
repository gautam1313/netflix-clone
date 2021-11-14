import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";
import axios from "axios";
import { useEffect, useState } from "react";

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      let isApiSubscribed = true;
      if (isApiSubscribed) {
        const res = await axios.get("/users?new=true", {
          headers: {
            token: `Bearer ${process.env.REACT_APP_TOKENID}`,
          },
        });
        setNewUsers(res.data);
      }
      return () => {
        isApiSubscribed = false;
      };
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        {newUsers?.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.profilePic ||
                "https://i.pinimg.com/474x/bd/ee/4c/bdee4c328550aaf21aa9f43fd19e2136.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
