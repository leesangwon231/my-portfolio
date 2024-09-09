import React from 'react';
import "./Header.css"
const Header = () => {
  return (
    <div className={"header_header"}>
        <div className={"header_content"}>
            <div className={"header_header-logo"}>231's Portfolio</div>
            <div className={"header_header-navigator"}>
                <ul>
                    <li>About me</li>
                    <li>Skills</li>
                    <li>Archiving</li>
                    <li>Projects</li>
                    <li>Career</li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Header;