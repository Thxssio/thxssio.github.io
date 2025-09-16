import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../Assets/loading.json";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      {props.load && (
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          className="lottie-centered"
          style={{ width: 200, height: 200 }}
        />
      )}
    </div>
  );
}

export default Pre;
