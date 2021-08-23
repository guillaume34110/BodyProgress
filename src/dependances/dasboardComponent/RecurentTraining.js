import React from 'react'
import { Card } from 'react-bootstrap'



export default function RecurentTraining() {
    return (
        <div>
            <div className = 'row d-flex justify-content-around align-items-center'>
            <Card >
            <Card.Body className = ' d-flex justify-content-around align-items-center' >
            <div>recurent1</div>
            </Card.Body>
            </Card>
            <Card >
            <Card.Body className = ' d-flex justify-content-around align-items-center' >
            <div>recurent2</div>
            </Card.Body>
            </Card>
            </div>
            <div className = 'row d-flex justify-content-around align-items-center'>
            <Card >
            <Card.Body className = ' d-flex justify-content-around align-items-center' >
            <div>recurent3</div>
            </Card.Body>
            </Card>
            <Card >
            <Card.Body className = ' d-flex justify-content-around align-items-center' >
            <div>recurent4</div>
            </Card.Body>
            </Card>
            </div>
        </div>
    )
}
