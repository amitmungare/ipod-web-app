// Music Component
function PlayMusic(props){
    return(
        <div id="ipod-screen-container">
            <div id="ipod-screen">
                <div style={{color: 'white', background: 'rgb(16, 140, 189)', textAlign: 'center', padding: 2}}><b>Music</b></div>
                <ul>
                    <li className={props.activeMenu === "allSongs" ? 'activeMenu': ''}>All Songs</li>
                    <li className={props.activeMenu === "artists" ? 'activeMenu': ''}>Artists</li>
                    <li className={props.activeMenu === "albums" ? 'activeMenu': ''}>Albums</li>
                </ul>
            </div>
        </div>
    );
}

export default PlayMusic;