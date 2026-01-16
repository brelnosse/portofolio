import { Link, useLocation } from "react-router-dom";
//@ts-ignore
import '../assets/style/navbar.css';
import Button from "./Button";
import { useEffect,  useState } from "react";
import { MenuItems } from "../data/MenuItem";
import { MenuItemType } from "../types/navbar.types";
import {fas} from '@fortawesome/free-solid-svg-icons';

const NavbarItem:React.FC<MenuItemType> = ({path, displayText}) => {
    const location = useLocation();

    const isActive = (current: string): string =>{
        return (current === location.pathname ? 'active' : '');
    }

    return (
        <li className={`navbar-item ${isActive(path)}`}><Link to={path}>{displayText}</Link></li>
    );
}

const Navbar: React.FC = () =>{
    const [isVisible, setIsVisible] = useState<boolean>(true);

    useEffect(()=>{
        if(window.innerWidth <= 915){
            setIsVisible(false)
        }else{
            setIsVisible(true)
        }
        window.onresize = (e) =>{
            if(window.innerWidth <= 915){
                setIsVisible(false)
            }else{
                setIsVisible(true)
            }
        }
    }, [])
    const handleShowMenu = (): void =>{
        setIsVisible(prev => !prev);
    }
    return (
        <nav className="navbar-container">
            <h2>Portofolio</h2>
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
               
                <li> <Button type="default" valueText="Contact Me" textStyle="bold" style={{margin: '10px 0px'}}/></li>
            </ul>
            <div className="navbar-actions_container">
                <Button type="default" valueText="Contact Me" textStyle="bold" id="contactMeNavbtn"/>
                <Button type="default" valueIcon={isVisible ? fas.faTimes : fas.faBars} id="responsive-action" onClick={handleShowMenu} style={{zIndex: '999', position: 'relative'}}/>
            </div>
        </nav>
    );
}
export default Navbar;