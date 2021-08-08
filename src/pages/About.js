import React from "react";
import { useHistory } from "react-router";

const About = () => {
  const history = useHistory();

  return (
    <div>
      <h2>This is about component</h2>
      <button onClick={() => history.push("/")}>Go Home Page</button>
    </div>
  );
};

export default About;
