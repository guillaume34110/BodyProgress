import React ,{useState , useEffect}from 'react'
import Logo from './dasboardComponent/Logo';
import { Button, Card } from 'react-bootstrap'
import { useAuth } from './context/AuthContext'
import firebase from "./firebase/firebaseConfig";
import { useHistory } from "react-router-dom"
import cookieGold from './assets/cookieGold.png'
import medalBronze from './assets/medalBronze.png'
import medalSilver from './assets/medalSilver.png'
import medalGold from './assets/medalGold.png'
import trophyBronze from './assets/trophyBronze.png'
import trophySilver from './assets/trophySilver.png'
import trophyGold from './assets/trophyGold.png'

export default function TrophyPage() {
    const { currentUser } = useAuth();
    const history = useHistory()
    const [userTrophy, setUserTrophy] = useState([])

    useEffect(() => {
   
        const Trophy = firebase.database().ref(`users/` + currentUser.uid + "/trophy")
        Trophy.get().then((snapshot) => {
            let previousList = snapshot.val()
            console.log(previousList)
            if (previousList !== undefined) setUserTrophy(previousList)
        

        if (previousList.musculation === undefined){
            const cookieGold = firebase.database().ref(`users/` + currentUser.uid + "/trophy/musculation/cookieGold")
            cookieGold.set(0)
            const medalBronze = firebase.database().ref(`users/` + currentUser.uid + "/trophy/musculation/medalBronze")
            medalBronze.set(0)
            const medalSilver = firebase.database().ref(`users/` + currentUser.uid + "/trophy/musculation/medalSilver")
            medalSilver.set(0)
            const medalGold = firebase.database().ref(`users/` + currentUser.uid + "/trophy/musculation/medalGold")
            medalGold.set(0)
            const trophyBronze = firebase.database().ref(`users/` + currentUser.uid + "/trophy/musculation/trophyBronze")
            trophyBronze.set(0)
            const trophySilver = firebase.database().ref(`users/` + currentUser.uid + "/trophy/musculation/trophySilver")
            trophySilver.set(0)
            const trophyGold = firebase.database().ref(`users/` + currentUser.uid + "/trophy/musculation/trophyGold")
            trophyGold.set(0)
            const Trophy = firebase.database().ref(`users/` + currentUser.uid + "/trophy")
        Trophy.get().then((snapshot) => {
            let previousList = snapshot.val()
            console.log(previousList)
            if (previousList !== undefined) setUserTrophy(previousList)
        })
        }
    })
       /* if (userTrophy.fitness === undefined){
            const cookieGold = firebase.database().ref(`users/` + currentUser.uid + "/trophy/fitness/cookieGold")
            cookieGold.set(0)
            const medalBronze = firebase.database().ref(`users/` + currentUser.uid + "/trophy/fitness/medalBronze")
            medalBronze.set(0)
            const medalSilver = firebase.database().ref(`users/` + currentUser.uid + "/trophy/fitness/medalSilver")
            medalSilver.set(0)
            const medalGold = firebase.database().ref(`users/` + currentUser.uid + "/trophy/fitness/medalGold")
            medalGold.set(0)
            const trophyBronze = firebase.database().ref(`users/` + currentUser.uid + "/trophy/fitness/trophyBronze")
            trophyBronze.set(0)
            const trophySilver = firebase.database().ref(`users/` + currentUser.uid + "/trophy/fitness/trophySilver")
            trophySilver.set(0)
            const trophyGold = firebase.database().ref(`users/` + currentUser.uid + "/trophy/fitness/trophyGold")
            trophyGold.set(0)
            const Trophy = firebase.database().ref(`users/` + currentUser.uid + "/trophy")
        Trophy.get().then((snapshot) => {
            let previousList = snapshot.val()
            console.log(previousList)
            if (previousList !== undefined) setUserTrophy(previousList)
        })
        }
        if (userTrophy.athletics === undefined){
            const cookieGold = firebase.database().ref(`users/` + currentUser.uid + "/trophy/athletics/cookieGold")
            cookieGold.set(0)
            const medalBronze = firebase.database().ref(`users/` + currentUser.uid + "/trophy/athletics/medalBronze")
            medalBronze.set(0)
            const medalSilver = firebase.database().ref(`users/` + currentUser.uid + "/trophy/athletics/medalSilver")
            medalSilver.set(0)
            const medalGold = firebase.database().ref(`users/` + currentUser.uid + "/trophy/athletics/medalGold")
            medalGold.set(0)
            const trophyBronze = firebase.database().ref(`users/` + currentUser.uid + "/trophy/athletics/trophyBronze")
            trophyBronze.set(0)
            const trophySilver = firebase.database().ref(`users/` + currentUser.uid + "/trophy/athletics/trophySilver")
            trophySilver.set(0)
            const trophyGold = firebase.database().ref(`users/` + currentUser.uid + "/trophy/athletics/trophyGold")
            trophyGold.set(0)
            const Trophy = firebase.database().ref(`users/` + currentUser.uid + "/trophy")
        Trophy.get().then((snapshot) => {
            let previousList = snapshot.val()
            console.log(previousList)
            if (previousList !== undefined) setUserTrophy(previousList)
        })
        }*/

    }, [])

const muscuRoute = () => {
    history.push('/mainMusculation')
}


const mainRoute = () => {
    history.push('/')
}

    return (
        <div  className=' d-flex flex-column justify-content-center'>
           
            <Logo />
            
            <Card>
                <Card.Body className = ' d-flex flex-column justify-content-around align-items-center'>
                <Button onClick={muscuRoute} className=" mb-3 " variant="info">musculation</Button>
                
                <div className="    d-flex flex-row justify-content-around align-items-center border-bottom w-100 pb-3" >
                         <div className = ' d-flex flex-row '>
                        <img class=" mr-1" alt="cookie" src={cookieGold} height='28px' width='28px' className="" />
                        <p class="m-0 pr-2">{userTrophy.musculation?.cookieGold}</p>
                        </div>
                         <div className = ' d-flex flex-row'>
                        <img class=" mr-1" alt="bronze medal" src={medalBronze} height='28px' width='28px' className="" />
                        <p class="m-0  pr-2">{userTrophy.musculation?.medalBronze}</p>
                        </div>
                         <div className = ' d-flex flex-row'>
                        <img class=" mr-1" alt="silver medal" src={medalSilver} height='28px' width='28px' className="" />
                        <p class="m-0  pr-2">{userTrophy.musculation?.medalSilver}</p>
                        </div>
                         <div className = ' d-flex flex-row'>
                        <img class=" mr-1" alt="gold medal" src={medalGold} height='28px' width='28px' className="" />
                        <p class="m-0  pr-2">{userTrophy.musculation?.medalGold}</p>
                        </div>
                         <div className = ' d-flex flex-row'>
                        <img class=" mr-1" alt="bronze trophy" src={trophyBronze} height='28px' width='28px' className="" />
                        <p class="m-0  pr-2">{userTrophy.musculation?.trophyBronze}</p>
                        </div>
                         <div className = ' d-flex flex-row'>
                        <img class=" mr-1" alt="silver trophy" src={trophySilver} height='28px' width='28px' className="" />
                        <p class="m-0  pr-2">{userTrophy.musculation?.trophySilver}</p>
                        </div>
                         <div className = ' d-flex flex-row'>
                        <img class=" mr-1" alt="gold trophy" src={trophyGold} height='28px' width='28px' className="" />
                        <p class="m-0  pr-2">{userTrophy.musculation?.trophyGold}</p>
                        </div>
                </div>
                
           
             
          
           {/* <Card>
                <Card.Body className = ' d-flex flex-column justify-content-around align-items-center'>
                <Button onClick={athleticRoute} className=" mb-3 "variant="warning">Athlétisme</Button>
                
                <div className="    d-flex flex-row justify-content-around align-items-center  " >
                         <div className = ' d-flex flex-row'>
                        <img class=" mr-1" alt="cookie" src={cookieGold} height='28px' width='28px' className="" />
                        <p class="m-0 pr-2">{userTrophy.athletics?.cookieGold}</p>
                        </div>
                         <div className = ' d-flex flex-row'>
                        <img class=" mr-1" alt="bronze medal" src={medalBronze} height='28px' width='28px' className="" />
                        <p class="m-0  pr-2">{userTrophy.athletics?.medalBronze}</p>
                        </div>
                         <div className = ' d-flex flex-row'>
                        <img class=" mr-1" alt="silver medal" src={medalSilver} height='28px' width='28px' className="" />
                        <p class="m-0  pr-2">{userTrophy.athletics?.medalSilver}</p>
                        </div>
                         <div className = ' d-flex flex-row'>
                        <img class=" mr-1" alt="gold medal" src={medalGold} height='28px' width='28px' className="" />
                        <p class="m-0  pr-2">{userTrophy.athletics?.medalGold}</p>
                        </div>
                         <div className = ' d-flex flex-row'>
                        <img class=" mr-1" alt="bronze trophy" src={trophyBronze} height='28px' width='28px' className="" />
                        <p class="m-0  pr-2">{userTrophy.athletics?.trophyBronze}</p>
                        </div>
                         <div className = ' d-flex flex-row'>
                        <img class=" mr-1" alt="silver trophy" src={trophySilver} height='28px' width='28px' className="" />
                        <p class="m-0  pr-2">{userTrophy.athletics?.trophySilver}</p>
                        </div>
                         <div className = ' d-flex flex-row'>
                        <img class=" mr-1" alt="gold trophy" src={trophyGold} height='28px' width='28px' className="" />
                        <p class="m-0  pr-2">{userTrophy.athletics?.trophyGold}</p>
                        </div>
                </div>
            
                </Card.Body>
           </Card>*/}
           
            <Button onClick={mainRoute} className=" mt-3 "variant="secondary">page d'acceuil</Button>
            </Card.Body>
            </Card>
        </div>
    )
}
