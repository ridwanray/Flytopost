import React from 'react';

import { Container, GridList, Grid } from '@material-ui/core';
import { Card, Row, Button } from 'react-bootstrap';
import image from '../../Images/beach.png'
import { red, green } from '@material-ui/core/colors';


const Body = () => {
const size = Array.from(Array(8).keys());

const check = () =>{
    document.getElementsByClassName(btn).style.color= green;
}

    return (
    
    <Container className="body" maxWidth="xl">

        <div className="row">
        <div className="column">
        <Card className="cards">
                <Card.Img style={{width:'100%'}} variant="top" src={image} alt="Card Image" />
                <Card.Body>
                    <Card.Title>Samson</Card.Title>
                    <Card.Text>
                        I will be happy to help you deliver your package ASAP
                    </Card.Text>
                    <Card.Title>December 20th 2019</Card.Title>
                    <Button className="btn" variant="primary" onClick={check}>Contact</Button>
                </Card.Body>
        </Card>
        </div>

        <div className="column">
        <Card className="cards">
        <Card.Img style={{width:'100%'}} variant="top" src={image} alt="Card Image" />
                <Card.Body>
                    <Card.Title>Samson</Card.Title>
                    <Card.Text>
                        I will be happy to help you deliver your package ASAP
                    </Card.Text>
                    <Card.Title>December 20th 2019</Card.Title>
                    <Button className="" variant="primary" color="red">Contact</Button>
                </Card.Body>
        </Card>
        </div>

        <div className="column">
        <Card className="cards">
        <Card.Img style={{width:'100%'}} variant="top" src={image} alt="Card Image" />
                <Card.Body>
                    <Card.Title>Samson</Card.Title>
                    <Card.Text>
                        I will be happy to help you deliver your package ASAP
                    </Card.Text>
                    <Card.Title>December 20th 2019</Card.Title>
                    <Button className="" variant="primary" color="red">Contact</Button>
                </Card.Body>
        </Card>
        </div>

        <div className="column">
        <Card className="cards">
        <Card.Img style={{width:'100%'}} variant="top" src={image} alt="Card Image" />
                <Card.Body>
                    <Card.Title>Samson</Card.Title>
                    <Card.Text>
                        I will be happy to help you deliver your package ASAP
                    </Card.Text>
                    <Card.Title>December 20th 2019</Card.Title>
                    <Button className="" variant="primary" color="red">Contact</Button>
                </Card.Body>
        </Card>
        </div>


        </div>
            
    </Container>

    );
};

export default Body;