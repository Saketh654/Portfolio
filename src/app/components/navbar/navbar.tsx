import Link from "next/link";
import "./navbar.css";
function Navbar() {
  return (
    <div id="nav">
      <div id="name">
        <p>Nagasaketh Chintaluri</p>
      </div>
      <div id="menu">
        <Link href="/">Home</Link>
        <Link href="/Project">Projects</Link>
        <a href="https://saketh654.blogspot.com/">Blog</a>
      </div>
    </div>
  );
}

export default Navbar;
