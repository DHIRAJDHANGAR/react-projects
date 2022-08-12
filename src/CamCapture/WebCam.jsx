import React from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => (
  <Webcam
    audio={false}
    screenshotFormat="image/jpeg"
    width={"200px"}
    height={"200px"}
  />
);
export default WebcamComponent;
