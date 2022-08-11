import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <h1 className="content is-large">Resume</h1>
        <h2 className="content is-medium">
          <strong>Education</strong>
        </h2>
        <ul>
          <li>
            March 2022-Present<br></br>Kansas University Coding Bootcamp
          </li>
          <li>
            January 2022 - Present<br></br>Johnson County Community College
          </li>
          <li>
            2006-2008<br></br>Kansas University
          </li>
          <li>
            2003-2006<br></br>Eudora High School
          </li>
        </ul>
        <br></br>
        <h2 className="content is-medium">
          <strong>Work Experience</strong>
        </h2>
        <ul>
          <li>
            2019-Present<br></br>Operator at Common Joinery Cabinets (Overland
            Park, KS)<br></br>
            <a href="https://www.commonjoinery.com/">
              www.Commonjoinery.com
            </a>{" "}
          </li>
          <li>
            2011-2019<br></br>Sales Manager at Reynolds Lawn and Leisure
            (Shawnee, KS)
          </li>
          <li>
            2008-2011<br></br>Manager at Louises West (Lawrence, KS)
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
