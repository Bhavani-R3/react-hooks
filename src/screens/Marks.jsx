import React from 'react'

function Marks(props) {
  return (
    <div className='row'>
      <div className="col-md-12">
        <h1> marks = { props.fmarks } </h1>
        <button className="btn btn-success" onClick={() => props.add(10)}>Add + 10</button>
      </div>
    </div>
  )
}

export default Marks