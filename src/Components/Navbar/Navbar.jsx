import "./Navbar.css";
import PropTypes from "prop-types";

const MyNavbar = (props) => {
  MyNavbar.propTypes = {
    links: PropTypes.array.isRequired,
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex mt-4 mx-5">
        <a className="navbar-brand fs-2 px-auto" href="#">
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
          className="collapse navbar-collapse justify-content-end px-auto fs-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav fs-5 ">
            {props.links.map((link, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MyNavbar;
