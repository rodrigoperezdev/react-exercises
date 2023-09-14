import { Link } from "react-router-dom";
import { Header } from "../UI/Header";

export const App = () => {
  return (
    <>
      <Header>
        <main className="front-page">
          <div className="pt-5">
            <div className="row">
              <h1>React exercises using multiple hooks</h1>
              <p>By: Rodrigo Perez | Web developer</p>
            </div>
            <div className="row my-3">
              <p>
                Down below you can find a list of exercises using{" "}
                <strong>React with Javascript,</strong> multiple hooks (and some
                other react things). Obviously ui/ux design kept pretty simple
                since I didn't work along a designer. I used{" "}
                <strong>Bootstrap 5</strong> to make the design easier and
                faster.
                <br />
                <br />
                Feel free to use them on your own as a way of practicing what
                you just learn and contact me if you think this project could be
                optimized without turning it to a more complex project since
                it's made by (at least at the time I did it) and for beginners.
                <br />
                Routing is made with <strong>react router dom</strong> and you
                can find the code in this public Github link:
              </p>
            </div>
          </div>
          <section className="front-page__menu py-5">
            <div className="row justify-content-center">
              <Link
                className="col-10 col-md-3 front-page__menu--card"
                to={"counter"}
              >
                <div className="d-flex flex-column">
                  <span className="front-page__menu--bg"></span>
                  <span className="front-page__menu--bg_hover"></span>
                  <h4>Use state counter exercise</h4>
                  <p>
                    <strong>Made in:</strong> March 2023
                  </p>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </div>
              </Link>
              <Link
                className="col-10 col-md-3 front-page__menu--card"
                to={"use-effect"}
              >
                <div className="d-flex flex-column">
                  <span className="front-page__menu--bg"></span>
                  <span className="front-page__menu--bg_hover"></span>
                  <h4>Use effect form validation</h4>
                  <p>
                    <strong>Made in:</strong> March 2023
                  </p>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </div>
              </Link>
              <Link
                className="col-10 col-md-3 front-page__menu--card"
                to={"use-effect-timer"}
              >
                <div className="d-flex flex-column">
                  <span className="front-page__menu--bg"></span>
                  <span className="front-page__menu--bg_hover"></span>

                  <h4>Use effect chronometer</h4>
                  <p>
                    <strong>Made in:</strong> March 2023
                  </p>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </div>
              </Link>
            </div>
            <div className="row justify-content-center my-0 my-sm-4">
              <Link
                className="col-10 col-md-3 front-page__menu--card"
                to={"use-effect-window-resize"}
              >
                <div className="d-flex flex-column">
                  <span className="front-page__menu--bg"></span>
                  <span className="front-page__menu--bg_hover"></span>

                  <h4>Use effect window resize exercise</h4>
                  <p>
                    <strong>Made in:</strong> March 2023
                  </p>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </div>
              </Link>
              <Link
                className="col-10 col-md-3 front-page__menu--card"
                to={"use-reducer-todo-list"}
              >
                <div className="d-flex flex-column">
                  <span className="front-page__menu--bg"></span>
                  <span className="front-page__menu--bg_hover"></span>

                  <h4>Use reducer Todo list</h4>
                  <p>
                    <strong>Made in:</strong> March 2023
                  </p>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </div>
              </Link>
              <Link
                className="col-10 col-md-3 front-page__menu--card"
                to={"use-reducer"}
              >
                <div className="d-flex flex-column">
                  <span className="front-page__menu--bg"></span>
                  <span className="front-page__menu--bg_hover"></span>

                  <h4>Use reducer counter exercise</h4>
                  <p>
                    <strong>Made in:</strong> March 2023
                  </p>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </div>
              </Link>
            </div>
            <div className="row justify-content-center my-0 my-sm-4">
              <Link
                className="col-10 col-md-3 front-page__menu--card"
                to={"use-ref"}
              >
                <div className="d-flex flex-column">
                  <span className="front-page__menu--bg"></span>
                  <span className="front-page__menu--bg_hover"></span>

                  <h4>Use ref focus exercise</h4>
                  <p>
                    <strong>Made in:</strong> March 2023
                  </p>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </div>
              </Link>
              <Link
                className="col-10 col-md-3 front-page__menu--card"
                to={"use-context"}
              >
                <div className="d-flex flex-column">
                  <span className="front-page__menu--bg"></span>
                  <span className="front-page__menu--bg_hover"></span>
                  <h4>Use context theme toggler</h4>
                  <p>
                    <strong>Made in:</strong> March 2023
                  </p>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </div>
              </Link>
              <Link
                className="col-10 col-md-3 front-page__menu--card"
                to={"use-memo"}
              >
                <div className="d-flex flex-column">
                  <span className="front-page__menu--bg"></span>
                  <span className="front-page__menu--bg_hover"></span>

                  <h4>Use memo factorial calculator</h4>
                  <p>
                    <strong>Made in:</strong> March 2023
                  </p>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </div>
              </Link>
            </div>
            <div className="row justify-content-center my-0 my-sm-4">
              <Link
                className="col-10 col-md-3 front-page__menu--card"
                to={"redux"}
              >
                <div className="d-flex flex-column">
                  <span className="front-page__menu--bg"></span>
                  <span className="front-page__menu--bg_hover"></span>
                  <h4>Redux Weather API app</h4>
                  <p>
                    <strong>Made in:</strong> April 2023
                  </p>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </div>
              </Link>
            </div>
          </section>
        </main>
      </Header>
    </>
  );
};
