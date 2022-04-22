
import React from 'react';
import './App.css';
import Buttons from './Button';
import Screen from './Screen';
import ZingTouch from 'zingtouch';
import 'lodash';
import $ from 'jquery';

class App extends React.Component {

  constructor(){
    super();
        this.temp_change_in_angle = 0;
        this.temp_selected = 0;
        this.state = {
            options: ['Games', 'Music', 'Setting', 'CoverFlow'],
            change_in_angle: 0,
            selected: 0,
            showPage: -1,
            general_menu: ['Games', 'Music', 'Setting', 'Cover Flow'],
            songs_sub_menu: ['All Songs', 'Artist', 'Album'],
            current_music_selection: 0,
            song_index: -1,
            currently_on_play_music_screen: false,
        }
  }


  componentDidMount()
    {
        var zt = new ZingTouch.Region(document.getElementsByClassName('buttons-container')[0]);
        zt.bind(document.getElementsByClassName('buttons-container')[0], 'rotate', (event) =>
        {
          // only be available when the side bar is shown to the user.
            if (document.getElementsByClassName('screen-menu')[0].classList.contains('width-50'))
            {
                let dist = event.detail.distanceFromLast;
                this.temp_change_in_angle += dist;
                if (this.temp_change_in_angle > 60)
                {
                    this.temp_selected++;
                    this.temp_selected = this.temp_selected % this.state.options.length;
                    this.setState({
                        selected: this.temp_selected,
                        // song_index: -1
                    });

                    this.temp_change_in_angle = 0;
                }
                else if (this.temp_change_in_angle < -60)
                {
                    this.temp_selected--;
                    if (this.temp_selected === -1)
                        this.temp_selected = this.state.options.length - 1;

                    this.temp_selected = this.temp_selected % this.state.options.length;
                    this.setState({
                        selected: this.temp_selected,
                        // song_index: -1
                    });
                    this.temp_change_in_angle = 0;
                }
            }

        });
    }

    menuButtonClicked = () =>{
        let screenMenuClassList = document.getElementsByClassName('screen-menu')[0].classList;
        if (screenMenuClassList.contains('width-50')){
          //hide menu
            $('.screen-menu').removeClass('width-50');
        }else{
          //show menu
            $('.screen-menu').addClass('width-50');
        }
    }

    selectButtonClicked = () =>{
        if(this.state.currently_on_play_music_screen&&!document.getElementsByClassName('screen-menu')[0].classList.contains('width-50')){
            return;
        }
        if (this.state.selected === 1 && this.state.options.length === 4){
            this.setState({
                    options: this.state.songs_sub_menu,
                    selected: 0,
                    showPage: -1,
                    song_index: -1,
                }
            );
            this.temp_selected = 0;
            return;
        }
        if (!document.getElementsByClassName('screen-menu')[0].classList.contains('width-50')){
          //on the music section
            if (this.state.options.length === 3){
              // all songs
                if (this.state.showPage === 0){
                  // not on the music page
                    if (this.state.song_index === -1){
                        this.setState({
                          // song to be played 
                            song_index: this.state.current_music_selection,
                        });
                        this.temp_selected = 0;
                        return;
                    }

                }
            }
        }
        this.setState({
            showPage: this.state.selected,
            song_index: -1,
            selected: 0,
        });
        this.temp_selected = 0;
        this.menuButtonClicked();
    }


    // left button 
    leftButtonClicked = () =>{
        
        if (this.state.currently_on_play_music_screen){
            if (!document.getElementsByClassName('screen-menu')[0].classList.contains('width-50')){
                if ($('#audio')[0] !== undefined){
                    $('.buttons-container').removeClass('colored');
                }
                if (this.state.song_index === 0){
                    this.setState({
                        song_index: 5
                    });
                    return;
                }
                if (this.state.song_index !== -1){
                    this.setState({
                        song_index: this.state.song_index - 1
                    });
                    return;
                }
            }
        }

        // open general option 
        if (this.state.options.length === 3 && document.getElementsByClassName('screen-menu')[0].classList.contains('width-50'))
            this.setState(
                {
                    options: this.state.general_menu,
                    song_index: -1,
                    selected: 0
                }
            );
            // menu is not visible
        if (!document.getElementsByClassName('screen-menu')[0].classList.contains('width-50')){
            if (this.state.options.length === 3){
                if (this.state.showPage === 0){
                    if (this.state.current_music_selection === 0)
                        this.setState({
                            current_music_selection: 5,
                            song_index: -1
                        });
                    else
                        this.setState({
                            current_music_selection: this.state.current_music_selection - 1,
                            song_index: -1
                        });
                }
            }
        }
    }

    // right button 
    rightButtonClicked = () =>{
        if (this.state.currently_on_play_music_screen){
            if (!document.getElementsByClassName('screen-menu')[0].classList.contains('width-50')){
                if ($('#audio')[0] !== undefined){
                    $('.buttons-container').removeClass('colored');
                }
                //next song
                if (this.state.song_index === 5){
                    this.setState({
                        song_index: 0
                    });
                    return;
                }
                if (this.state.song_index !== -1){
                    this.setState({
                        song_index: this.state.song_index + 1
                    });
                    return;
                }
            }
        }
        if (!document.getElementsByClassName('screen-menu')[0].classList.contains('width-50')){
            if (this.state.options.length === 3){
                if (this.state.showPage === 0){
                    if (this.state.current_music_selection === 5)
                        this.setState({
                            current_music_selection: 0
                        });
                    else
                        this.setState({
                            current_music_selection: this.state.current_music_selection + 1
                        });
                }
            }
        }
    }

    currentlyOnPlayMusicScreen = () =>{
        if (this.state.currently_on_play_music_screen){
            $('.buttons-container').removeClass('colored');
            this.setState({
                currently_on_play_music_screen: false
            });
        }
        else
            this.setState({
                currently_on_play_music_screen: true
            });
    }

    playPauseButtonClicked = () =>{
        if ($('#audio')[0] !== undefined){
            if ($('#audio')[0].paused){
                $('#audio')[0].play();
                $('.buttons-container').addClass('colored');
                return;
            }
            $('#audio')[0].pause();
            $('.buttons-container').removeClass('colored');
        }
    }

    rotatePod=()=>{
        $('.App').toggleClass('rotate-anti-clockwise');
        $('.buttons-container').toggleClass('rotate-clockwise');
        $('.screen-container').toggleClass('rotate-clockwise');
    }


  render(){
    return (
      <div className="App">
          <Screen
              selectedOption={this.state.selected}
              showPage={this.state.showPage}
              optionsInMenu={this.state.options}
              currentMusicSelection={this.state.current_music_selection}
              songIndex={this.state.song_index}
              currentlyOnPlayMusicScreen={this.currentlyOnPlayMusicScreen}
              playPauseButtonClicked={this.playPauseButtonClicked}

          />
          <Buttons
              check={this.checker}
              centerButton={this.centerButton}
              menuButtonClicked={this.menuButtonClicked}
              selectButtonClicked={this.selectButtonClicked}
              leftButtonClicked={this.leftButtonClicked}
              rightButtonClicked={this.rightButtonClicked}
              playPauseButtonClicked={this.playPauseButtonClicked}
          />
          <button className="rotate" onClick={this.rotatePod}>
              <i className="fas fa-undo"></i>
          </button>
      </div>
  );
  }
}

export default App;
