import React from 'react';
import './index.css';

function Terminal() {
    return (
        <div className="terminal-box">
            <div className="terminal-header">
                <div className="header-button red"/>
                <div className="header-button orange"/>
                <div className="header-button green"/>
            </div>
            <div className="terminal-window">

                <div className="section">
                    <div className="command">
                        > skills
                    </div>
                    <div className="line">
                        ["Go", "C#", "PHP", "Javascript", "Typescript", "React", "Docker", "Git"]
                    </div>
                </div>


                {/*<div className="section">*/}
                {/*    <div className="command">*/}
                {/*        > resume*/}
                {/*    </div>*/}
                {/*    <div className="line">*/}
                {/*        "<a className="resume" href="#">resume.pdf</a>"*/}
                {/*    </div>*/}
                {/*</div>*/}


                <div className="section">
                    <div className="command">
                        > interests
                    </div>
                    <div className="line">
                        ["coding", "soccer", "mma", "technology", "food"]
                    </div>
                </div>


                {/*<div className="section">*/}
                {/*    <div className="command">*/}
                {/*        > contact*/}
                {/*    </div>*/}
                {/*    <div className="line">*/}
                {/*        ["<a rel="noopener noreferrer" href="mailto:codermarcel@gmail.com">codermarcel@gmail.com</a>", "<a rel="noopener noreferrer" href="https://github.com/codermarcel">Github</a>"]*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="section">
                    <div className="command">
                        > email
                    </div>
                    <div className="line">
                        "<a rel="noopener noreferrer" href="mailto:codermarcel@gmail.com">codermarcel@gmail.com</a>"
                    </div>
                </div>

                <div className="section">
                    <div className="command">
                        > github
                    </div>
                    <div className="line">
                        "<a rel="noopener noreferrer" href="https://github.com/codermarcel">https://github.com/codermarcel</a>"
                    </div>
                </div>


                <div className="section">
                    <div className="command">
                        > <span className="cmd-blink">&nbsp;</span>
                    </div>
                    <div className="line">
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Terminal;
