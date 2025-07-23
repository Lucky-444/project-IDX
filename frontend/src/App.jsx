import { useState } from "react";
import "./App.css";
import { PingComponent } from "./components/atoms/pingComponent";
import { Routess } from "./Routes";
import { io } from 'socket.io-client';




function App() {
  const socket = io(import.meta.env.VITE_BACKEND_URL)
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      {/* <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <PingComponent />} */}
      <Routess />
    </>
  );
}

export default App;
