import { Routes, Route } from "react-router-dom";
import InsideFloor from "./Components/InsideFloor";
import InsideApartament from "./Components/InsideApartament";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="App">
      {<Home />}
      <Routes>
        <Route path="/" element={''} />
        <Route path="/insidefloor/:floor/:appartament" element={<InsideApartament />} />
        <Route path="/insidefloor/:floor" element={<InsideFloor />} />
      </Routes>
    </div>
  );
}

export default App;
