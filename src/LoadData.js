import { useState, useEffect } from 'react'
import { csv } from 'd3'

const LoadData = () => {

    // link to the data
    const csvUrl = "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv"
  
    // state
    const [data, setData] = useState([])
  
    // download the data just once when app first render, use [] as dependence
    useEffect(() => {
  
      const convertObjProps2Num = aDataObj => {
        aDataObj.sepal_length = +aDataObj.sepal_length
        aDataObj.sepal_width = +aDataObj.sepal_width
        aDataObj.petal_length = +aDataObj.petal_length
        aDataObj.petal_width = +aDataObj.petal_width
        return aDataObj
      }

      csv(csvUrl, convertObjProps2Num).then(dataArray => setData(dataArray))
    },[])
    return data
  }

export default LoadData;