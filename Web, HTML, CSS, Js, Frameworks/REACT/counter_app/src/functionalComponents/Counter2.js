import React, { useState } from 'react';

const Counter2 = () => {
    const [ count, setCount ] = useState(5);

    const decCount = () => 
        setCount(count-1)

    const resCount = () => 
        setCount(0)

    const incCount = () => 
        setCount(count+1)

    return (
        <div className='container-sm bg-secondary rounded text-center py-5 mt-4 text-light'>
            <p className='display-6'>Counter App</p>
            <p>Using Functional Components</p>
            <h1 className='h1'>{ count }</h1>
            <div className='btn-group btn-group-lg mt-2'>
                <button 
                    onClick={incCount}
                    id='pls'
                    className='btn btn-success btn-sm text-light'
                ><i className="bi bi-patch-plus"></i></button>
                {
                    count > 0 &&
                    <button 
                        onClick={resCount}
                        id='res'
                        className='btn btn-lg btn-danger'
                    >Reset</button>
                }{
                    count > 0 &&
                    <button 
                        onClick={decCount}
                        id='min'
                        className='btn btn-sm btn-warning text-light'
                    ><i className="bi bi-patch-minus"></i></button>
                }
            </div>
        </div>
    );
}

export default Counter2