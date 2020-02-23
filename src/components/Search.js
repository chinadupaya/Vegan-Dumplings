import React from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap';
import '../stylesheets/Search.css';
export default function Search(){

    return(
        <div className="Search">
            <h2>Results for 'Mindanao'</h2>
            <Card style={{ width: '80%', margin: 'auto 1em' }} striped>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <div className="school-name">Davao Christian High School</div>
                        <div className="grade-section">Grade 5 - Compassion</div>
                        <div>Favorite Foods</div>
                        <Button variant="info">Join Discussion</Button>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="school-name">Salugpungan Ta Ta’nu Igkanugon Learning Center</div>
                        <div className="grade-section">Grade 12</div>
                        <div>Martial Law</div>
                        <Button variant="info">Join Discussion</Button>
                    </ListGroup.Item>

                </ListGroup>
            </Card>
        </div>
    )
}