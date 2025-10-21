import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import Contact from "./Contact";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 fixed top-0 w-full z-50 text-white">
      <div className="navbar-start">
        <details className="dropdown lg:hidden">
          <summary className="m-1 btn btn-ghost ">
          <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-46">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#About">About</a>
            </li>
            <li>
              <a href="/#Skills">Skills</a>
            </li>
            <li>
              <a href="/#Projects">Projects</a>
            </li>
            <li>
              <a href="/#Achievements">Achievements</a>
            </li>
            <li>
              <a href="/#Recommendations">Recommendations</a>
            </li>
            <li>
              <a href="/#Experience">Experience</a>
            </li>
            <li>
              <a href="/#Volunteering">Volunteering</a>
            </li>
          </ul>
        </details>
        <div className="navbar-center hidden lg:flex">
          <a
            className="btn btn-ghost normal-case"
            href="https://www.linkedin.com/in/skysingh04"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="fas fa-check"
              style={{ color: "grey", fontSize: 25 }}
            />
          </a>
          <a
            className="btn btn-ghost normal-case text-xl"
            href="https://github.com/SkySingh04"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="fas fa-check"
              style={{ color: "grey", fontSize: 25 }}
            />
          </a>
          <a
            className="btn btn-ghost normal-case text-xl"
            href="https://instagram.com/kind.of.akash"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="fas fa-check"
              style={{ color: "grey", fontSize: 25 }}
            />
          </a>
          <a
            className="btn btn-ghost normal-case text-xl"
            href="https://x.com/SkySingh04"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="fas fa-check"
              style={{ color: "grey", fontSize: 25 }}
            />
          </a>
          <a 
            className="btn btn-ghost normal-case text-xl"
            href="https://dev.to/skysingh04"
          >
            <FontAwesomeIcon
              icon={faDev}
              className="fas fa-check"
              style={{ color: "grey", fontSize: 25 }}
            />
            </a>
          <a
            className="btn btn-ghost normal-case text-xl"
            href="https://leetcode.com/u/skysingh04/"
          >
            <FontAwesomeIcon
              icon={faCodepen}
              className="fas fa-check"
              style={{ color: "grey", fontSize: 25 }}
            />
          </a>
          <Contact />
        </div>
      </div>
      <div className="navbar-end">
      <details className="dropdown lg:hidden">
          <summary className="m-1 btn btn-ghost ">
          <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-15">
          <li>
              <a
                className="btn btn-ghost normal-case"
                href="https://www.linkedin.com/in/skysingh04"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="fas fa-check"
                  style={{ color: "grey", fontSize: 25 }}
                />
              </a>
            </li>
            <li>
              <a
                className="btn btn-ghost normal-case text-xl"
                href="https://github.com/SkySingh04"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="fas fa-check"
                  style={{ color: "grey", fontSize: 25 }}
                />
              </a>{" "}
            </li>
            <li>
              <a
                className="btn btn-ghost normal-case text-xl"
                href="https://instagram.com/kind.of.akash"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="fas fa-check"
                  style={{ color: "grey", fontSize: 25 }}
                />
              </a>{" "}
            </li>
            <li>
              <a
                className="btn btn-ghost normal-case text-xl"
                href="https://x.com/SkySingh04"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="fas fa-check"
                  style={{ color: "grey", fontSize: 25 }}
                />
              </a>{" "}
            </li>
            <li>
              <a
                className="btn btn-ghost normal-case text-xl"
                href="https://dev.to/skysingh04"
              >
                <FontAwesomeIcon
                  icon={faDev}
                  className="fas fa-check"
                  style={{ color: "grey", fontSize: 25 }}
                />
              </a>{" "}
            </li>
            <li>
              <a
                className="btn btn-ghost normal-case text-xl"
                href="https://leetcode.com/u/skysingh04/"
              >
                <FontAwesomeIcon
                  icon={faCodepen}
                  className="fas fa-check"
                  style={{ color: "grey", fontSize: 25 }}
                />
              </a>{" "}
            </li>
            <li>
              <Contact />
            </li>
          </ul>
        </details>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#About">About</a>
            </li>
            <li>
              <a href="/#Skills">Skills</a>
            </li>
            <li>
              <a href="/#Projects">Projects</a>
            </li>
            <li>
              <a href="/#Achievements">Achievements</a>
            </li>
            <li>
              <a href="/#Recommendations">Recommendations</a>
            </li>
            <li>
              <a href="/#Experience">Experience</a>
            </li>
            <li>
              <a href="/#Volunteering">Volunteering</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
