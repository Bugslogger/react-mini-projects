import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./style.css"
import { Button, Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { decreament, increament } from '../../redux/action';

export default function Counter() {

    const dispatch = useDispatch()
    const data = useSelector(state => state.value)
    // debugger
    const Add = () => {
        dispatch(increament())
        console.log(data);
    }

    const Sub = () => {
        dispatch(decreament())
        console.log(data);

    }

    return (
        <div className='counter'>
            <div className='container py-5'>
                <h2 className='counter-text fs-1 text-center'>Counter Using Redux-Toolkit</h2>
                <div className='d-flex flex-column justify-content-center align-items-center my-4'>
                    <input type="text" value={data} disabled className='text-center fs-1 rounded px-3 fw-bold my-4' />
                    <div className='d-flex'>
                        <button onClick={Add} className="btn-add mx-2 fw-bold rounded">+ Add</button>
                        <button onClick={Sub} className="btn-add mx-2 fw-bold rounded">- Sub</button>
                    </div>
                </div>
            </div>
        </div>
    );
}