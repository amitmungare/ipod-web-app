import React from 'react';

class Setting extends React.Component
{
    render()
    {
        return (
            <div className="screen-setting">
                <h1>Settings</h1>
                <div>
                    <img className="setting-img img-size" style={{height:'240px', width:'240px'}}></img>
                </div>
            </div>
        );
    }
};

export default Setting;