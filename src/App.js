import React from "react";
import IpodMenuWheel from "./screen/IpodMenu";
import MainScreen from "./screen/MainScreen";
import ZingTouch from 'zingtouch';

// App Component class
class App extends React.Component {

  constructor() {
    super();

    // State of Component
    this.state = {
      activeMenu: 'coverflow',
      subMenu: false,
      clicked: {
        coverflow: false, music: false, games: false, settings: false, allSongs: false, artists: false, albums: false,
      }
    }
  }

  //State change based on the activeMenu State
  handleMenuClick = () => {
    const { activeMenu, subMenu } = this.state;

    //Set to coverflow
    if (activeMenu === 'coverflow') {
      this.setState({
        clicked: {
          coverflow: true
        }
      })
    }

    //Set to music
    if (activeMenu === 'music') {
      this.setState({
        subMenu: true,
        activeMenu: 'allSongs',
        clicked: {
          music: true
        }
      })
    }

    //Set to games
    if (activeMenu === 'games') {
      this.setState({
        clicked: {
          games: true
        }
      })
    }

    //Set to settings
    if (activeMenu === 'settings') {
      this.setState({
        clicked: {
          settings: true
        }
      })
    }

    //Set to settings
    if (activeMenu === 'allSongs' && subMenu) {
      this.setState({
        clicked: {
          allSongs: true
        }
      })
    }

    //Set to settings
    if (activeMenu === 'albums' && subMenu) {
      this.setState({
        clicked: {
          albums: true
        }
      })
    }

    //Set to settings
    if (activeMenu === 'artists' && subMenu) {
      this.setState({
        clicked: {
          artists: true
        }
      })
    }
  }

  //Reset All State 
  handleMainMenuClick = () => {
    this.setState({
      subMenu: false,
      activeMenu: 'coverflow',
      clicked: {
        coverflow: false, music: false, games: false, settings: false, allSongs: false, artists: false, albums: false,
      }
    })
  }

  //Handling the Wheel
  handleMenuChange = () => {
    const { subMenu } = this.state;

    //Get Element
    let containerElement = document.getElementById('menu-wheel');
    let activeRegion = ZingTouch.Region(containerElement);
    let angle = 0;

    //Listen to rotate event on the ActiveRegion
    activeRegion.bind(containerElement, 'rotate', (e) => {
      angle = angle + e.detail.distanceFromLast;

      if (!subMenu) {
        // State to coverflow 
        if ((angle <= 60 && angle >= 0) || (angle <= 0 && angle > -60)) {
          this.setState((prevState) => {
            if (!prevState.subMenu) {
              return {
                activeMenu: 'coverflow'
              }
            }
          })
        }

        //State to music 
        if ((angle <= 90 && angle >= 60) || (angle <= -60 && angle > -90)) {
          this.setState((prevState) => {
            if (!prevState.subMenu) {
              return {
                activeMenu: 'music'
              }
            }
          })
        }

        // games to coverflow 
        if ((angle <= 120 && angle >= 90) || (angle <= -90 && angle > -120)) {
          this.setState((prevState) => {
            if (!prevState.subMenu) {
              return {
                activeMenu: 'games'
              }
            }
          })
        }

        //State to settings 
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
        //State to coverflow 
        if ((angle <= 60 && angle >= 0) || (angle <= 0 && angle > -60)) {
          this.setState((prevState) => {
            if (prevState.subMenu) {
              return {
                activeMenu: 'allSongs'
              }
            }
          })
        }

        //State to music 
        if ((angle <= 120 && angle >= 60) || (angle <= -60 && angle > -120)) {
          this.setState((prevState) => {
            if (prevState.subMenu) {
              return {
                activeMenu: 'artists'
              }
            }
          })
        }

        //games to coverflow 
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
    const { activeMenu, subMenu } = this.state;

    return (
      <div id="ipod-container">
        {/* Pass Active Menu State */}
          <MainScreen 
              clicked={this.state.clicked} 
              activeMenu={activeMenu} 
              subMenu={subMenu}>
          </MainScreen>
          
          {/* Pass Active Menu State and Menu Changer function  */}
          <IpodMenuWheel 
              activeMenu={activeMenu} 
              setActiveMenu={this.handleMenuChange} 
              clickMenu={this.handleMenuClick} 
              clickMainMenu={this.handleMainMenuClick}>
          </IpodMenuWheel>
      </div>
    );
  }
}

export default App;
