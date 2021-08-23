import React from 'react'
import { Card } from 'react-bootstrap'
import Logo from './dasboardComponent/Logo';
import { thisExercice } from './TrainingView'
import Chrono from './component/Chrono';
import UserExercices from './component/UserExercice';

export default function ViewUserExercice() {
    


    return (
        <div>
            <Logo />
            <Card>
                <Card.Body>
                    <Chrono />
                    <UserExercices Exercice={thisExercice[0]} />
                </Card.Body>
            </Card>
        </div>
    )
}
