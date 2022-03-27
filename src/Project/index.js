import React from 'react';
import './index.css';
import {Badge, Button, Card, Carousel, Container} from "react-bootstrap";

function Project(props) {
    return (
        <div className="project">
            <Card style={{margin: "1em"}}>
                <Card.Body style={{padding: "2em 2em"}}>
                    <Card.Title style={{margin: "1em 0em 2em 0em"}} >
                        {props.name}

                        <Button
                            className="topright"
                            rel="noopener noreferrer nofollow"
                            target="_blank"
                            href={props.source}
                            variant="dark"
                        >
                            <i
                                style={{paddingRight: "10px"}}
                                className="fa fa-github"
                                aria-hidden="true"
                            />
                            View Source
                        </Button>
                    </Card.Title>
                    <Card.Text className="project-description">
                        {props.children}
                    </Card.Text>

                    {props.tags.map((tag) =>
                        <Badge pill style={{margin: "0em 0.3em", padding: "1.2em 1.7em"}} bg="danger">{tag}</Badge>
                    )}
                </Card.Body>

                <Card.Body style={{borderStyle: "groove"}}>
                    <Carousel variant="dark">
                        {props.images.map((image, index) =>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image}
                                    alt={`slide_${index}`}
                                />
                            </Carousel.Item>
                        )}
                    </Carousel>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Project;