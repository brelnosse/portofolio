import Button from "./Button";
import { useEffect, useRef, useState } from "react";
//@ts-ignore
import '../assets/style/hero.css';
//@ts-ignore
import { MenuItems } from "../data/menuItems";
import MainStack from "./MainStack";
import { useSection } from "../hooks/useSection";
import { fas } from "@fortawesome/free-solid-svg-icons";

const Hero: React.FC<{isFormVisible: boolean; setIsFormVisible: (v: boolean) => void;}> = ({isFormVisible, setIsFormVisible}) => {
    const name = "Brel NOSSE";
    const [showH3, setShowH3] = useState<boolean>(false);
    const [showIm, setShowIm] = useState<boolean>(false);
    const [visibleLetters, setVisibleLetters] = useState<number>(0);
    const [showLine, setShowLine] = useState<boolean>(false);
    const [showH4Text, setShowH4Text] = useState<boolean>(false);
    const [showButton1, setShowButton1] = useState<boolean>(false);
    const [showButton2, setShowButton2] = useState<boolean>(false);
    const [showImage, setShowImage] = useState<boolean>(false);
    const [showMainStack, setShowMainStack] = useState<boolean>(false);
    const heroRef = useRef<HTMLDivElement | null>(null);
    useSection(heroRef, 'hero')
    
    useEffect(() => {
        const navbarAnimationTime = 50 + (MenuItems.length * 150) + 200 + 300;

        const h3Timer = setTimeout(() => setShowH3(true), navbarAnimationTime);

        const imTimer = setTimeout(() => setShowIm(true), navbarAnimationTime + 500);

        const nameStartDelay = setTimeout(() => {
            const interval = setInterval(() => {
                setVisibleLetters(prev => {
                    if (prev >= name.length) {
                        clearInterval(interval);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 120);
            return () => clearInterval(interval);
        }, navbarAnimationTime + 900);

        const lineDelay = setTimeout(() => {
            setShowLine(true);
        }, navbarAnimationTime + 900 + (name.length * 120) + 300);

        const h4TextDelay = setTimeout(() => {
            setShowH4Text(true);
        }, navbarAnimationTime + 900 + (name.length * 120) + 300 + 900);

        const button1Delay = setTimeout(() => {
            setShowButton1(true);
        }, navbarAnimationTime + 900 + (name.length * 120) + 300 + 900 + 500);

        const button2Delay = setTimeout(() => {
            setShowButton2(true);
        }, navbarAnimationTime + 900 + (name.length * 120) + 300 + 900 + 500 + 200);

        const imageDelay = setTimeout(() => {
            setShowImage(true);
        }, navbarAnimationTime + 900 + (name.length * 120) + 300 + 900 + 500 + 200 + 300);
        const mainStackDelay = setTimeout(() => {
                setShowMainStack(true);
        }, navbarAnimationTime + 900 + (name.length * 120) + 300 + 900 + 500 + 200 + 200);
        return () => {
            clearTimeout(h3Timer);
            clearTimeout(imTimer);
            clearTimeout(mainStackDelay);
            clearTimeout(nameStartDelay);
            clearTimeout(lineDelay);
            clearTimeout(h4TextDelay);
            clearTimeout(button1Delay);
            clearTimeout(button2Delay);
            clearTimeout(imageDelay);
        };
    }, []);

    const handleDownload = () => {
        window.open(require('../assets/pdf/CV_ALT_Brel_NOSSE.pdf'), '_blank');
    };

    let currentLetterCount = 0;

    return (
        <section className="hero" ref={heroRef}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position: 'absolute', bottom: '0px'}}>
                <path fill="#2A5B69" fill-opacity="1" d="M0,160L80,170.7C160,181,320,203,480,181.3C640,160,800,96,960,101.3C1120,107,1280,181,1360,218.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
            <div className="heroDescription">
                <h3 className={`hero-h3 ${showH3 ? 'element-visible' : 'element-hidden'}`}>
                    Je suis,
                </h3>
                <h1>
                    <span className="primary">
                        {name.split(' ').map((word, wordIndex, wordsArray) => (
                            <span 
                                key={wordIndex} 
                                style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
                            >
                                {word.split('').map((letter) => {
                                    const index = currentLetterCount++;
                                    return (
                                        <span
                                            key={index}
                                            className={`letter ${index < visibleLetters ? 'letter-visible' : 'letter-hidden'}`}
                                        >
                                            {letter}
                                        </span>
                                    );
                                })}
                                {wordIndex < wordsArray.length - 1 && (
                                    <span className={`letter ${currentLetterCount++ < visibleLetters ? 'letter-visible' : 'letter-hidden'}`}>
                                        {'\u00A0'}
                                    </span>
                                )}
                            </span>
                        ))}
                    </span>
                </h1>
                <h4>
                    <span className={`hero-line ${showLine ? 'line-visible' : 'line-hidden'}`}></span>
                    <span className={`hero-h4-text ${showH4Text ? 'element-visible' : 'element-hidden'}`}>
                        Élève ingénieur en recherche d'alternance de 24 mois en dev full-stack | devOps | IoT pour septembre 2026
                    </span>
                </h4>
                <div className="actions">
                    <div className={`button-wrapper ${showButton1 ? 'button-visible' : 'button-hidden'}`}>
                        <Button type='default' valueText='Contactez-moi' onClick={()=>{
                            setIsFormVisible(true)
                        }}/>
                    </div>
                    <div className={`button-wrapper ${showButton2 ? 'button-visible' : 'button-hidden'}`}>
                        <Button 
                            type='light' 
                            onClick={handleDownload}
                            valueText='Télécharger mon CV'/>
                    </div>
                </div>
                <MainStack isVisible={showMainStack}/>
            </div>
            <div className={`heroImg ${showImage ? 'image-visible' : 'image-hidden'}`}>
                <img src={require('../assets/images/square.png')} alt="squares" style={{height: '80px', width: '100px'}} className='s'/>
                <img src={require('../assets/images/pp.webp')} alt="brel NOSSE" className='profil'/>
                <img src={require('../assets/images/star.png')} alt="star" style={{height: '120px', width: '120px'}} className='r'/>
            </div>
        </section>
    );
}

export default Hero;