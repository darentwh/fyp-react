import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Forecasting from "./pages/forecasting/Forecasting";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Masterproductionscheduling from "./pages/masterproductionscheduling/Masterproductionscheduling";
import Architecture from "./pages/architecture/Architecture";
import Ordering from "./pages/ordering/Ordering";
import Orderinghistory from "./pages/orderinghistory/Orderinghistory";
import Mrp from "./pages/mrp/mrp"
import { UserContext } from "./UserContext";
import { useState, useEffect } from "react";

const useFetch = () => {
  const [dataAPI, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect((url = "https://xkscvbyt7xcmdpibtt3olzbuti0gqbgx.lambda-url.us-east-1.on.aws/") => {
    async function fetchData(){
      const response = await fetch(url,{method:'GET'});
      const dataAPI = await response.json();
      console.log(dataAPI)
      setData(dataAPI);
      setLoading(false);
    }
    fetchData();
  }, []);
  return {dataAPI,loading};
};

function App() {
  const [overridevalue, setOverridevalue] = useState(400);
  const {dataAPI,loading} = useFetch()
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="main">
          <UserContext.Provider value ={{overridevalue, setOverridevalue,dataAPI,loading}}>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/ordering" element={<Ordering/>}/>
              <Route exact path="/orderinghistory" element={<Orderinghistory/>}/>
              <Route exact path="/forecasting" element={<Forecasting/>}/>
              <Route exact path="/mps" element={<Masterproductionscheduling/>}/>
              <Route exact path="/mrp" element={<Mrp/>}/>
              <Route exact path="/architecture" element={<Architecture/>}/>
              <Route exact path='/linkedin' component={() => { 
                window.location.href = 'https://linkedin.com/in/darentwh'; 
                return null;
              }}/>
            </Routes>
          </UserContext.Provider>
        </div>
      </div>
    </Router>
  );
}

export default App;
