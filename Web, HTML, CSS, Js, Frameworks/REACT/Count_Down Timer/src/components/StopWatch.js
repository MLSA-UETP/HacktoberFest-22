import React,{useState, useEffect, useRef} from 'react'
                        
import './StopW.css'
const StopWatch = () => {
    let timerIdRef = useRef(0);
    const [count, setCount]=useState(0)
    const handleStart =()=>{
        if (timerIdRef.current) { return; }
        timerIdRef.current= setInterval(() => setCount(e=> e+1),1000)
    };
    const handleStop =()=>{
        clearInterval(timerIdRef.current)
        timerIdRef.current = 0;
    };
   
    useEffect(() => {
                return () => clearInterval(timerIdRef.current);
            }, []);
  return (
    <div>
        <h2 className="display-3 text-center text-white" >CountDown Timer</h2>
    <div id="screen" className="bg-info">
         <h1 id="timer" >Timer: {count}s</h1><br></br><br></br>
         <div id="btn" >
        <button onClick={handleStart} className="btn btn-outline-success btn-lg">Start</button>{' '}{' '}
        <button onClick={handleStop} className="btn btn-outline-danger btn-lg">Stop</button>
        </div>
    </div>
    <small className="text-white" >made by Awais Saddiqui</small>
    </div>
  )
}
export default StopWatch