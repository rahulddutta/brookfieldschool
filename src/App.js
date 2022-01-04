import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./components/pages/homepage/Homepage";
import About from "./components/pages/about/About"
import Gallery from "./components/pages/gallery/Gallery";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Topbar/>
    
    </div>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/photos" element={<Gallery/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
