import "../../styles/components/Navbar/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar" data-aos="fade-top">
        <span className="logo">Declan</span>
        <ul>
          <li>
            <a href="#" className="home">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
