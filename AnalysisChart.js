import React from 'react'
import { useState } from 'react';
import moment from 'moment'
import Legend from './Legend';
import Graph from './Graph';

/**
 * TODO: Add numbers to bar chart
 */

const AnalysisChart = ({data}) => {
    const [selectedInd, setSelectedInd] = useState(data.spending.length-1);

    const numToMonth = (num) => {
        return moment().month(num).format("MMMM");
    }

    const handleChange = (index) => {
        setSelectedInd(index);
    }

    const compare = (a, b) => {
        if(a.month < b.month){
            return -1;
        } else if(a.month > b.month) {
            return 1;
        }
        return 0;
    }
    data.spending.sort(compare);
    data.income.sort(compare);

    return (
        <div style={analysisChartStyle}>
            <h2 style={monthHeaderStyle}>{numToMonth(data.spending[selectedInd].month-1)}</h2>
            <Legend spending={data.spending[selectedInd].spending} income={data.income[selectedInd].income}/>
            <Graph data={data} height={240} onChange={handleChange} selected={selectedInd}/>
        </div>
    )
}

const analysisChartStyle = {
    display:"flex",
    flexDirection:"column",
    backgroundColor: "#172041",
}

const monthHeaderStyle = {
    flex: "25%",
    color: "white",
    textAlign: "left",
    marginLeft: '2em'
  }

export default AnalysisChart
