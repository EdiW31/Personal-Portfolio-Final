import "./Navbar.css";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";

const MyNavbar = (props) => {
  MyNavbar.propTypes = {
    links: PropTypes.array.isRequired,
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex mt-4 mx-5  px-lg-5">
        <a className="navbar-brand fs-2" href="#">
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
                <Link
                  to={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="nav-link"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MyNavbar;
