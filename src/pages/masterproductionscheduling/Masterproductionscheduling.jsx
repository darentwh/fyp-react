import React from 'react'
import { useEffect, useState } from "react";
import './Masterproductionscheduling.css'
import Chart from "../../components/chart/Chart"

export default function Masterproductionscheduling(){  
  const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect((url = "https://xxdzzkf7xczg65izs37npoc3c40biikv.lambda-url.us-east-1.on.aws/") => {
      async function fetchData(){
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setData(data);
        setLoading(false);
      }
      fetchData();
    }, []);
    return {data,loading};
  }
  const {data, loading} = useFetch()
    return(
      <div className="mps">
        results:
        <br/>
        {loading ? <div>Loading...</div> : <Chart value={data}/>}
      </div>
    )
}