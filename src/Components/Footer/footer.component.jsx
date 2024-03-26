import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "./footer.style.css";
const Footer = () => {
  return (
    <div id="contact" className="lnk">
      <MDBFooter
        className="text-center text-white"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <MDBContainer className="pt-4">
          <section className="mb-4">
            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <a href="https://www.instagram.com/edi.weiss99/">
                <MDBIcon fab className="fa-instagram" />
              </a>
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <a href="https://www.linkedin.com/in/eduard-weiss-591a292a8/">
                <MDBIcon fab className="fa-linkedin" />
              </a>
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <a href="https://github.com/EdiW31">
                <MDBIcon fab className="fa-github" />
              </a>
            </MDBBtn>
          </section>
        </MDBContainer>

        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a className="text-dark" href="#">
            eduardweiss998@gmail.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
