import { Link, useLocation } from "react-router-dom";
//@ts-ignore
import '../assets/style/navbar.css';
import Button from "./Button";
import { useEffect,  useState } from "react";
//@ts-ignore
import { MenuItems } from "../data/menuItems";
import { MenuItemType } from "../types/navbar.types";
import {fas} from '@fortawesome/free-solid-svg-icons';
//@ts-ignore
import 'animate.css';

const NavbarItem:React.FC<MenuItemType> = ({path, displayText}) => {
    const location = useLocation();

    const isActive = (current: string): string =>{
        return (current === location.pathname ? 'active' : '');
    }

    return (
        <li className={`navbar-item ${isActive(path)} animate__animated animate__fadeInDown`}><Link to={path}>{displayText}</Link></li>
    );
}

const Navbar: React.FC = () =>{
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(()=>{
        if(window.innerWidth <= 915){
            setIsVisible(false)
        }else{
            setIsVisible(true)
        }
        const handleResize = ():void => {
            if(window.innerWidth <= 915){
                setIsVisible(false)
            }else{
                setIsVisible(true)
            }
        }
        window.addEventListener('resize',  handleResize)
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    const handleShowMenu = (): void =>{
        setIsVisible(prev => !prev);
    }
    return (
        <nav className="navbar-container">
            <h2 className="animate__animated animate__fadeInLeft">Portofolio</h2>
            <ul className={`navbar-item_container ${isVisible ? 'show' : 'hide'}`}>
                <div className="r-nav-header">
                    <h2>Portofolio</h2>
                    <span className="close-r-menu">

                    </span>
                </div>
                {
                    MenuItems.map((el:MenuItemType, i: number) => {
                        return <NavbarItem path={el.path} displayText={el.displayText} key={`${el.path+i}`}/>
                    })
                }
                <li className="action"> <Button type="default" valueText="Contact Me" textStyle="bold" style={{margin: '10px 0px'}}/></li>
            </ul>
            <div className="navbar-actions_container animate__animated animate__fadeInLeft">
                <Button type="default" valueText="Contact Me" textStyle="bold" id="contactMeNavbtn"/>
                <Button type="default" valueIcon={isVisible ? fas.faTimes : fas.faBars} id="responsive-action" onClick={handleShowMenu} style={{zIndex: '999', position: 'relative'}}/>
            </div>
        </nav>
    );
}
export default Navbar;