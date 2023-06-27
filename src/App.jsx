import { Route, Routes } from "react-router-dom";
import Page from "./components/layout/Page";
import Home from "./pages/Home";
import ByName from "./pages/ByName";
import ByDate from "./pages/ByDate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page view={<Home />} />} />
        <Route path="/name/:name" element={<Page view={<ByName />} />} />
        <Route path="/date/:date" element={<Page view={<ByDate />} />} />
      </Routes>
    </>
  );
}

export default App;
