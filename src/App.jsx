import React from 'react'
import './styles/App.css'
import './styles/general.css'
import { scaleLinear, extent, format } from 'd3'

import LoadData from './LoadData'
import BottomAxis from './components/BottomAxis'
import LeftAxis from './components/LeftAxis'
import Marks from './components/Marks'

const App = () => {


  const dataArray = LoadData()

  const widthSVG = 960
  const heightSVG = 500
  const margin = { top: 20, right: 30, bottom: 70, left:90 }

  const xAxisLabelOffset = 50
  const yAxisLabelOffset = 40
  const tickOffset = 5

  const innerWidth = widthSVG - margin.right - margin.left
  const innerHeight = heightSVG - margin.top - margin.bottom

  const xValue = aDataObj => aDataObj.sepal_length
  const xAxisLabel = "Sepal Length"
  
  const yValue = aDataObj => aDataObj.sepal_width
  const yAxisLabel = "Sepal Width"

  const circleRadius = 5

  // scale the data into x-axis
  const xScale = scaleLinear()
  .domain(extent(dataArray, xValue))
  .range([0, innerWidth])
  .nice()
  
  // scale the countries' name into y-axis
  const yScale = scaleLinear()
    .domain(extent(dataArray, yValue))
    .range([0, innerHeight])
  
  // the x position of the bars is always 0, starts from the left to the rightLargest Populations
  // the y position from top to bottom, these should be determined by different countries
  // need to use scale to calculate y position, band scale
  // the width of the bar is driven by the population of each country in 2020 
  // to figure out the width of the bars, use Linear scale

  return (
    <svg width = {widthSVG} height = {heightSVG}>

      <g transform = {`translate(${margin.left}, ${margin.top})`}>
        <BottomAxis 
          xScale = {xScale}
          innerHeight = {innerHeight}
          tickFormat = {format(".2s")}
          tickOffset = {tickOffset}
        />
        <LeftAxis 
          yScale = {yScale}
          innerWidth = {innerWidth}
          tickOffset = {tickOffset}
        />
        <text 
          className = "axis-label"
          transform = {`translate(${-yAxisLabelOffset}, ${innerHeight / 2}) rotate(-90)`}
          textAnchor = "middle"
        >
          {yAxisLabel}
        </text>
        <text 
          className = "axis-label"
          x = {innerWidth / 2} 
          y = {innerHeight + xAxisLabelOffset}
          textAnchor = "middle"
        >
          {xAxisLabel}
        </text>
        <Marks
          dataArray = {dataArray}
          xScale = {xScale}
          yScale = {yScale}
          xValue = {xValue}
          yValue = {yValue}
          circleRadius = {circleRadius}
        />
      </g>
    </svg>
  )
}

export default App;
