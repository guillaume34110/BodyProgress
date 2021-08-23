import React, { useState, useEffect} from 'react'
import { useAuth } from '../context/AuthContext'
import firebase from "../firebase/firebaseConfig";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

import cookieGold from '../assets/cookieGold.png'
import empty from '../assets/Empty.png'

export default function SpeProgress({ exercice, ratioData, userSex }) {

    const { currentUser } = useAuth();
    const [progressPosition, setprogressPosition] = useState([])

    useEffect(() => {
      
        const oldratio = firebase.database().ref(`users/` + currentUser.uid + "/userExercice/stats/" + exercice + "/ratioMax")
        oldratio.get().then((snapshot) => {
            let previousList = snapshot.val()

            if (previousList !== null && previousList !== undefined) {
                setprogressPosition(previousList)
            } else {
                setprogressPosition(0)
            }
        })

    }, [ratioData])



    return (
        <div className='mt-3 '>

            <ProgressBar
                percent={
                    progressPosition}
                stepPositions={[0 , 100 
                ]}
                fillBackground="linear-gradient(to right, #fefb72, #f0bb31)"

            >
                 <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                            alt='medal'
                            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                            width="30"
                            src={empty}
                        />
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                            alt='cookie'
                            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                            width="30"
                            src={cookieGold}
                        />
                    )}
                </Step>
               
            </ProgressBar >
        </div>
    )
}
