import React from 'react'

function Age(props) {
  return (
    <div className="row">
        <div className="col-md-12">
            <h1 className="text-success">Age is = { props.fAge }</h1>
            <button onClick={props.fInc} className='btn btn-success'>Inc Age</button>
        </div>
    </div>
  )
}

export default Age