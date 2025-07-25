
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">MyApp</div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;