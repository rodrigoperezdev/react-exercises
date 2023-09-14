import { Header } from "../UI/Header";
import { Link } from "react-router-dom";

export const UseContext = () => {
  return (
    <>
      <Header>
        <div className="container-fluid">
          <div className="row text-center  vh-100 align-content-center align-items-center">
            <h1>Use context dark/light theme toggler.</h1>
            <p>
              So there is in fact nothing to see here but the actual button
              working (you can find it in the top right position of your
              screen). A pretty standard theme toggler, the idea is to store the
              dark/light mode user preference in the global context and provide
              it through the application, so you don't need to send props to
              children and grandchildren.
              <br />
              <br />
              <strong>Use memo hook</strong> allow us to manage state globally.
              Context is usually nested in the highest parent component, so you
              can pass the global state as a prop through each nested component.
              <br />
              <br />
            </p>
            <p>
              Read more:{" "}
              <a href="https://es.react.dev/reference/react/useContext">
                https://es.react.dev/reference/react/useContext
              </a>
              <br />
              <br />
              You can read the actual code in my GitHub repository:{" "}
              <a href="https://github.com/rodrigoperezdev/react-exercises">
                https://github.com/rodrigoperezdev/react-exercises
              </a>
            </p>
            <Link to={"/"}>
              <button className="btn mt-4">Go back</button>
            </Link>
          </div>
        </div>
      </Header>
    </>
  );
};
