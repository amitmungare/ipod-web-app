import React from 'react';

const Button = (props) =>
{
    return (
        <div className="buttons-container">
            <button className="center-circle" onClick={props.selectButtonClicked}>
                <h2>Select</h2>
            </button>

            <button className="menu-button" onClick={props.menuButtonClicked}>
                <img className="bar-button-i btn-size"></img>
            </button>
            <button className="left-button" onClick={props.leftButtonClicked}>
                <img className="back-button-i btn-size"></img>
            </button>
            <button className="right-button" onClick={props.rightButtonClicked}>
                <img className="forward-button-i btn-size"></img>
            </button>
            <button className="play-pause" onClick={props.playPauseButtonClicked}>
            <img className="play-button-i btn-size"></img>/ <img className="pause-button-i btn-size"></img>
            </button>
        </div>
    );
}

export default Button;