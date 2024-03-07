import CardComponent from "../Card Component/CardComponent";

const SectionOne = () => {
  return (
    <>
      <div className="container d-flex justify-content-around">
        {/*Left Part*/}
        <div className="m-5">
          <CardComponent
            name="Weiss Eduard"
            email="salut@gmail.com"
            img="https://i.imgur.com/G1pXs7D.jpg"
            proj={10}
          />
        </div>
        {/*Right Part*/}
      </div>
    </>
  );
};

export default SectionOne;
