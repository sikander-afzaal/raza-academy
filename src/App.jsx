import { Route, Routes } from "react-router-dom";
import Header from "./Layout/Header";
import Landing from "./Pages/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Landing />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
