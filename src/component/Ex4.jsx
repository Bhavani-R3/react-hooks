import React, { useRef } from 'react'

function Ex4() {
  const fBtn = useRef() 
  const fname = useRef()

  // mutable ref
  const clickHandler = () => {
    console.log(`ref =`, fBtn.current.className)
    console.log(`ref =`, fname.current.value)
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3>useEffect</h3>
        </div>
      </div>
      <div className="row bg-secondary p-5">
        <div className="col-md-12">
          <button ref={fBtn} className='btn btn-success' onClick={clickHandler}>Click Me</button>

          <div className="form-group">
            <input type="text" name="" id="" ref={fname} className='form-control' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ex4