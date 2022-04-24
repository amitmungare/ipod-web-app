// Import Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faForward} from "@fortawesome/free-solid-svg-icons"
import {faPlay} from "@fortawesome/free-solid-svg-icons"
import {faPause} from "@fortawesome/free-solid-svg-icons"

// Menu Wheel Functional
function IpodMenuWheel(props) {
    return (
        <div id='wheel-container'>
            <div id="menu-wheel" onClick={() => props.setActiveMenu()}>
                <div id="menu" onClick={props.clickMainMenu}>Menu</div>
                <div id='left-play-back'>
                <FontAwesomeIcon icon={faForward} />
                </div>
                <div id='right-play-back'>
                <FontAwesomeIcon icon={faForward} />
                </div>
                <div id='play-pause'>
                <FontAwesomeIcon icon={faPlay} />
                <FontAwesomeIcon icon={faPause} />
                </div>
            </div>
            <div id="submit-btn" onClick={props.clickMenu}><h5>Select</h5></div>
        </div>
    );
}

export default IpodMenuWheel;