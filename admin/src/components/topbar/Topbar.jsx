import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../context/authContext/AuthActions";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./topbar.css";

const Topbar = () => {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.replace("/");
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">gtmAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">5</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://picolio.auto123.com/art-images/111900/f1.jpg"
            alt=""
            className="topAvatar"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
