import React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";

import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";

import data from "../../../constants";

import "./footer.scss"

const Footer = () => {
  return (
      <footer>
        <a href="mailto:michkrej@gmai.com">michkrej@gmail.com</a>
        <div className="socials">
          <OutboundLink
            href={data.github}
            target="__blank"
            rel="noopener noreferrer"
            
          >
            <img src={github} alt="Github logo"/>
          </OutboundLink>
          <OutboundLink
            href={data.linkedin}
            target="__blank"
            rel="noopener noreferrer"

          >
            <img src={linkedin} alt="LinkedIn logo"/>
          </OutboundLink>
        </div>
      </footer>
  );
};

export default Footer;
