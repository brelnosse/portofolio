import { Link } from "react-router-dom";
//@ts-ignore
import '../assets/style/mainstack.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faFlutter, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";

interface MainStackProps {
    isVisible: boolean;
}

const MainStack: React.FC<MainStackProps> = ({ isVisible }) => {
    const stackItems = [
        { icon: faJava, link: "https://github.com/brelnosse" },
        { icon: faFlutter, link: "https://www.linkedin.com/in/brel-nosse-88a3a2377/" },
        { icon: faNodeJs, link: "https://x.com/BrelNosse" },
        { icon: faReact, link: "https://www.facebook.com/profile.php?id=61568437907463" }
    ];

    return (
        <div className={`mainstack ${isVisible ? 'element-visible' : 'element-hidden'}`}>
            {stackItems.map((item, index) => (
                <Link 
                    key={index} 
                    to={item.link} 
                    target='_blank'
                    style={{ 
                        transitionDelay: `${index * 150}ms`,
                        display: 'inline-block' 
                    }}
                    className="stack-link"
                >
                    <FontAwesomeIcon icon={item.icon} />
                </Link>
            ))}
        </div>
    );
}

export default MainStack;