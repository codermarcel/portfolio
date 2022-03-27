import React from 'react';
import './index.css';
import Terminal from "../Terminal";

function Intro() {
    return (
        <div className="cnt">
            <div className="about-txt">
                <h1 className="intro"> > About <span className="blink">&nbsp;</span> </h1>

                <p>Welcome to my website! My name is Marcel and I am a web developer.</p>
                <p>
                    I have always been fascinated with coding and I love creating simple and efficient solutions for problems.
                    I have experience using Go, C#, PHP, Javascript, Typescript, React, Docker, Git, gRPC and much more!
                    My favorite programming language at the moment is Go and I like creating frontends with Typescript + React
                </p>
                <p>
                    Below you can find some of my open source projects that I have released on GitHub, I have tried to include
                    projects using many different programming languages and technologies to show my passion for coding and learning new tech!
                </p>
                <p>
                    All of my private projects are hosted on gitlab because of their CI/CD pipelines and the unlimited free private repositories
                    (created before github had unlimited private repositories and github actions)
                </p>
            </div>

            <Terminal />
        </div>
    );
}

export default Intro;