import Button from "./Button";
import { useEffect, useState } from "react";
//@ts-ignore
import '../assets/style/hero.css';
//@ts-ignore
import { MenuItems } from "../data/menuItems";

const Hero: React.FC = () => {
    const name = "Brel nosse";
    const [showH3, setShowH3] = useState<boolean>(false);
    const [showIm, setShowIm] = useState<boolean>(false);
    const [visibleLetters, setVisibleLetters] = useState<number>(0);
    const [showLine, setShowLine] = useState<boolean>(false);
    const [showH4Text, setShowH4Text] = useState<boolean>(false);
    const [showButton1, setShowButton1] = useState<boolean>(false);
    const [showButton2, setShowButton2] = useState<boolean>(false);
    const [showImage, setShowImage] = useState<boolean>(false);

    useEffect(() => {
        // Calculer le temps total de l'animation de la navbar
        const navbarAnimationTime = 50 + (MenuItems.length * 150) + 200 + 300;

        // 1. H3 "Hi, There" appears after navbar animation
        const h3Timer = setTimeout(() => {
            setShowH3(true);
        }, navbarAnimationTime);

        // 2. "I'm" appears
        const imTimer = setTimeout(() => {
            setShowIm(true);
        }, navbarAnimationTime + 500);

        // 3. H1 name letters appear one by one (plus lentement)
        const nameStartDelay = setTimeout(() => {
            const interval = setInterval(() => {
                setVisibleLetters(prev => {
                    if (prev >= name.length) {
                        clearInterval(interval);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 120); // Ralenti de 100ms à 120ms

            return () => clearInterval(interval);
        }, navbarAnimationTime + 900); // After "I'm" appears + 400ms

        // 4. Line appears after name completes
        const lineDelay = setTimeout(() => {
            setShowLine(true);
        }, navbarAnimationTime + 900 + (name.length * 120) + 300);

        // 5. H4 text appears after line
        const h4TextDelay = setTimeout(() => {
            setShowH4Text(true);
        }, navbarAnimationTime + 900 + (name.length * 120) + 300 + 900);

        // 6. First button appears
        const button1Delay = setTimeout(() => {
            setShowButton1(true);
        }, navbarAnimationTime + 900 + (name.length * 120) + 300 + 900 + 500);

        // 7. Second button appears
        const button2Delay = setTimeout(() => {
            setShowButton2(true);
        }, navbarAnimationTime + 900 + (name.length * 120) + 300 + 900 + 500 + 200);

        // 8. Image appears last
        const imageDelay = setTimeout(() => {
            setShowImage(true);
        }, navbarAnimationTime + 900 + (name.length * 120) + 300 + 900 + 500 + 200 + 300);

        return () => {
            clearTimeout(h3Timer);
            clearTimeout(imTimer);
            clearTimeout(nameStartDelay);
            clearTimeout(lineDelay);
            clearTimeout(h4TextDelay);
            clearTimeout(button1Delay);
            clearTimeout(button2Delay);
            clearTimeout(imageDelay);
        };
    }, []);

    return (
        <section className="hero">
            <div className="heroDescription">
                <h3 className={`hero-h3 ${showH3 ? 'element-visible' : 'element-hidden'}`}>
                    Hi, There
                </h3>
                <h1>
                    <span className={`hero-im ${showIm ? 'element-visible' : 'element-hidden'}`}>
                        I'm{' '}
                    </span>
                    <span className="primary">
                        {name.split('').map((letter, index) => (
                            <span
                                key={index}
                                className={`letter ${index < visibleLetters ? 'letter-visible' : 'letter-hidden'}`}
                            >
                                {letter === ' ' ? '\u00A0' : letter}
                            </span>
                        ))}
                    </span>
                </h1>
                <h4>
                    <span className={`hero-line ${showLine ? 'line-visible' : 'line-hidden'}`}></span>
                    <span className={`hero-h4-text ${showH4Text ? 'element-visible' : 'element-hidden'}`}>
                        fullstack web & mobile app developer
                    </span>
                </h4>
                <div className="actions">
                    <div className={`button-wrapper ${showButton1 ? 'button-visible' : 'button-hidden'}`}>
                        <Button type='default' valueText='Download cv'/>
                    </div>
                    <div className={`button-wrapper ${showButton2 ? 'button-visible' : 'button-hidden'}`}>
                        <Button type='light' valueText='Download portofolio'/>
                    </div>
                </div>
            </div>
            <div className={`heroImg ${showImage ? 'image-visible' : 'image-hidden'}`}>
                <img src={require('../assets/images/square.png')} alt="squares" style={{height: '80px', width: '100px'}} className='s'/>
                <img src={require('../assets/images/d.webp')} alt="brel nosse" className='profil'/>
                <img src={require('../assets/images/star.png')} alt="star" style={{height: '120px', width: '120px'}} className='r'/>
            </div>
        </section>
    );
}

export default Hero;