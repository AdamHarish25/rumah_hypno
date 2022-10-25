import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Contents/Home";
import Articles from "./Contents/Sections/Articles";

function App() {
  return (
    <div id="App" className={`w-screen`}>
      <Routes>
        <Route path="/id" exact element={<Home language="id" />} />
        <Route path="/en" element={<Home language="en" />} />
        <Route path="Articles/*" element={<Articles language="id" />} />
        <Route path="Articles/en/*" element={<Articles language="en" />} />
        <Route path="Articles/id/*" element={<Articles language="id" />} />
        <Route path="/" element={<Home language="id" />} />
      </Routes>
    </div>
  );
}

export default App;
