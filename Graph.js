import React from 'react'
import Bars from './Bars'
import moment from 'moment'
import { useState,useEffect } from 'react'
import BudgetLine from './BudgetLine'

const Graph = ({data, height, onChange, selected}) => {

    const handleChange = (index) => {
        return () => {
            onChange(index);
            setSelectedList(selectedList.map((x, ind)=> ind === index));
        }
    }
    

    const numToMon = (num) => {
        return moment().month(num-1).format("MMM").toUpperCase();
    }
    
    
    let max_amt = data.overall_budget;
    for(let item of data.spending){
        if(max_amt < item.spending){
            max_amt = item.spending;
        }
    }

    for(let item of data.income){
        if(max_amt < item.income){
            max_amt = item.income;
        }
    }

    let selectedLst = [];
    let bars = [];
    let labels = [];
    for(let i = 0; i < data.spending.length; i++){
        
        selectedLst.push(i === selected);
    }
    const [selectedList, setSelectedList] = useState(selectedLst);

    for(let i = 0; i < data.spending.length; i++){
        
        bars.push(
            <Bars spending={data.spending[i].spending/max_amt * height} income={data.income[i].income/max_amt * height}
                onChange={handleChange(i)} isSelected={selectedList[i]}/>
        );
        labels.push(
            <label onClick={handleChange(i)} style={selectedList[i] ? barsLabelSelectedStyle: barsLabelStyle}>{numToMon(data.spending[i].month)}</label>
        )
    }

    useEffect(() => {
        handleChange(data.spending.length-1);
    })
    

    return (
        <>
        
            <div style={{minHeight:height, ...spacingStyle}}>
                {bars}
                
                <BudgetLine budget={data.overall_budget} height={data.overall_budget/max_amt * height}/>
            </div>
            <div style={spacingStyle}>
                {labels}
            </div>
        </>
    )
}

const spacingStyle = {
    position:"relative",
    display:"flex",
    flex:"100%",
    flexDirection:"row",
    marginLeft:"2em",
    marginRight:"2em",
    alignItems: "flex-end",
}

const barsLabelStyle = {
    flexDirection: "column",
    height:"100%",
    alignSelf: "flex-end",
    flex:"100%",
}

const barsLabelSelectedStyle = {
    flexDirection: "column",
    height:"100%",
    alignSelf: "flex-end",
    flex:"100%",
    backgroundColor: "white",
    color: "#172041",
    borderRadius: "5px",
}

export default Graph
