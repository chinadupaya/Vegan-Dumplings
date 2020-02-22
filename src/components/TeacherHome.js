import React, {useState} from 'react';
import {Tabs, Tab, Button, Card, Modal} from 'react-bootstrap';

export default function TeacherHome(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(

        <div className="TeacherHome">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>New Channel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicChannel">
                        <Form.Label>Channel Topic</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            Make a descriptive title for your channel topic.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Tabs defaultActiveKey="Class1" id="uncontrolled-tab-example">
                <Tab eventKey="Class1" title="Class 1">
                    <Button variant ="info" onClick={handleShow}>Add new channel</Button>
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
                </Tab>
                <Tab eventKey="Class2" title="Class 2">
                    <Button variant ="info" onClick={handleShow}>Add new channel</Button>
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
                </Tab>
                <Tab eventKey="CLass3" title="Class 3">
                    <Button variant ="info" onClick={handleShow}>Add new channel</Button>
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
                </Tab>
            </Tabs>
            
        </div>
    )
}