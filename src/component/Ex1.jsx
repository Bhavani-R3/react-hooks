import React, { useState } from 'react'

function Ex1() {
  // const [state,handler] = useState(init value)

  const [num,setNum] = useState(0)

  const addVal = (val) => {
    setNum(num + val)
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="text-success">useState Hook</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="display-1 text-danger">Num = { num }</h1>
          <button onClick={() => setNum(num + 1)} className='btn btn-info'>Add + 1</button>
          <hr/>
          <button onClick={() => addVal(10)} className='btn btn-success'>Add + 10</button>
          <button onClick={() => addVal(50)} className='btn btn-danger'>Add + 50</button>
          <button onClick={() => addVal(100)} className='btn btn-warning'>Add + 100</button>
        </div>
      </div>
    </div>
  )
}

export default Ex1 