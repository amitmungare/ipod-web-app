import React from 'react';

class Game extends React.Component
{
    render()
    {
        return (
            <div className="screen-game">
                <h1>Games</h1>
                <div>
                <img className="cf-button-i img-size" style={{height:'240px', width:'240px'}}></img>
                </div>
            </div>
        );
    }
};

export default Game;