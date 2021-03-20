import React from 'react'
import '../styles/general.css'
import '../styles/bottomAxis.css'

const BottomAxis = ({ xScale, innerHeight, tickFormat, tickOffset = 3 }) => 
    xScale.ticks().map((tickValue) => {
      return (
        <g
          className = "tick"
          transform = {`translate(${xScale(tickValue)},0)`}
          key = {tickValue}
        >
          <line                           
            y2 = {innerHeight}
            stroke = "#C0C0BB"
          />
          <text 
            style = {{textAnchor: 'middle'}}
            y = {innerHeight + tickOffset}
            dy = ".71em"
          >
            {tickFormat(tickValue)}
          </text>
        </g>
      )
    })

export default BottomAxis
