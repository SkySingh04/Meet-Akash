import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 fixed top-0 w-full z-50">
        <div className="navbar-start">
        <div className="dropdown ">
    <label className="btn btn-ghost lg:hidden swap swap-rotate">
            <input type="checkbox" />
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            
          </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1]  shadow bg-base-100 rounded-box w-50">
            <li><a href="/">Home</a></li>
            <li><a href="/#About">About</a></li>
            <li><a href="/#Skills">Skills</a></li>
            <li><a href="/#Projects">Projects</a></li>
            <li><a href="/#Experience">Experience</a></li>
            {/* <li><a href="/#Achievements">Achievements</a></li> */}
            <li><a href="/#Volunteering">Volunteering</a></li>
        </ul>
    </div>
      <div className="navbar-center hidden lg:flex">
      <a className="btn btn-ghost normal-case" href="https://www.linkedin.com/in/akash-singh-a57081253/"><FontAwesomeIcon
        icon={faLinkedin}
        className="fas fa-check"
        style={{ color: "grey", fontSize: 25 }}
      /></a>
      <a className="btn btn-ghost normal-case text-xl" href="https://github.com/Akash-Singh04"><FontAwesomeIcon
        icon={faGithub}
        className="fas fa-check"
        style={{ color: "grey", fontSize: 25 }}
      /></a> 
      <a className="btn btn-ghost normal-case text-xl" href="https://instagram.com/kind.of.akash"><FontAwesomeIcon
        icon={faInstagram}
        className="fas fa-check"
        style={{ color: "grey", fontSize: 25 }}
      /></a> 
      <a className="btn btn-ghost normal-case text-xl" href="https://twitter.com/Kind_Of_Akash"><FontAwesomeIcon
        icon={faTwitter}
        className="fas fa-check"
        style={{ color: "grey", fontSize: 25 }}
      /></a> 
      <a className="btn btn-ghost normal-case text-xl" href="https://www.codechef.com/users/akashsingh04"><FontAwesomeIcon
        icon={faCodepen}
        className="fas fa-check"
        style={{ color: "grey", fontSize: 25 }}
      /></a> 
  </div>
  </div>
  <div className="navbar-end">
  <div className="dropdown">
          <label className="btn btn-ghost lg:hidden swap swap-rotate">
            <input type="checkbox" />
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
              <li><a className="btn btn-ghost normal-case" href="https://www.linkedin.com/in/akash-singh-a57081253/"><FontAwesomeIcon
        icon={faLinkedin}
        className="fas fa-check"
        style={{ color: "grey", fontSize: 25 }}
      /></a></li>
              <li><a className="btn btn-ghost normal-case text-xl" href="https://github.com/Akash-Singh04"><FontAwesomeIcon
        icon={faGithub}
        className="fas fa-check"
        style={{ color: "grey", fontSize: 25 }}
      /></a> </li>
              <li><a className="btn btn-ghost normal-case text-xl" href="https://instagram.com/kind.of.akash"><FontAwesomeIcon
        icon={faInstagram}
        className="fas fa-check"
        style={{ color: "grey", fontSize: 25 }}
      /></a> </li>        
              <li><a className="btn btn-ghost normal-case text-xl" href="https://twitter.com/Kind_Of_Akash"><FontAwesomeIcon
        icon={faTwitter}
        className="fas fa-check"
        style={{ color: "grey", fontSize: 25 }}
      /></a> </li>        
              <li><a className="btn btn-ghost normal-case text-xl" href="https://www.codechef.com/users/akashsingh04"><FontAwesomeIcon
        icon={faCodepen}
        className="fas fa-check"
        style={{ color: "grey", fontSize: 25 }}
      /></a> </li>        
            </ul> 

      </div>
    
    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><a href="/">Home</a></li>
        <li><a href="/#About">About</a></li>
        <li><a href="/#Skills">Skills</a></li>
        <li><a href="/#Projects">Projects</a></li>
        <li><a href="/#Experience">Experience</a></li>
        {/* <li><a href="/#Achievements">Achievements</a></li> */}
        <li><a href="/#Volunteering">Volunteering</a></li>
        
    </ul>
    </div>
  </div>
  </div>
  )
}

export default Navbar