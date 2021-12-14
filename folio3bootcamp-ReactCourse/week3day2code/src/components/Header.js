import "./Header.css";

function Header(props) {
  console.log("Header props ", props);
  return (
    <div id="header" className="bg-primary">
      <h1>Header Component</h1>
    </div>
  );
}

export default Header;
