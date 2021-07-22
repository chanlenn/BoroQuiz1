import React from 'react'
import { useState, useEffect } from 'react';

const Bar = ({height, type}) => {

    const [currHeight, setCurrHeight] = useState(0);
    const color = type === "income" ? income:spending;
    
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
            <div style={{height: currHeight, ...barStyle, ...color}}/>
        </>
    )
}

const barStyle = {
    display:"inline-block",
    alignSelf: "flex-end",
    marginLeft:"5px",
    borderRadius: "0.5em",
    width:"1em",
}

const spending = {
    backgroundColor: "#428DFC",
}
  
const income = {
    backgroundColor: "#0CE381",
}

export default Bar
