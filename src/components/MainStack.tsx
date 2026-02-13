import { Link } from "react-router-dom";
//@ts-ignore
import '../assets/style/mainstack.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faFlutter, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
const MainStack: React.FC = () =>{
    return (
        <div className='mainstack'>
            <Link to={"https://github.com/brelnosse"} target='_blank'>
                <FontAwesomeIcon icon={faJava}/>
            </Link>
            <Link to={"https://www.linkedin.com/in/brel-nosse-88a3a2377/"} target='_blank'>
                <FontAwesomeIcon icon={faFlutter}/>
            </Link>
            <Link to={"https://x.com/BrelNosse"} target='_blank'>
                <FontAwesomeIcon icon={faNodeJs}/>
            </Link>
            <Link to={"https://www.facebook.com/profile.php?id=61568437907463"} target='_blank'>
                <FontAwesomeIcon icon={faReact}/>
            </Link>   
        </div>
    );
}
export default MainStack;