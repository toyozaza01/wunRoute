import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Menu from "./components/Menu";
import PageNotFound from "./components/PageNotFound";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
