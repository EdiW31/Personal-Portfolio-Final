import "./aboutme.style.css";
import me2 from "./../../assets/IMG_3114.png";

const AboutMe = () => {
  return (
    <section
      className="section about-section gray-bg section-about-me mt-5 "
      id="about-me"
    >
      <div className="container-lg px-5">
        <div className="row align-items-center justify-content-around flex-row-reverse">
          <div className="col-lg-6">
            <div className="about-text">
              <h3 className="dark-color">About me.</h3>
              <h4 className="theme-color">
                Student and passionate about programming.
              </h4>
              <p>
                I like learning about new technologies, I&apos;m very passionate
                about BlockChain and I&apos;m always looking for new challenges.
                I&apos;m a quick learner and I will try my beste in learning and
                developing new skills. I live in a small town in Romnania,
                Cisnadie which is near Sibiu. I also like working with Kids, in
                the weekends I&apos;m having with a team from Cisnadie activity
                with the kids from the city and I&apos;m also a volunteer at
                local Church.
              </p>
              <div className="btn-bar">
                <a className="px-btn theme-t" href="#">
                  Go to Top of Page
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <div className="about-img">
              <img src={me2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
