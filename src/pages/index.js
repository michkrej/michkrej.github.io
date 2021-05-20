import * as React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";

import Projects from "../components/Projects/projects";
import Header from "../components/Header/header";
import About from "../components/About/about";
import Seo from "../components/seo";

import bubble from "../images/bubble1.svg";
import bubble2 from "../images/bubble2.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";

import data from "../../constants";

import "../styles/index.scss";

const IndexPage = () => {
  return (
    <main>
      <Seo />
      <img src={bubble} className="bubble bubble1" alt="color splash" />
      <Header />
      <div id="start" className="intro-container">
        <div className="intro">
          <p>Hi,</p>
          <p>I'm Michelle</p>
        </div>
      </div>
      <img src={bubble2} className="bubble bubble2" alt="color spash" />
      <Projects />
      <About />
      <footer>
        <a href="mailto:michkrej@gmai.com">michkrej@gmail.com</a>
        <div className="socials">
          <OutboundLink
            href={data.github}
            target="__blank"
            rel="noopener noreferrer"
            alt="Github logo"
          >
            <img src={github} />
          </OutboundLink>
          <OutboundLink
            href={data.linkedin}
            target="__blank"
            rel="noopener noreferrer"
            alt="LinkedIn logo"
          >
            <img src={linkedin} />
          </OutboundLink>
        </div>
      </footer>
    </main>
  );
};

export default IndexPage;
