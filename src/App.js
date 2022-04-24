import React from "react";
import IpodMenuWheel from "./screen/IpodMenu";
import MainScreen from "./screen/MainScreen";
import ZingTouch from 'zingtouch';

// App Component
class App extends React.Component {

  // Constructor of Component
  constructor() {
    super();

    // State of Component
    this.state = {
      activeMenu: 'coverflow',
      subMenu: false,
      clicked: {
        coverflow: false,
        music: false,
        games: false,
        settings: false,
        allSongs: false,
        artists: false,
        albums: false,
      }
    }
  }

  //Change Clicked State based on the activeMenu State
  handleMenuClick = () => {
    const { activeMenu, subMenu } = this.state;

    //Set Clicked to coverflow
    if (activeMenu === 'coverflow') {
      this.setState({
        clicked: {
          coverflow: true
        }
      })
    }

    //Set Clicked to music
    if (activeMenu === 'music') {
      this.setState({
        subMenu: true,
        activeMenu: 'allSongs',
        clicked: {
          music: true
        }
      })
    }

    //Set Clicked to games
    if (activeMenu === 'games') {
      this.setState({
        clicked: {
          games: true
        }
      })
    }

    //Set Clicked to settings
    if (activeMenu === 'settings') {
      this.setState({
        clicked: {
          settings: true
        }
      })
    }

    //Set Clicked to settings
    if (activeMenu === 'allSongs' && subMenu) {
      this.setState({
        clicked: {
          allSongs: true
        }
      })
    }

    //Set Clicked to settings
    if (activeMenu === 'albums' && subMenu) {
      this.setState({
        clicked: {
          albums: true
        }
      })
    }

    //Set Clicked to settings
    if (activeMenu === 'artists' && subMenu) {
      this.setState({
        clicked: {
          artists: true
        }
      })
    }
  }

  //Reset All State on Clicking the main menu
  handleMainMenuClick = () => {
    this.setState({
      subMenu: false,
      activeMenu: 'coverflow',
      clicked: {
        coverflow: false,
        music: false,
        games: false,
        settings: false,
        allSongs: false,
        artists: false,
        albums: false,
      }
    })
  }

  //Handling the rotate on the Wheel
  handleMenuChange = () => {
    const { subMenu } = this.state;

    //Get the Wheel Menu Element
    let containerElement = document.getElementById('menu-wheel');

    //Mark it as the Region for ZingTouch
    let activeRegion = ZingTouch.Region(containerElement);
    let angle = 0;

    //Listen to rotate event on the ActiveRegion, and based on the angle, change the active menu
    activeRegion.bind(containerElement, 'rotate', (e) => {
      //Get the distance
      angle = angle + e.detail.distanceFromLast;

      if (!subMenu) {
        //Change the State to coverflow on meeting the conditions
        if ((angle <= 60 && angle >= 0) || (angle <= 0 && angle > -60)) {
          this.setState((prevState) => {
            if (!prevState.subMenu) {
              return {
                activeMenu: 'coverflow'
              }
            }
          })
        }

        //Change the State to music on meeting the conditions
        if ((angle <= 90 && angle >= 60) || (angle <= -60 && angle > -90)) {
          this.setState((prevState) => {
            if (!prevState.subMenu) {
              return {
                activeMenu: 'music'
              }
            }
          })
        }

        //Change the games to coverflow on meeting the conditions
        if ((angle <= 120 && angle >= 90) || (angle <= -90 && angle > -120)) {
          this.setState((prevState) => {
            if (!prevState.subMenu) {
              return {
                activeMenu: 'games'
              }
            }
          })
        }

        //Change the State to settings on meeting the conditions
        if ((angle <= 180 && angle >= 120) || (angle <= -120 && angle > -180)) {
          this.setState((prevState) => {
            if (!prevState.subMenu) {
              return {
                activeMenu: 'settings'
              }
            }
          })
        }
      }

      if (subMenu) {
        //Change the State to coverflow on meeting the conditions
        if ((angle <= 60 && angle >= 0) || (angle <= 0 && angle > -60)) {
          this.setState((prevState) => {
            if (prevState.subMenu) {
              return {
                activeMenu: 'allSongs'
              }
            }
          })
        }

        //Change the State to music on meeting the conditions
        if ((angle <= 120 && angle >= 60) || (angle <= -60 && angle > -120)) {
          this.setState((prevState) => {
            if (prevState.subMenu) {
              return {
                activeMenu: 'artists'
              }
            }
          })
        }

        //Change the games to coverflow on meeting the conditions
        if ((angle <= 180 && angle >= 120) || (angle <= -120 && angle > -180)) {
          this.setState((prevState) => {
            if (prevState.subMenu) {
              return {
                activeMenu: 'albums'
              }
            }
          })
        }
      }
    })
  }

  // Rendering the Component
  render() {
    // Get Active Menu from State
    const { activeMenu, subMenu } = this.state;

    return (
      <div id="ipod-container">
        {/* Pass Active Menu State to IpodScreen Component */}
        <MainScreen clicked={this.state.clicked} activeMenu={activeMenu} subMenu={subMenu}></MainScreen>
        {/* Pass Active Menu State and Menu Changer function to IpodMenuWheel Component */}
        <IpodMenuWheel activeMenu={activeMenu} setActiveMenu={this.handleMenuChange} clickMenu={this.handleMenuClick} clickMainMenu={this.handleMainMenuClick}></IpodMenuWheel>
      </div>
    );
  }
}

export default App;

