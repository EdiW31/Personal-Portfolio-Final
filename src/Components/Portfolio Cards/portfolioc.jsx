import "./portfolio.scss";
import extensionImage from "./../../assets/extension.png";
import tetris from "./../../assets/tetris.png";
import rolodex from "./../../assets/rolodex.png";
import bikePro from "./../../assets/Screenshot 2024-08-13 at 11.02.08.png";
const portfolioc = () => {
  return (
    <div className="container-lg portfoliocard px-5 mt-5" id="portfolio">
      <h1 className="color_and_pos m-3">Portfolio.</h1>
      <article className="postcard light blue">
        <a
          className="postcard__img_link"
          href="https://github.com/EdiW31/online-shop-fe-bike-pro"
        >
          <img className="postcard__img" src={bikePro} alt="Image Title" />
        </a>
        <div className="postcard__text t-dark">
          <h1 className="postcard__title blue">
            <a href="https://github.com/EdiW31/Chrome-Tab-Saver-Extension">
              BikePro.
            </a>
          </h1>
          <div className="postcard__subtitle small"></div>
          <div className="postcard__bar"></div>
          <div className="postcard__preview-txt">
            Bike Pro is an online Shop I developed using technologies like
            NestJs and React, with TypeScript. This has been one of the biggest
            projects of mine because it has been a challenge for me, I had no
            idea what NestJs was or anything but in the end I finished the
            project and now I know A LOT more then before, I know new
            technologies and I developed a new way of thinking and I also
            learned how to debug more eficiently then before. I got the help I
            needed from the firm where I went as an intern, they helped me a
            lot. I created an online shop abt bikes where you can add to
            favorite and do many things like checkout with the Stripe
            techonolgy, I created an Admin Panel using the Guards from NestJs
            and I can say that the Frontend Design turned out fine, done with
            Tailwind Css.
          </div>
          <ul className="postcard__tagbox">
            <li className="tag__item play blue">
              <a href="https://github.com/EdiW31/Chrome-Tab-Saver-Extension">
                GitHub Code
              </a>
            </li>
          </ul>
        </div>
      </article>
      <article className="postcard light blue">
        <a
          className="postcard__img_link"
          href="https://github.com/EdiW31/Tetris-Game-App"
        >
          <img className="postcard__img" src={tetris} alt="Image Title" />
        </a>
        <div className="postcard__text t-dark">
          <h1 className="postcard__title blue">
            <a href="#">Tetris Game</a>
          </h1>
          <div className="postcard__subtitle small"></div>
          <div className="postcard__bar"></div>
          <div className="postcard__preview-txt">
            Tetris Game made as a project for OOP class. In this project i
            learned how to use classes and objects in Java. This was my first
            &quot;bigger&quot; project and I m really happy with the results.
            Click the button below to check the code on GitHub.
          </div>
          <ul className="postcard__tagbox">
            <li className="tag__item play blue">
              <a href="https://github.com/EdiW31/Tetris-Game-App">
                GitHub Code
              </a>
            </li>
          </ul>
        </div>
      </article>
      {/*Seccond Project*/}
      <article className="postcard light blue">
        <a
          className="postcard__img_link"
          href="https://github.com/EdiW31/Chrome-Tab-Saver-Extension"
        >
          <img
            className="postcard__img"
            src={extensionImage}
            alt="Image Title"
          />
        </a>
        <div className="postcard__text t-dark">
          <h1 className="postcard__title blue">
            <a href="https://github.com/EdiW31/Chrome-Tab-Saver-Extension">
              Google Extension
            </a>
          </h1>
          <div className="postcard__subtitle small"></div>
          <div className="postcard__bar"></div>
          <div className="postcard__preview-txt">
            This was my first JavaScript project in which I created a Google
            Extension that saves the current tab and allows you to open it
            later. This project was a great way to learn JavaScript and how to
            use it in real life projects. Click the button below to check the
            code on GitHub.
          </div>
          <ul className="postcard__tagbox">
            <li className="tag__item play blue">
              <a href="https://github.com/EdiW31/Chrome-Tab-Saver-Extension">
                GitHub Code
              </a>
            </li>
          </ul>
        </div>
      </article>
      {/*Third Project*/}
      <article className="postcard light blue">
        <a
          className="postcard__img_link"
          href="https://github.com/EdiW31/First-React-App"
        >
          <img className="postcard__img" src={rolodex} alt="Image Title" />
        </a>
        <div className="postcard__text t-dark">
          <h1 className="postcard__title blue">
            <a href="#">Monster Rolodex</a>
          </h1>
          <div className="postcard__subtitle small"></div>
          <div className="postcard__bar"></div>
          <div className="postcard__preview-txt">
            Monster Rolodex is a React project that I made while learning React.
            This is my first time understanding React and how to use it. This
            project was a great way to learn React and how to use it in real
            life projects. Click the button below to check the code on GitHub.
          </div>
          <ul className="postcard__tagbox">
            <li className="tag__item play blue">
              <a href="https://github.com/EdiW31/First-React-App">
                GitHub Code
              </a>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default portfolioc;
