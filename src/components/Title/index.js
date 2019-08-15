import React from "react";
import "./style.css";

function Title(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{props.title}</h1>
                <p className="lead"><strong>SCORE: </strong>{props.score} <strong>HIGH SCORE: </strong>{props.highscore}</p>
            </div>
        </div>
    );
}

export default Title;