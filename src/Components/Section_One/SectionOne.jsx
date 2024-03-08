import CardComponent from "../Card Component/CardComponent";
import FancyButton from "../../Components Small/FancyButton";
import "./SectionOne.css";

const SectionOne = () => {
  return (
    <>
      <div className="container d-lg-flex justify-content-center sectoin-one">
        {/*Left Part*/}
        <div className="m-5 left-part-sone">
          <CardComponent
            name="Weiss Eduard"
            email="salut@gmail.com"
            img="https://i.imgur.com/G1pXs7D.jpg"
            proj={10}
          />
        </div>
        {/*Right Part*/}
        <div className="m-5 d-flex flex-column pt-5 justify-content-center align-items-center">
          {/*Top Part*/}
          <h1 className="fs-1 text1">Hello, I&apos;m</h1>
          <h1 className="fs-2 text">Weiss Eduard.</h1>
          {/*Middle Part*/}
          <div className="d-flex align-items-center mt-4 flex-column">
            <FancyButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
