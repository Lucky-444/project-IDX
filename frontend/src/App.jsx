import { useState } from "react";
import "./App.css";
import { PingComponent } from "./components/atoms/pingComponent";
import { CreateProject } from "./pages/CreateProject";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      {/* <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <PingComponent />} */}
      <Routes >
        <Route path="/" element={<CreateProject />} />
      </Routes>
    </>
  );
}

export default App;
