import React, { useState, useImperativeHandle } from 'react'

const CountingBox = React.forwardRef((props,ref) => {
    const [inp,setInp] = useState('')

    // useImperativeHandle(ref,handler,[dep])
    useImperativeHandle(ref,() => {
        return { count: !inp ? 0 : inp.split(' ').length }
    },[inp])

    // In this current version of React.useImperativeHandle memorizes the value of the handle, which can be a problem, if you are trying to get an updated value (as in the current case).

    // we can resolve by specifying dep - that changes with each render of the component which resolves the problem

    return (
        <div className="form-group mt-2 mb-2">
            <label htmlFor="txt">Enter Your Words</label>
            <textarea name="txt" id="txt" value={inp} onChange={(e) => setInp(e.target.value)} cols="30" rows="6" className='form-control' required></textarea>
        </div>
      )
    })

 

export default CountingBox