import Music from "./PlayMusic";
import Games from "./Games";
import Settings from "./Setting";
import Coverflow from "./Coverflow";
import AllSongs from "./AllSongs";
import Albums from "./Albums";
import Artists from "./Artists";

// Main Screen Component
function MainScreen(props) {

    // Destructuring the Props
    const { coverflow, music, games, settings, allSongs, artists, albums } = props.clicked;

    //If Coverflow is clicked, load the coverflow component
    if (coverflow) {
        return (
            <Coverflow></Coverflow>
        );
    }

    //If Music is clicked, load the music component
    if (music) {
        return (
            <Music activeMenu={props.activeMenu}></Music>
        );
    }

    //If Games is clicked, load the games component
    if (games) {
        return (
            <Games></Games>
        );
    }

    //If settings is clicked, load the settings component
    if (settings) {
        return (
            <Settings></Settings>
        );
    }

    //If allSongs is Clicked, load the allSongs Component
    if (allSongs) {
        return (
            <AllSongs></AllSongs>
        );
    }

    //If albums is clicked, load the albums component
    if (albums) {
        return (
            <Albums></Albums>
        );
    }

    //If artists is clicked, load the artists component
    if (artists) {
        return (
            <Artists></Artists>
        );
    }

    //If no menu is clicked, load the main component
    if (!coverflow && !music && !games && !settings && !allSongs && !artists && !albums) {
        return (
            <div id="ipod-screen-container">
                <div id="ipod-screen">
                    <b style={{ color: 'white' }}>Menu</b>
                    <ul>
                        <li className={props.activeMenu === "coverflow" ? 'activeMenu' : ''}>Coverflow</li>
                        <li className={props.activeMenu === "music" ? 'activeMenu' : ''}>Music</li>
                        <li className={props.activeMenu === "games" ? 'activeMenu' : ''}>Games</li>
                        <li className={props.activeMenu === "settings" ? 'activeMenu' : ''}>Settings</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MainScreen;