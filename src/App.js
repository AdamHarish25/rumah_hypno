import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Contents/Home";
import Articles from "./Contents/Sections/Articles";

function App() {
  return (
    <div id="App" className={`w-screen`}>
      <Routes>
        <Route path="/id" exact element={<Home language="id" />} />
        <Route path="/en" element={<Home language="en" />} />
        <Route path="Articles/*" element={<Articles />} />
        <Route path="/" element={<Navigate to="../id" replace />} />
      </Routes>
    </div>
  );
}

export default App;
