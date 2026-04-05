import { faEgg } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//@ts-ignore
import '../assets/style/easteregg.css';

export default function EasterEgg() {
    return (
        <div className="easter-egg">
            <span><FontAwesomeIcon icon={faEgg} shake/></span>
        </div>
    );
}