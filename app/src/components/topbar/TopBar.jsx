import { useContext } from "react";
import { Link } from "react-router-dom";

import {
  faFacebookSquare,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Context } from "../../context/Context";

import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:4000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <Link to="https://github.com/keshsu/" target="_blank">
          <FontAwesomeIcon icon={faGithubSquare} className="topIcon" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/keshav-bhadel-a36176137/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className="topIcon" />
        </Link>
        <Link to="https://www.facebook.com/keshab.bhadel.9/" target="_blank">
          <FontAwesomeIcon icon={faFacebookSquare} className="topIcon" />
        </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <button
          className="ps-2topListItem"
          aria-hidden="true"
          onClick={handleLogout}
        >
          {user && "LOGOUT"}
        </button>
      </div>
    </div>
  );
}
