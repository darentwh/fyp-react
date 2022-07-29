import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import './Masterproductionscheduling.css'

export default function Masterproductionscheduling(){
    const [fetchedData, setFetchedData] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const data = await axios.get(
          "https://xxdzzkf7xczg65izs37npoc3c40biikv.lambda-url.us-east-1.on.aws/"
        );
        setFetchedData(data);
      };
      getData();
    }, []);

    return(
        <div className="mps">
            results:
            <br/>{fetchedData.data}
        </div>
    )
}