import React from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Greetings from "./components/Greetings";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const User = {
  firstName: "John",
  lastName: "Tyler",
  city: "NY",
  Area: "XYZ",
};

const btnStyle = {
  color: "red",
  backgroundColor: "silver",
  outline: 0,
  border: "5px solid black",
};

const App = () => {
  const [user, setUser] = useState(User);
  return (
    <div className="container">
      <h1>{user.firstName}</h1>
      <button
        className="btn btn-danger"
        // style={btnStyle}
        // style={{
        //   color: "red",
        //   backgroundColor: "silver",
        //   outline: 0,
        //   border: '5px solid black',
        // }}
        onClick={() =>
          setUser((prevState) => ({
            firstName: "James",
            lastName: "John",
            city: "NewYork",
            Area: prevState.Area,
          }))
        }
      >
        Update firstName
      </button>
      <Home user={user} />

      <Greetings
        firstName={user.firstName}
        lastName={user.lastName}
        city={user.city}
        Area={user.Area}
      />
      <Header />
      <Footer />
    </div>
  );
};

export default App;
