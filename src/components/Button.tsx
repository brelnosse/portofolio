import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonProps } from "../types/button.type";
//@ts-ignore
import '../assets/style/button.css';

const Button:React.FC<ButtonProps> = ({type, textStyle, valueIcon, valueText}) =>{
    return (
        <button className={`btn btn-${type} ${textStyle}`}>
            {valueIcon && <FontAwesomeIcon icon={valueIcon}/>}
            {valueText && valueText}
        </button>
    );
}
export default Button;