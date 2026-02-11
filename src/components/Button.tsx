import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonProps } from "../types/button.type";
//@ts-ignore
import '../assets/style/button.css';
import { fas } from "@fortawesome/free-solid-svg-icons";

const Button:React.FC<ButtonProps> = ({type, textStyle, valueIcon, valueText, loading, ...props}) =>{
    return (
        <button className={`btn btn-${type} ${textStyle} ${loading && 'loading'}`} {...props} disabled={loading}>
            {loading ? 
                <FontAwesomeIcon icon={fas.faSpinner} spin/> :
                valueIcon && <FontAwesomeIcon icon={valueIcon}/>
            }
            
            {valueText && valueText}
        </button>
    );
}
export default Button;