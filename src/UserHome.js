import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function UserHome(){
    return(

        <div className = "UserHome">
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Superstitious beliefs</Card.Title>
                <Card.Text>
                Discuss with Grade 9 students from Cebu City National Science High School on the superstitious beliefs in their community.
                </Card.Text>
                <a href="/chat"><Button variant="primary">Go to chat</Button></a>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Family values</Card.Title>
                <Card.Text>
                Discuss with students from Davao City High School on their family values they believe are unique to their area.
                </Card.Text>
                <Button variant="primary">Go to chat</Button>
            </Card.Body>
            </Card>
        </div>
    );
    
}