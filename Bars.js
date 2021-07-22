import React from 'react'
import Bar from './Bar'

const Bars = ({spending, income, onChange}) => {

    const handleChange = () => {
        onChange()
    }
    
    
    return (
        <div style={barsStyle} onClick={handleChange}>
            <div style={doubleBarsStyle}>
                <Bar type="spending" height={spending}/>
                <Bar type="income" height={income}/>
            </div>
        </div>
    )
}

const barsStyle = {
    flexDirection: "column",
    height:"100%",
    alignSelf: "flex-end",
    flex:"100%",
}

const doubleBarsStyle = {
    display:"flex",
    flexDirection: "row",
    flex:"20%",
    alignItems: "center",
    justifyContent: "center",
  }

export default Bars
