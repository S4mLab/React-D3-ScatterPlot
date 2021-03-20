import React from 'react'
import '../styles/marks.css'

const Marks = ({ dataArray, xScale, yScale, xValue, yValue, circleRadius }) =>

    dataArray.map((aDataObj, index) => (
      <circle
        key = {index} 
        className = "mark"        
        cx = {xScale(xValue(aDataObj))}
        cy = {yScale(yValue(aDataObj))}
        r = {circleRadius}
      >
        <title> {`${xValue(aDataObj)}, ${yValue(aDataObj)}`} </title>
      </circle>
    ))

export default Marks