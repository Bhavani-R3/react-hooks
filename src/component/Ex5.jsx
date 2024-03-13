import React, { useCallback, useState } from 'react'
import Age from '../screens/Age'
import Person from '../screens/Person'
/*
  useCallback => we can pass a function that returns a callback and it will return memorized version of it.

  in react dom which is used to remember a something, it might be a function or variable.
  ex: api calls, animation effects, callbacks side effects

  useMemo => memorized special computations
*/

function Ex5() {
  const [age,setAge] = useState(20)

  const incAge = () => {
    setAge(age+1)
  }

  const updateAge = useCallback(() => {
    console.log(`callback called`)
    return `John's age is ${age} years`
  }, [age])

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12">
          <h3 className='text-success text-center'>useCallback</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Age fAge={age} fInc={incAge} />
          <Person fUpdate={updateAge} />
        </div>
      </div>
    </div>
  )
}

export default Ex5