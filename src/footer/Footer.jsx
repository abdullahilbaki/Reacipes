import React from "react";
import githubIcon from "../assets/github_icon.svg";

const Footer = () => {
  return (
    <div>
      <footer className="mt-20 footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid sm:grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover" href="#recipes">
            Recipes
          </a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://github.com/abdullahilbaki/Reacipes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="github icon" className="w-8 h-8" />
            </a>
          </div>
        </nav>
        <aside>
          <p>Built with ❤️ by Abdullahil Baki • © {new Date().getFullYear()}</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
