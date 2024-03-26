import "./CardComponent.css";
import PropTypes from "prop-types";
const CardComponent = (props) => {
  // Props:
  CardComponent.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    proj: PropTypes.number.isRequired,
  };

  return (
    <>
      <div className="section1">
        <div className="container d-flex justify-content-around mt-1">
          <div className="card">
            <div className="top-container">
              <img
                src={props.img}
                className="img-fluid profile-image"
                width="70"
              />

              <div className="ml-3">
                <h5 className="name">{props.name}</h5>
                <p className="p">Student</p>
              </div>
            </div>
            <div className="middle-container d-flex justify-content-around align-items-center mt-3 p-2">
              <div className="dollar-div">
                <div className="round-div">
                  <i className="fa-solid fa-diagram-project"></i>
                </div>
              </div>
              <div className="d-flex flex-column text-right mr-2">
                <span className="current-balance">Done Projects</span>
                <span className="amount">{props.proj}</span>
              </div>
            </div>
            <div className="recent-border mt-4">
              <span className="recent-orders">Recent projects:</span>
            </div>
            <div className="wishlist-border pt-2">
              <span className="wishlist">Tetris</span>
            </div>
            <div className="fashion-studio-border pt-2">
              <span className="fashion-studio">React App</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
