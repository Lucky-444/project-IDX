import "./App.css";
import { Routess } from "./Routes";
// import { io } from 'socket.io-client';




function App() {
  // const socket = io(import.meta.env.VITE_BACKEND_URL)

  return (
    <>
      {/* <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <PingComponent />} */}
      <Routess />
    </>
  );
}

export default App;
