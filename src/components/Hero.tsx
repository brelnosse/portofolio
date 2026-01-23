import Button from "./Button";
import { useEffect, useState } from "react";
//@ts-ignore
import '../assets/style/hero.css';

const Hero: React.FC = () => {
    const name = "Brel nosse";
    const [visibleLetters, setVisibleLetters] = useState<number>(0);
    const [showLine, setShowLine] = useState<boolean>(false);

    useEffect(() => {
        // Start name animation after a small delay
        const startDelay = setTimeout(() => {
            const interval = setInterval(() => {
                setVisibleLetters(prev => {
                    if (prev >= name.length) {
                        clearInterval(interval);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 100); // 100ms between each letter

            return () => clearInterval(interval);
        }, 500); // Wait 500ms before starting

        // Start line animation after name animation completes
        const lineDelay = setTimeout(() => {
            setShowLine(true);
        }, 500 + (name.length * 100) + 200); // After name completes + 200ms

        return () => {
            clearTimeout(startDelay);
            clearTimeout(lineDelay);
        };
    }, []);

    return (
        <section className="hero">
            <div className="heroDescription">
                <h3>Hi, There</h3>
                <h1>
                    I'm{' '}
                    <span className="primary">
                        {name.split('').map((letter, index) => (
                            <span
                                key={index}
                                className={`letter ${index < visibleLetters ? 'letter-visible' : 'letter-hidden'}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {letter === ' ' ? '\u00A0' : letter}
                            </span>
                        ))}
                    </span>
                </h1>
                <h4>
                    <span className={`hero-line ${showLine ? 'line-visible' : 'line-hidden'}`}></span>
                    fullstack web & mobile app developer
                </h4>
                <div className="actions">
                    <Button type='default' valueText='Download cv'/>
                    <Button type='light' valueText='Download portofolio'/>
                </div>
            </div>
            <div className="heroImg">
                <img src={require('../assets/images/square.png')} alt="squares" style={{height: '80px', width: '100px'}} className='s'/>
                <img src={require('../assets/images/d.webp')} alt="brel nosse" className='profil'/>
                <img src={require('../assets/images/star.png')} alt="star" style={{height: '120px', width: '120px'}} className='r'/>
            </div>
        </section>
    );
}

export default Hero;