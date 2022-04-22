import React from 'react';
import Menu from './screen/Menu';
import Game from './screen/Games';
import Setting from './screen/Setting';
import Coverflow from './screen/Coverflow';
/* music */
import AllSongs from './screen/AllSongs';
import Artists from './screen/Artists';
import Albums from './screen/Albums';

class Screen extends React.Component
{
    render()
    {
        return (
            <div className="screen-container">
                <Menu
                    selectedOption={this.props.selectedOption}
                    optionsInMenu={this.props.optionsInMenu}
                />
                {this.props.showPage === 0 && this.props.optionsInMenu.length === 4 ? <Game /> : ''}
                {this.props.showPage === 2 && this.props.optionsInMenu.length === 4 ? <Setting /> : ''}
                {this.props.showPage === 3 && this.props.optionsInMenu.length === 4 ? <Coverflow /> : ''}

                {this.props.showPage === 0 && this.props.optionsInMenu.length === 3 ? <AllSongs
                currentMusicSelection={this.props.currentMusicSelection}
                songIndex={this.props.songIndex}
                currentlyOnPlayMusicScreen={this.props.currentlyOnPlayMusicScreen}
                playPauseButtonClicked={this.props.playPauseButtonClicked}
                /> : ''}
                {this.props.showPage === 1 && this.props.optionsInMenu.length === 3 ? <Artists /> : ''}
                {this.props.showPage === 2 && this.props.optionsInMenu.length === 3 ? <Albums /> : ''}
            </div>
        );
    }

}

export default Screen;