import { Link, useLocation } from "react-router-dom";
//@ts-ignore
import '../assets/style/navbar.css';
import Button from "./Button";
import { useEffect, useRef } from "react";
import { MenuItems } from "../data/MenuItem";
import { MenuItemType } from "../types/navbar.types";


const NavbarItem:React.FC<MenuItemType> = ({path, displayText}) => {
    const location = useLocation();
    const navItem = useRef<HTMLLIElement>(null);

    if(navItem.current){
        (navItem.current as Element).addEventListener('click', function(e){
            e.preventDefault();
            console.log('clicked')
        })
    }
    const isActive = (current: string): string =>{
        return (current === location.pathname ? 'active' : '');
    }

    return (
        <li className={`navbar-item ${isActive(path)}`} ref={navItem}><Link to={path}>{displayText}</Link></li>
    );
}

const Navbar: React.FC = () =>{
    return (
        <nav className="navbar-container">
            <h2>Portofolio</h2>
            <ul className="navbar-item_container">
                <span className="bubble" ></span>
                {
                    MenuItems.map((el:MenuItemType, i: number) => {
                        return <NavbarItem path={el.path} displayText={el.displayText} key={`${el.path+i}`}/>
                    })
                }
            </ul>
            <div className="navbar-actions_container">
                <Button type="default" valueText="Contact Me" textStyle="bold"/>
            </div>
        </nav>
    );
}
export default Navbar;