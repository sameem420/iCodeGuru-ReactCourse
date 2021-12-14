import React from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Greetings from "./components/Greetings";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [text, setText] = useState("");
  return (
    <div className="container">
      <div className="mt-5">
        <label className="form-label">Enter some Data</label>
        <input
          type="text"
          className="form-control"
          onChange={(event) => setText(event.target.value)}
        />
        <button
          className="btn btn-success mt-2"
          onClick={() => setText("TEXT")}
        >
          Set Text
        </button>
      </div>
      <h1>{text}</h1>
    </div>
  );
};

// const User = {
//   firstName: "John",
//   lastName: "Tyler",
//   city: "NY",
//   Area: "XYZ",
// };

// const redStyle = {
//   color: "white",
//   backgroundColor: "red",
// };

// const blueStyle = {
//   color: "white",
//   backgroundColor: "blue",
// };

// const App = () => {
//   const [user, setUser] = useState(User);
//   const [flag, setFlag] = useState(false);
//   // const data = flag && "This data is to be conditionally rendered";
//   // flag === "iCodeGuru" ? "btn btn-success" : "";
//   if (flag) {
//     return (
//       <>
//         <button className="btn btn-info" onClick={() => setFlag(false)}>
//           Change Flag
//         </button>
//         <Header />
//         <Footer />
//       </>
//     );
//   } else {
//     return (
//       <>
//         <h1>{user.firstName}</h1>
//         <button
//           // className={className}
//           // style={flag ? redStyle : blueStyle}
//           onClick={
//             () => setFlag(true)
//             // setUser((prevState) => ({
//             //   firstName: "James",
//             //   lastName: "John",
//             //   city: "NewYork",
//             //   Area: prevState.Area,
//             // }))
//           }
//         >
//           Update firstName
//         </button>
//         <Home user={user} />
//         <Greetings
//           firstName={user.firstName}
//           lastName={user.lastName}
//           city={user.city}
//           Area={user.Area}
//         />
//         <Header />
//         <Footer />
//       </>
//     );
//   }
// };

export default App;
