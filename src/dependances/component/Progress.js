import React, { useState, useEffect} from 'react'

import { useAuth } from '../context/AuthContext'
import firebase from "../firebase/firebaseConfig";
import { ratioMuscu } from "../database/ratio"
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";


import medalBronze from '../assets/medalBronze.png'
import medalSilver from '../assets/medalSilver.png'
import medalGold from '../assets/medalGold.png'
import trophyBronze from '../assets/trophyBronze.png'
import trophySilver from '../assets/trophySilver.png'
import trophyGold from '../assets/trophyGold.png'

export default function Progress({ exercice, ratioData, userSex }) {

    const { currentUser } = useAuth();
    const [progressPosition, setprogressPosition] = useState([])
    const [iconPosition, seticonPosition] = useState()
    

    useEffect(() => {
        let position
        if (userSex === undefined || userSex === null) {
            
            const sex = firebase.database().ref(`users/` + currentUser.uid + "/info/sex")
            sex.get().then((snapshot) => {
                let previousList = snapshot.val()
                if (previousList !== undefined) previousList ="2"
                    if (previousList === '1') previousList = ratioMuscu.Strength[exercice]?.female
                    if (previousList === '2') previousList = ratioMuscu.Strength[exercice]?.male

                    position = [(previousList?.medalBronze * 100) / previousList?.trophyGold,
                    (previousList?.medalSilver * 100) / previousList?.trophyGold,
                    (previousList?.medalGold * 100) / previousList?.trophyGold,
                    (previousList?.trophyBronze * 100) / previousList?.trophyGold,
                    (previousList?.trophySilver * 100) / previousList?.trophyGold,
                        100]
                        seticonPosition(position)
                
            })

        } else {
            position = [(userSex?.medalBronze * 100) / userSex?.trophyGold,
            (userSex?.medalSilver * 100) / userSex?.trophyGold,
            (userSex?.medalGold * 100) / userSex?.trophyGold,
            (userSex?.trophyBronze * 100) / userSex?.trophyGold,
            (userSex?.trophySilver * 100) / userSex?.trophyGold,
                100]
        }



        seticonPosition(position)



        const oldratio = firebase.database().ref(`users/` + currentUser.uid + "/muscu/stats/" + ratioMuscu.Strength[exercice]?.name.En + "/ratioMax")
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
                stepPositions={iconPosition
                }
                fillBackground="linear-gradient(to right, #fefb72, #f0bb31)"

            >
                <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                            alt='medal'
                            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                            width="30"
                            src={medalBronze}
                        />
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                            alt='medal'
                            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                            width="30"
                            src={medalSilver}
                        />
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                            alt='medal'
                            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                            width="30"
                            src={medalGold}
                        />
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                            alt='Trophy'
                            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                            width="30"
                            src={trophyBronze}
                        />
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                            alt='Trophy'
                            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                            width="30"
                            src={trophySilver}
                        />
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                            alt='Trophy'
                            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                            width="30"
                            src={trophyGold}
                        />
                    )}
                </Step>
            </ProgressBar >
        </div>
    )
}
