import Underlined from "./Underlined";
import '../assets/style/about.css';

const About:React.FC = () => {
    return (
        <div className="aboutme">
            <Underlined text='About me'/>
            <div className="aboutContainer">
                <div className="profileCaption">
                    <div className="pc-description">
                        <h3>Brel nosse</h3>
                        <h4>UI/UX Designer - fullstack developer</h4>
                    </div>
                    <div className="pc-img">
                    </div>
                </div>
                <div className="profileDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quaerat omnis fugit nisi iste minima, at ab natus animi dolores illum sed esse nam doloremque nobis dolore voluptatibus cupiditate unde.
                </div>
            </div>
        </div>
    );
}
export default About;