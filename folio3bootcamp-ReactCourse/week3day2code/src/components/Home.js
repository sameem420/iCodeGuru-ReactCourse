import React from "react";
import "./Home.css";

function Home({ user }) {
  return (
    <div id="home" className="bg-dark text-info">
      <h1>User is from {user.city}</h1>
    </div>
  );
}

export default Home;
