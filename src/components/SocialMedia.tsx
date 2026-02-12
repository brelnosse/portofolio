import { faGithub, faLinkedin, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
//@ts-ignore
import '../assets/style/socialMedia.css';
import { HTMLAttributes } from "react";

const SocialMedia:React.FC<HTMLAttributes<HTMLDivElement>> = ({...props}) => {
    return (
        <div className="socialsContainer" {...props}>
            <Link to={"https://github.com/brelnosse"} target='_blank'>
                <FontAwesomeIcon icon={faGithub}/>
            </Link>
            <Link to={"https://www.linkedin.com/in/brel-nosse-88a3a2377/"} target='_blank'>
                <FontAwesomeIcon icon={faLinkedin}/>
            </Link>
            <Link to={"https://x.com/BrelNosse"} target='_blank'>
                <FontAwesomeIcon icon={faTwitter}/>
            </Link>
            <Link to={"https://www.facebook.com/profile.php?id=61568437907463"} target='_blank'>
                <FontAwesomeIcon icon={faFacebook}/>
            </Link>
        </div>
    );
} 
export default SocialMedia;