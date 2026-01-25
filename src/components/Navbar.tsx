import { Link, useLocation } from "react-router-dom";
//@ts-ignore
import '../assets/style/navbar.css';
import Button from "./Button";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
//@ts-ignore
import { MenuItems } from "../data/menuItems";
import { MenuItemType, NavbarProps } from "../types/navbar.types";
import { fas } from '@fortawesome/free-solid-svg-icons';
//@ts-ignore
import 'animate.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COLORS } from "../utils/colors";
import { SectionContext } from "../context/SectionContext";

const NavbarItem: React.FC<MenuItemType & { animationDelay: number; isResponsive: boolean; isClosing: boolean;     activeSection : string; 
    setActiveSection : (b: string) => void;}> = ({ 
    icon, 
    displayText, 
    animationDelay,
    isResponsive,
    isClosing ,
    activeSection,
    setActiveSection
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);
    const liRef = useRef<HTMLLIElement>(null);

    const handleClick = () => {
        const sectionClassName = displayText.toLowerCase().trim() === 'home' ? 'hero' : displayText.toLowerCase().trim() ;
        const section = document.querySelector('.'+sectionClassName);

        if(section)
        window.scrollTo({
            behavior: 'smooth',
            top: section?.getBoundingClientRect().y + window.scrollY
        });

    }
    useEffect(()=>{
        if(!liRef.current) return;
        // const liElem = liRef.current as HTMLElement;
    })
    useEffect(() => {
        if (isClosing) {
            setIsAnimated(true);
            const timer = setTimeout(() => {
                setIsAnimated(false);
            }, animationDelay);
            return () => clearTimeout(timer);
        } else {
            setIsAnimated(false);
            const timer = setTimeout(() => {
                setIsAnimated(true);
            }, animationDelay);
            return () => clearTimeout(timer);
        }
    }, [animationDelay, isClosing]);

    const isActive = useCallback((current: string): string => {
        return (current.trim().toLocaleLowerCase() === activeSection.trim().toLocaleLowerCase() ? ' active' : '');
    }, [activeSection]);

    return (
        <li 
            ref={liRef}
            className={`navbar-item${isActive(displayText)} ${isHovered && 'isHovered'} ${isAnimated ? (isResponsive ? 'item-visible-responsive' : 'item-visible') : (isResponsive ? 'item-hidden-responsive' : 'item-hidden')}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}>
            <span>
                <FontAwesomeIcon icon={icon} color={COLORS.primaryColor}/>
            </span>
            <b>{displayText}</b>
        </li>
    );
}

const Navbar: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [showTitle, setShowTitle] = useState<boolean>(false);
    const [showButton, setShowButton] = useState<boolean>(false);
    const [isResponsive, setIsResponsive] = useState<boolean>(false);
    const [menuKey, setMenuKey] = useState<number>(0);
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const context = useContext(SectionContext);

    useEffect(() => {
        // Show title first
        const titleTimer = setTimeout(() => {
            setShowTitle(true);
        }, 50);

        // Show button after all menu items
        const buttonTimer = setTimeout(() => {
            setShowButton(true);
        }, 50 + (MenuItems.length * 150) + 200);

        return () => {
            clearTimeout(titleTimer);
            clearTimeout(buttonTimer);
        };
    }, []);

    useEffect(() => {
        const checkResponsive = () => {
            if (window.innerWidth <= 915) {
                setIsVisible(false);
                setIsResponsive(true);
            } else {
                setIsVisible(true);
                setIsResponsive(false);
            }
        };
        
        checkResponsive();
        
        const handleResize = (): void => {
            checkResponsive();
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleShowMenu = (): void => {
        if (isVisible && isResponsive) {
            // If closing the menu
            setIsClosing(true);
            // Wait for animations to complete before hiding
            setTimeout(() => {
                setIsVisible(false);
                setIsClosing(false);
            }, MenuItems.length * 100 + 200);
        } else {
            // If opening the menu
            setIsClosing(false);
            setIsVisible(true);
            setMenuKey(prev => prev + 1);
        }
    }

    return (
        <nav className="navbar-container">
            <h2 className={`navbar-title ${showTitle ? 'title-visible' : 'title-hidden'}`}>
                Portofolio
            </h2>
            <ul className={`navbar-item_container ${isVisible ? 'show' : 'hide'}`}>
                <div className="r-nav-header">
                    <h2>Portofolio</h2>
                    <span className="close-r-menu"></span>
                </div>
                {
                    MenuItems.map((el: MenuItemType, i: number) => {
                        // For closing, reverse the order of delays
                        const delay = isClosing 
                            ? (MenuItems.length - 1 - i) * 100 
                            : (isResponsive ? i * 100 : 100 + (i + 1) * 150);
                        
                        return (
                            <NavbarItem 
                                icon={el.icon} 
                                path={el.path} 
                                displayText={el.displayText} 
                                animationDelay={delay}
                                isResponsive={isResponsive}
                                isClosing={isClosing}
                                activeSection={context.activeSection}
                                setActiveSection={context.setActiveSection}
                                key={`${el.path + i + menuKey}`}
                            />
                        );
                    })
                }
                <li className={`action ${showButton ? 'button-visible' : 'button-hidden'}`}>
                    <Button 
                        type="default" 
                        valueText="Contact Me" 
                        textStyle="bold" 
                        style={{ margin: '10px 0px' }}
                    />
                </li>
            </ul>
            <div className="navbar-actions_container">
                <Button 
                    type="default" 
                    valueText="Contact Me" 
                    textStyle="bold" 
                    id="contactMeNavbtn"
                />
                <Button 
                    type="default" 
                    valueIcon={isVisible ? fas.faTimes : fas.faBars} 
                    id="responsive-action" 
                    onClick={handleShowMenu} 
                    style={{ zIndex: '999', position: 'relative' }}
                />
            </div>
        </nav>
    );
}

export default Navbar;