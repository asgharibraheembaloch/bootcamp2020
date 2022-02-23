import useWebAnimations, { bounce, rotateOut,backInLeft } from "@wellyshen/use-web-animations";

import React from 'react'

function App() {
  const { ref, playState, getAnimation } = useWebAnimations({
    /* keyframes: {
      transform: "translateX(500px)", // Move by 500px
      background: ["red", "blue", "green"], // Go through three colors
    },
    animationOptions: {
      delay: 500, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: 2, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    }, */
    ...backInLeft
  });
  return (
    <div>
      <div ref={ref} style={{ background: "red" ,width: "100px", height: "100px" }}>
        hello word {playState}
      </div>
      <br/>
      <button onClick={()=>{getAnimation().play()}}>Play</button>
      <button onClick={()=>{getAnimation().pause()}}>Pause</button>
    </div>
  );
}

export default App


