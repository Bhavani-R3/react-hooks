import React, { useState, useMemo } from 'react'
import Marks from '../screens/Marks'
import Info from './../screens/Info';

/* useMemo will only recompute the memoized value when one of the deps has changed. */
function Ex7() {
  const [marks,setMarks] = useState(35)

  const addMarks = (val) => {
    setMarks(marks + val)
  }

  const johnMarks = useMemo(() => ({
    result: `John has scored ${marks} marks in maths.`
  }),[marks])

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className='display-3 text-success'>useMemo</h3>
        </div>
      </div>
      <Marks fmarks={marks} add={addMarks} />
      <Info txt={johnMarks} />
    </div>
  )
}

export default Ex7