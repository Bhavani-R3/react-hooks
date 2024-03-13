import React, { useReducer } from 'react'

/* This hook is an alternative to useState, when you have complex state logic.
   It takes reducer function and an initial state or data, and returns the current state dispatch function to update it */

// const [state,dispatcher] = useReducer(reducer,initialData)
  
// dispatcher(action type) => to change your state, you dispatch actions to the dispatch function
// reducer => is a function that describes how your state can change based on different actions

function customReducer(state,action) {
  switch(action) {
    case "inc":
      return { qnty: state.qnty + 1 }
      break;
    case "dec":
      return state.qnty <= 1 ? {qnty: 1} : { qnty: state.qnty - 1 }
      break;
    case "clear": 
      return { qnty: 1 }
    default: console.log(`check your input`)
  }
}

function Ex8() {
  let initState = { qnty: 1 }
  const [state,dispatch] = useReducer(customReducer, initState)

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">useReducer</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className='display-3 text-success d-flex justify-content-evenly'>
            <button onClick={() => dispatch('dec')} className='btn btn-danger'>-</button>
            { state.qnty }
            <button onClick={() => dispatch('inc')} className='btn btn-success'>+</button>
          </h1>

          <button onClick={() => dispatch('clear')} className='btn btn-warning mt-4'>Clear</button>
        </div>
      </div>
    </div>
  )
}

export default Ex8