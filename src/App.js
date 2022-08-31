import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Forecasting from "./pages/forecasting/Forecasting";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Masterproductionscheduling from "./pages/masterproductionscheduling/Masterproductionscheduling";
import Architecture from "./pages/architecture/Architecture";
import Ordering from "./pages/ordering/Ordering";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="main">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/ordering" element={<Ordering/>}/>
            <Route exact path="/forecasting" element={<Forecasting/>}/>
            <Route exact path="/mps" element={<Masterproductionscheduling/>}/>
            <Route exact path="/architecture" element={<Architecture/>}/>
            <Route exact path='/linkedin' component={() => { 
              window.location.href = 'https://linkedin.com/in/darentwh'; 
              return null;
            }}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
