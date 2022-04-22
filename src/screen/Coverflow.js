import React from 'react';

class Coverflow extends React.Component
{
    render()
    {
        return (
            <div className="screen-coverflow">
                <h1>Cover Flow</h1>
                <div>
                <img className="cf-img img-size" style={{height:'240px', width:'240px'}}></img>
                </div>
            </div>
        );
    }
};

export default Coverflow;