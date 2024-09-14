import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({historicalData}) => {

  const [data,setData] = useState([["Date","Prices"]]);

  useEffect(()=>{
       let dataCopy = [["Date","Prices"]];
       if(historicalData.prices){
        
       }
  },[historicalData])
 
  return (
    <div>

    </div>
  )
}

export default LineChart;