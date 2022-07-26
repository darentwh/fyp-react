import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Forecasting from "./pages/forecasting/Forecasting"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="main">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/forecasting" element={<Forecasting/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
