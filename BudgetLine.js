import React from 'react'
import { useState,useEffect } from 'react';

const BudgetLine = ({budget, height}) => {
    const [currHeight, setCurrHeight] = useState(0);


    
    useEffect(() => {
        let timeElapsed = 0;
        const moveLine = (ms) => {
            if(currHeight === height){
                clearInterval(interval);    
            } else {
                timeElapsed += 5;
                setCurrHeight(Math.min(height, height * timeElapsed / ms));
            }
        }
        const interval = setInterval(moveLine, 10, 300);
        return () => clearInterval(interval);
      }, []);
    
    return (
        <>
        
        <div style={{bottom:currHeight, ...budgetLineStyle}}>
            <label style={{position:'absolute', bottom:0, right:0}}>
                Budget<br/>
                <strong>${budget.toLocaleString('en')}</strong>
            </label>
        </div>
        </>
    )
}

const budgetLineStyle = {
    backgroundColor: "white",
    position:"absolute",
    height:"1px",
    width:"100%",
    alignSelf:"flex-start",
}

export default BudgetLine
