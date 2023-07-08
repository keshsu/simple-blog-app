import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  faFacebookSquare,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import myImage from "assets/images/me.jpg";

import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:4000/api/categories");

      setCats(res.data);
    };

    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={myImage} alt="keshav" />
        <p>
          I am a professional developer specializing in software development,
          graphic design, web design, web development, JavaScript engineering,
          and digital marketing. With a passion for creating visually stunning
          and user-friendly websites and applications, I leverage my diverse
          skill set to deliver innovative solutions tailored to your needs.
          Explore my work and discover how I can help you achieve your digital
          goals.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <li className="sidebarListItem">
              <Link to={`/?cat=${c.name}`} className="link">
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW Me</span>
        <div className="sidebarSocial">
          <Link
            to="https://github.com/keshsu/"
            className="sidebarIcon"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/keshav-bhadel-a36176137/"
            className="sidebarIcon"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link
            to="https://www.facebook.com/keshab.bhadel.9/"
            className="sidebarIcon"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </Link>
        </div>
      </div>
    </div>
  );
}
