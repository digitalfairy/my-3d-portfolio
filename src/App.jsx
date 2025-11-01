import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5] }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
      <p className="text-green-900 italic border">Hello World!</p>
     </>
  );
}

export default App;
