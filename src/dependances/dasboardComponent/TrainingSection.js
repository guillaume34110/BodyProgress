import React from 'react'
import { Card , Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'



export default function TrainingSection() {

const history = useHistory()

const muscuRoute = () => {
    history.push('/mainMusculation')
}



    return (
        <div>
          <hr className="my-4"></hr>
            <h2 className = 'mt-3 text-center' >Section entrainement</h2>
            <Card >
            <Card.Body className = ' d-flex justify-content-around align-items-center' >
            <Button onClick = {muscuRoute} variant="primary">musculation</Button>
            </Card.Body>
            </Card>
        </div>
    )
}
