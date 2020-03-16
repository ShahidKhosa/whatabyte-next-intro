import React from "react";
import Webcam from "react-webcam";
 
const videoConstraints = {
    width: 415,
    height: 310,
    facingMode: "user"
  };
   
  const WebcamCapture = (props) => {

    const webcamRef = React.useRef(null);
   
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);
      },
      [webcamRef]
    );
   
    return (
      <>
        <Webcam
          audio={false}
          height={props.height}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={props.width}
          videoConstraints={videoConstraints}
        />
        <button className="take-photo-button" onClick={capture}>Capture photo</button>
      </>
    );
  };

export default WebcamCapture;
