import React from "react";
import auth from "../auth";
import { useHistory } from "react-router-dom";

function LandingPage() {
  let history = useHistory();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>This is landing page</h2>
      <button
        onClick={() => {
          auth.login(() => {
            history.push("/about");
          });
        }}
      >
        Login
      </button>
    </div>
  );
}

export default LandingPage;
