import React, { useState, useRef } from 'react'
import CountingBox from '../screens/CountBox'

// useImperativeHandle customizes the instance value that is exposed to parent components when using ref. As always, imperative code using refs should be avoided in most cases.

// the useImperativeHandle Hook => let you create a handle or custom name for a value exposed to a parent component using ref keyword.
// the forwardRef => is used to forward a ref attribute from one parent component to its child component

function Ex10() {
    const [wordCount,setWordCount] = useState(0)

    // the useRef hook return a ref object with a mutable property named "current"
    const txtRef = useRef()

    const countWords = (count) => {
        setWordCount(count)
    }

    return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="text-success display-3">useImperativeHandle</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-sm-12">
                <div className="card">
                    <div className="card-body">
                        <CountingBox ref={txtRef} />
                        <div className="form-group mt-2 mb-2">
                            <button className="btn btn-success" onClick={() => countWords(txtRef.current.count)}>Count Words</button>
                        </div>
                    </div>
                    <div className="card-footer">
                        <h1 className="text-center text-success">
                            Current word count = { wordCount }
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ex10