import "./App.css";
import Child from "./Child";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Video from "./video.mp4";
import Content from "./Content";
import useWindowDimension from "./useWindowDimension";

export default function App() {
  const [image, setImage] = useState();
  const videoRef = useRef([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImage(data[0].url);
      });
    window.addEventListener("resize", resize);
    function resize() {
      console.log("Window resized");
    }
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const addElementToVideoRef = (el) => {
    const elNotInVideoRef = !videoRef.current.includes(el);
    if (el && elNotInVideoRef) {
      videoRef.current.push(el);
    }
  };

  const tab = useMemo(() => {
    return [1, 2, 3, 4, 5];
  }, []);

  const foo = useCallback(() => {
    console.log("Click!");
  }, []);

  const dimension = useWindowDimension();
  console.log(dimension);

  return (
    <div className="App">
      <h1>Smol cat picture ^-^</h1>
      {image && <img src={image} alt="cat" style={{ width: "500px" }} />}
      <hr />
      <Child />
      <hr />
      <h2>Video</h2>
      <video ref={addElementToVideoRef} autoPlay controls muted height="700">
        <source src={Video} type="video/mp4" />
      </video>

      <video ref={addElementToVideoRef} autoPlay controls muted height="700">
        <source src={Video} type="video/mp4" />
      </video>

      <video ref={addElementToVideoRef} autoPlay controls muted height="700">
        <source src={Video} type="video/mp4" />
      </video>
      <hr />
      <h2>Content</h2>
      <Content>
        <h1>Product title 1</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </Content>
      <Content num={tab} foo={foo} />
      <hr />
      <h1>Created hook</h1>
    </div>
  );
}
