import Underlined from "./Underlined";
//@ts-ignore
import '../assets/style/about.css';
import { useRef } from "react";
import { useSection } from "../hooks/useSection";

const About:React.FC = () => {
    const AboutRef = useRef<HTMLElement>(null);
    useSection(AboutRef, 'about me');
    return (
        <section className="aboutme" ref={AboutRef}>
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
        </section>
    );
}
export default About;