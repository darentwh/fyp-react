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
import 'trendline';

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

function getProductList(startDate) {
  const dateList = [];
  const startDateObj = new Date(startDate);
  
  // Loop through the next 7 months
  for (let i = 0; i < 7; i++) {
    // Calculate the year and month of the next month
    var year = startDateObj.getFullYear();
    var month = startDateObj.getMonth() + i + 1;
    
    // If the month is greater than 12, adjust the year and month accordingly
    if (month > 12) {
      year++;
      month -= 12;
    }
    
    // Pad the month with a leading zero if necessary
    const monthStr = month.toString().padStart(2, '0');
    
    // Add the year and month to the product list
    dateList.push(`${year}-${monthStr}`);
  }
  
  return dateList;
}

function App() {
  const [overridevalue1, setOverridevalue1] = useState(400);
  const [overridevalue2, setOverridevalue2] = useState(400);
  const [overridevalue3, setOverridevalue3] = useState(400);
  const [overridevalue4, setOverridevalue4] = useState(400);
  const [overridevalue5, setOverridevalue5] = useState(400);
  const [overridevalue6, setOverridevalue6] = useState(400);
  const [overridevalue7, setOverridevalue7] = useState(400);
  const [dateList, setdateList] = useState([]);
  const {dataAPI,loading} = useFetch()
  useEffect(() => {
    if(dataAPI !== null){
      var keys = Object.keys(dataAPI)
      var values = Object.values(dataAPI)
      const createTrend = require('trendline');
      const LRdata = [
        { y: values[0], x: 1 },
        { y: values[1], x: 2 },
        { y: values[2], x: 3 },
        { y: values[3], x: 4 },
        { y: values[4], x: 5 },
        { y: values[5], x: 6 },
        { y: values[6], x: 7 },
        { y: values[7], x: 8 },
        { y: values[8], x: 9 },
        { y: values[9], x: 10 },
        { y: values[10], x: 11 },
        { y: values[11], x: 12 },
      ];
      const trend = createTrend(LRdata, 'x', 'y')
      console.log(trend.calcY(12))
      setdateList(getProductList(keys[12]))
      console.log(dateList)
      setOverridevalue1(Math.round(trend.calcY(12)))
      setOverridevalue2(Math.round(trend.calcY(13)))
      setOverridevalue3(Math.round(trend.calcY(14)))
      setOverridevalue4(Math.round(trend.calcY(15)))
      setOverridevalue5(Math.round(trend.calcY(16)))
      setOverridevalue6(Math.round(trend.calcY(17)))
      setOverridevalue7(Math.round(trend.calcY(18)))
    }},[dataAPI,dateList])
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="main">
          <UserContext.Provider value ={{
            overridevalue1, setOverridevalue1,
            overridevalue2, setOverridevalue2,
            overridevalue3, setOverridevalue3,
            overridevalue4, setOverridevalue4,
            overridevalue5, setOverridevalue5,
            overridevalue6, setOverridevalue6,
            overridevalue7, setOverridevalue7,
            dateList, setdateList,
            dataAPI,loading}}>
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
