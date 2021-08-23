import React, { useState,  useRef } from 'react'
import {  Button } from 'react-bootstrap'


let timerKey = 0
let timerStart = false
export default function Chrono() {

    const [minutes, setMinutes] = useState('00');
    const [tenMillisecond, setTenMillisecond] = useState('0');
    const [seconds, setSeconds] = useState('00');
    const toggleRef = useRef()

    let fastseconds = 0
    let fastTenMillis = 0
    let fastminutes = 0

    const startTimer = (e) => {
        console.log(e)
        if (timerStart === false) {
            e.target.className = "btn btn-danger mr-5"
            e.target.innerText = "Stop"
            timerStart = true
            console.log(e)
            timer()
        } else if (timerStart === true) {
            if (timerKey) {
                clearTimeout(timerKey);
                timerKey = 0;
            }
            e.target.className = "btn btn-success mr-5"
            e.target.innerText = "Start"
            timerStart = false
            setTenMillisecond('0')
            setSeconds('00');
            setMinutes('00');
        }

    }
    const timer = () => {
        timerKey = setTimeout(() => {
            if (fastTenMillis < 10) {
                // console.log(fastTenMillis, timerStart)
                fastTenMillis += 1
                setTenMillisecond(fastTenMillis)
            }
            if (fastTenMillis >= 10) {
                fastTenMillis = 0
                setTenMillisecond(fastTenMillis)
                if (fastseconds < 9) {
                    fastseconds += 1
                    setSeconds(`0${fastseconds}`);
                } else if (fastseconds < 60) {
                    fastseconds += 1
                    setSeconds(fastseconds);
                }
                if (fastseconds === 60) {
                    fastminutes += 1
                    fastseconds = 0
                    setSeconds(`0${fastseconds}`);
                    if (fastminutes < 9) {
                        setMinutes(`0${fastminutes}`)
                    } else {
                        setMinutes(fastminutes);
                    }
                }
            }
            timer()
        }, 100)
    }

    return (
        <div >
            <div className=" d-flex flex-row justfy-content-around mt-3">
                <Button className='mr-5' onClick={startTimer} variant="success" type="button" ref={toggleRef}> Start</Button>
                <h1> {minutes}:{seconds}:{tenMillisecond}</h1>
            </div>
        <hr className="mt-5"></hr>
        </div>
    )
}
