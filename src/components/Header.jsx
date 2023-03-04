import logo from "./React-icon.svg.png";

function Header() {
  return (
    <header className="hdr">
      <nav className="nav">
        <div className="logo2">
          <img src={logo} className="logo" />
          <p>ReactFacts</p>
        </div>
        <p className="side-item">React Course - Project 1</p>
      </nav>
    </header>
  );
}

export default Header;
