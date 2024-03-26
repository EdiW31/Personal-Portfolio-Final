import "./FancyButton.css";
const FancyButton = () => {
  return (
    <div className="container-fbtn">
      <button className="learn-more-fbtn">
        <a href="#about-me">
          <span className="circle-fbtn" aria-hidden="true">
            <span className="icon-fbtn arrow-fbtn"></span>
          </span>
          <span className="button-text-fbtn">Learn More</span>
        </a>
      </button>
    </div>
  );
};

export default FancyButton;
