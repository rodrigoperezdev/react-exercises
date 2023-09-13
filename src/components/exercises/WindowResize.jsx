import { useEffect, useState } from "react";
import { Header } from "../UI/Header";

export const WindowResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Header>
      <div className="row vh-100 text-center justify-content-center align-content-center">
        <h1 className="text-light">useEffect Window Resize listener</h1>
        <h3>Window width:</h3>
        <p>{width}px</p>
      </div>
    </Header>
  );
};
