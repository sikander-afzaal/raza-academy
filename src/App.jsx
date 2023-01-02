import { Route, Routes } from "react-router-dom";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Landing from "./Pages/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Landing />} path="/" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
