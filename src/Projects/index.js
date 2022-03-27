import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './index.css';

import Project from "../Project"

import A11 from "./restaurant/11.png";
import A12 from "./restaurant/12.png";
import A13 from "./restaurant/13.png";
import A14 from "./restaurant/14.png";
import A15 from "./restaurant/15.png";
import A16 from "./restaurant/16.png";
import A17 from "./restaurant/17.png";
import A18 from "./restaurant/18.png";
import A19 from "./restaurant/19.png";
import A20 from "./restaurant/20.png";
import A21 from "./restaurant/21.png";
import A22 from "./restaurant/22.png";
import A23 from "./restaurant/23.png";
import A24 from "./restaurant/24.png";
import A25 from "./restaurant/25.png";
import A26 from "./restaurant/26.png";
import A27 from "./restaurant/27.png";
import A28 from "./restaurant/28.png";
import A29 from "./restaurant/29.png";
import A30 from "./restaurant/30.png";

import KA from "./keebook/a.png"
import KB from "./keebook/b.png"
import KC from "./keebook/c.png"

import SA from "./simplecontroller/a.png"
import SB from "./simplecontroller/b.png"
import SC from "./simplecontroller/c.png"

import LA from "./lions/a.png"
import LB from "./lions/b.png"
import LC from "./lions/c.png"

import GA from "./genetic/a.png"
import GB from "./genetic/b.png"

import FA from "./fizzbuzz/a.png"

import OA from "./operations/a.png"
import OB from "./operations/b.png"
import OC from "./operations/c.png"

import PA from "./portfolio/a.png"
import PB from "./portfolio/b.png"

function Projects() {
    return (
        <div className="projects">

            <Container fluid>
                <h1 className="projects-txt"> > Projects <span className="blinkx">&nbsp;</span> </h1>

                <Row>
                    <Col lg={6} md={12} xs={12}>
                        <Project
                            source={"https://github.com/codermarcel/roeckl"}
                            name="Restaurant Project"
                            tags={["Go", "SQLite", "React", "Typescript", "Semantic UI"]}
                            images={[A11, A12,A13, A14,A15, A16,A17, A18, A19, A20,A21, A22,A23, A24,A25,A26, A27,A28,A29, A30]}
                        >
                            <p>This is the project I have created for my web development assignment for my studies at university.</p>
                            <p>This project was made for 4 different user types/roles who will each see a different UI depending on their roles.</p>
                            <ol>
                                <li>Customer (order food online and view their order history)</li>
                                <li>Chef (view the food that needs to be cooked)</li>
                                <li>Waiter (select a table and order food, mark the bill as paid)</li>
                                <li>Owner (see statistics)</li>
                            </ol>
                        </Project>
                    </Col>

                    <Col lg={6} md={12} xs={12}>
                        <Project
                            source={"https://github.com/codermarcel/KeeBook"}
                            name="KeeBook"
                            tags={["C#","Javascript", "HTML"]}
                            images={[KA, KB, KC]}
                        >
                            <p>
                                KeeBook is a Plugin for the KeePass password manager that helps you save your favorite bookmarks to your KeePass Database.
                                The Plugin was created in C# over 6 years ago as a hobby project of mine.
                            </p>
                        </Project>
                    </Col>
                </Row>


                <Row>
                    <Col lg={6} md={12} xs={12}>
                        <Project
                            source={"https://github.com/codermarcel/SimpleController"}
                            name="SimpleController"
                            tags={["PHP","Symfony", "Silex"]}
                            images={[SA, SB, SC]}
                        >
                            <p>
                                SimpleController was a convenient reflection based controller for <a href="https://github.com/silexphp/Silex">the php micro-framework silex</a>
                            </p>
                            <p>
                                SimpleController made it easy for you to use controllers in your silex applications and matched your controller methods to routes automatically
                            </p>
                        </Project>
                    </Col>


                    <Col lg={6} md={12} xs={12}>
                        <Project
                            source={"https://github.com/codermarcel/genetic"}
                            name="Nutrient Calculation (Genetic Algorithm)"
                            tags={["Go","Genetic Algorithm", "JSON API"]}
                            images={[GA, GB]}
                        >
                            <p>
                                This project was made to calculate the amount of ingredients needed for a given recipe based on the target nutrients.
                            </p>

                            <p>
                                Brute-forcing a solution (trying out all possible combinations) is unfeasible because there are too many possible combinations, that's why I have used a genetic algorithm to approach a viable solution with the given parameters.
                            </p>
                            <p>
                                Some of the parameters that can be modified are the amount of time a solution can be searched for (1s, 60s, 300s, etc) how good a solution needs to be to be accepted as the solution (90% of target nutrients, 95%, 99% etc)
                                and the balance of the recipe (e.g 2 fish with 6 chips, but not 1 fish with 20 chips)
                            </p>
                        </Project>
                    </Col>
                </Row>


                <Row>
                    <Col lg={6} md={12} xs={12}>
                        <Project
                            source={"https://github.com/codermarcel/lion_typescript_vue"}
                            name="Lion Typescript Vue"
                            tags={["VueJS", "Typescript", "JSON", "bootstrap"]}
                            images={[LA, LB, LC]}
                        >
                            <p>
                                This was a demo project I was asked to create for 'thelions.com' to show my understanding of VueJS, typescript and using JSON apis
                            </p>
                        </Project>
                    </Col>

                    <Col lg={6} md={12} xs={12}>
                        <Project
                            source={"https://github.com/codermarcel/fizzbuzz"}
                            name="Fizzbuzz"
                            tags={["Go"]}
                            images={[FA]}
                        >
                            <p>
                                This is my implementation of the Fizzbuzz problem which is sometimes used as a simple <a rel="noopener noreferrer nofollow" href="https://www.youtube.com/watch?v=QPZ0pIK_wsc">interview question as described by Tom Scott</a>
                            </p>
                        </Project>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6} md={12} xs={12}>
                        <Project
                            source={"https://github.com/codermarcel/operations"}
                            name="Ops"
                            tags={["Go", "Kubernetes", "YAML"]}
                            images={[OA, OB, OC]}
                        >
                            <p>
                                This is a project to help configure things like kubernetes configurations via a profile with Go templates.
                                You can have multiple "profiles" (e.g for production, for development, for staging etc) to replace the values based
                                on your current environment.
                            </p>
                        </Project>
                    </Col>

                    <Col lg={6} md={12} xs={12}>
                        <Project
                            source={"https://github.com/codermarcel/portfolio"}
                            name="Portfolio"
                            tags={["React", "GitHub Pages"]}
                            images={[PA, PB]}
                        >
                            <p>
                                This is the website you are looking at right now! :)
                            </p>
                        </Project>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Projects;