import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import {useState} from 'react'

const Home = () => {
    const counterVal = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const [status,setStatus]=useState(false);

    const add = () => {
        dispatch({ type: 'add' });     };

    const sub = () => {
        dispatch({ type: 'sub' }); 
    };
    const saveDetails =() =>{
        dispatch({
            type:'saveDetails',
            data:{"name":"sathish","email":"sathish@"}
        });
    }

    return (
        <div>
            <Header/>
            <h1>{counterVal}</h1>
            <input type="button" value="Add" onClick={add} /> 
            <input type="button" value="Sub" onClick={sub} /> <br></br>
            
           <input type='submit' value="savemydetails" onClick={saveDetails}/>
           {(status)?<p className='red'> MEAFFGAEBF </p>:<p className='red1'> heyyyyyy </p>}
        </div>
    );
};

export default Home;
