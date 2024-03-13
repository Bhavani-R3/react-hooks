import React, { useState, useEffect } from 'react'

function Ex3() {
  const [num,setNum] = useState(0)

  const addVal = (val) => {
    setNum(num + val)
  }

  useEffect(function() {
    console.log(`state is modified`)

    return () => {
      console.log(`say bye..`)
    }
  },[num])

  console.log(`component rendered`)

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3>useEffect</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <h1 className="text-danger">Number = { num }</h1>
          <button className='btn btn-success' onClick={() => addVal(1)}>Add + 1</button>
        </div>
      </div>
    </div>
  )
}

export default Ex3