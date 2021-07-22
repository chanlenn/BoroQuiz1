import React from 'react'

const Legend = ({spending, income}) => {
    return (
        <div style={legendStyle}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            {/* <div className="legend-element dot spending"></div> */}
                            <div style={{...legendElementStyle, ...spendingStyle}}/>
                        </td>
                        <td>
                            <div style={legendElementStyle}>
                                Spending <br/><strong>${spending}</strong>
                            </div>
                        </td>
                        <td>
                            <div style={{...legendElementStyle, ...incomeStyle}}/>
                        </td>
                        <td>
                            <div style={legendElementStyle}>
                                Income <br/><strong>${income}</strong>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const legendStyle = {
  marginLeft:"2em"
};

const legendElementStyle = {
    flex:"25%",
    textAlign: "left",
    width:"fit-content",
};

const spendingStyle = {
    borderRadius: "0.5em",
    height:"1em",
    width:"1em",
    backgroundColor: "#428DFC"
}

const incomeStyle = {
    borderRadius: "0.5em",
    height:"1em",
    width:"1em",
    backgroundColor: "#0CE381"
}

export default Legend
