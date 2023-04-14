import * as React from 'react';
import "./style.css"

export default function Counter() {
    const [count, setcount] = React.useState(0)
    // debugger
    const Add = () => {
        setcount(count + 1)
    }

    const Sub = () => {
        setcount(count - 1)
    }


    return (
        <div className='counter'>
            <div className='container py-5'>
                <h2 className='counter-text fs-1 text-center'>Counter Using Redux-Toolkit</h2>
                <div className='d-flex flex-column justify-content-center align-items-center my-4'>
                    <input type="text" value={count} disabled className='text-center fs-1 rounded px-3 fw-bold my-4' />
                    <div className='d-flex'>
                        <button onClick={Add} className="btn-add mx-2 fw-bold rounded">+ Add</button>
                        <button onClick={Sub} className="btn-add mx-2 fw-bold rounded">- Sub</button>
                    </div>
                </div>
            </div>
        </div>
    );
}