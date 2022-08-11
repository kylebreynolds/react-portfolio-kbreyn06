import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Smart Book",
    image: '../assets/smartbook-logo.png',
    repo: "https://github.com/kylebreynolds/smart-book",
    live: "https://smartest-book.herokuapp.com/",
  },
  {
    id: 1,
    title: "Travel Safe",
    image: "../assets/smartbook-logo.png",
    repo: "https://github.com/kylebreynolds/travel-safe",
    live: "https://kylebreynolds.github.io/travel-safe/",
  }
 
];

function Portfolio() {
  return (
    <div>
      <p className="content is-large">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;