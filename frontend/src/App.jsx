import { useState } from "react";
import "./App.css";
import { PingComponent } from "./components/atoms/pingComponent";
import { Routess } from "./Routes";


function App() {
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
