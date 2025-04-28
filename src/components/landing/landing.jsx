import React from "react";
import './landing.css';
import selfie from '../../assets/headshot.jpg'
import { css, express, graphql, html, javascript, mongo, node, react, sql } from '../../assets/skills/skills';

const LandingComp = () => {
    return (
        <div className="Landing">
            
            <div className="landAbout">
                <img src={selfie} className="selfie" alt="Headshot of Vincent" />
                <div className="aboutMe">Welcome to my website! To navigate my profile and my projects, use the navigation links at the top of the page! My name is Vincent, I am a full stack web developer who is always looking to learn new skills and learn new ways to be creative with my code.
                    <br />I have worked with code for several years starting with a job I worked with Bridgeport Caribe Youth Leaders. We combined ESports and Coding into a fun and educational afterschool program for middle and high school students. We taught them how to use the GameMaker Engine, and we used the Codementum program to teach them the structure of JavaScript and Python.
                    <br />I found that I had a passion for coding while in that position, and decided to pursue a career in web development. I have since graduated from the Rutgers University Coding Bootcamp, and I am now looking for a position where I can continue to grow and learn as a developer.
                    <br />I have experience with HTML, CSS, JavaScript, Node.js, Express, SQL, MongoDB, GraphQL, and React. Both front end and back end work are quite enjoyable for me, and I am open to moving in any new direction in my journey with code.
                </div>
            </div>
            <ul className="skills">
                <li>
                    <img src={html} alt="HTML" />
                    <span>HTML</span>
                </li>
                <li>
                    <img src={css} alt="CSS" />
                    <span>CSS</span>
                </li>
                <li>
                    <img src={javascript} alt="Javascript" />
                    <span>Javascript</span>
                </li>
                <li>
                    <img src={node} alt="Node.js" />
                    <span>Node.js</span>
                </li>
                <li>
                    <img src={express} alt="Express" />
                    <span>Express</span>
                </li>
                <li>
                    <img src={sql} alt="SQL" />
                    <span>SQL</span>
                </li>
                <li>
                    <img src={mongo} alt="MongoDB" />
                    <span>MongoDB</span>
                </li>
                <li>
                    <img src={graphql} alt="GraphQL" />
                    <span>GraphQL</span>
                </li>
                <li>
                    <img src={react} alt="React" />
                    <span>React</span>
                </li>
            </ul>
            <div className="feature">
                <img src="src/assets/nomadnotes.png" alt="Feature" />
                <div className="featureText">
                    <h2>Here is a project that I am very proud of- Nomad Notes</h2>
                    <p>https://nomadnotes-3v1b.onrender.com/</p>
                    <p>This project features the ability to track potential and past trips and vacations. Users create a profile complete with encrypted passwords, and from there they can easily log trips with dates included.</p>
                </div>
            </div>
        </div >
    );
}

export default LandingComp;