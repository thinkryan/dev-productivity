import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Gh from "./github-social.svg";
import Tw from "./twitter-social.svg";
import Li from "./linkedin-social.svg";

import "./Footer.css";

export default function Footer({ twitter, linkedin, github, twitch, youtube }) {
  return (
    <footer className="footer">
      <ul className="socials">
        {twitter ? (
          <li className="social">
            <a href="https://twitter.com/ThePrimeagen">
              <Tw />
            </a>
          </li>
        ) : null}
        {github ? (
          <li className="social">
            <a href="https://github.com/ThePrimeagen">
              <Gh />
            </a>
          </li>
        ) : null}
        {twitch ? (
          <li className="social">
            <a href="https://twitch.tv/ThePrimeagen">
              <Li />
            </a>
          </li>
        ) : null}
        {youtube ? (
          <li className="social">
            <a href="https://youtube.com/ThePrimeagen">
              <Li />
            </a>
          </li>
        ) : null}
        <li className="social">
          <div className="terms">
            <p>Content Licensed Under CC-BY-NC-4.0</p>
            <p>Code Samples and Excercise Licensed Under Apache 2.0</p>
            <p>
              Site Designed by{" "}
              <a href="https://www.alexdanielson.com/">Alex Danielson</a>
            </p>
          </div>
        </li>
      </ul>
    </footer>
  );
}
