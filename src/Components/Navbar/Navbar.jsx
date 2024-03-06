import "./Navbar.css";
const MyNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex mt-4 mx-5">
        <a className="navbar-brand fs-2 px-5" href="#">
          <span>W</span>eiss Eduard
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end px-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav fs-5 ">
            <li className="nav-item">
              <a
                className="nav-link text-decoration-none hover:text-decoration-underline"
                href="#"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-decoration-none hover:text-decoration-underline"
                href="#"
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-decoration-none hover:text-decoration-underline"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MyNavbar;
