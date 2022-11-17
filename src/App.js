import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [4, -2, 6],
      }}
    >
      <Experience />
    </Canvas>
  );
}

export default App;
