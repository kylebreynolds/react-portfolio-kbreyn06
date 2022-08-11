import React from "react";


function About() {
  return (
    <div>
      <p className="content is-large">About Me</p>

      <img class = "profile-pic" alt="profile-pic" src={require('../assets/profilepic.jpg')} />

      <p className="content is-italic mt-4">
        My Name is Kyle Reynolds and I am studying to become a full stack developer. 
      </p>
    </div>
  );
}

export default About;
