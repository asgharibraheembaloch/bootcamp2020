import useWebAnimations from "@wellyshen/use-web-animations";

const App = () => {
  const { ref, playState } = useWebAnimations({
    keyframes: [
      {transform: "translate(0px)"},
      {transform: "translate(500px)"},
    ],
    timing:{
      duration: 3000,
      iterations: Infinity,
      direction: "alternate"
    }
  });

  return (
    <div>      
      <div ref={ref}>
        Hello World
      </div>
    </div>
  );
};

export default App;
