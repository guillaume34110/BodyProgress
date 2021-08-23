import React from 'react'
import { Card, } from 'react-bootstrap'
import Logo from './dasboardComponent/Logo';
import { thisExercice } from './TrainingView'
import Exercice from './component/Exercices'
import Chrono from './component/Chrono';

export default function ViewExercice() {

    return (
        <div>
            <Logo />
            <Card>
                <Card.Body>
                    <Chrono />
                    <Exercice  Exercice={thisExercice[0]} />
                </Card.Body>
            </Card>
        </div>
    )
}
