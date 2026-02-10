import { fas } from '@fortawesome/free-solid-svg-icons';
//@ts-ignore
import '../assets/style/contactform.css';
import Button from './Button';
import Underlined from './Underlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactForm:React.FC<{isVisible: boolean; setIsVisible: (v: boolean) => void;}> = ({isVisible, setIsVisible}) => {
    return (
        <div className={`contactForm${isVisible ? ' visible': ' hide'}`}>
            <div className="form-header">
                <span 
                    className="closeForm"
                    onClick={()=>{
                        setIsVisible(false);
                    }}>
                    <FontAwesomeIcon icon={fas.faTimes}/>
                </span>
            </div>
            <div className="formContainer">
                <div className="contactForm_left">
                    <Underlined text='Contactez-moi'/>
                    <img src={require('../assets/images/sendMail.png')} alt="Contact form" />
                </div>
                <form className="contactForm_right">
                    <div className="form-group">
                        <label htmlFor="name">Nom et prénom</label>
                        <input type="text" placeholder='John Doe'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">E-mail</label>
                        <input type="email" placeholder='johndoe@gmail.com'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Message</label>
                        <textarea id="message"></textarea>
                    </div>
                    <Button type='light' valueIcon={fas.faPaperPlane}valueText='Envoyer le message'/>
                </form>
            </div>
        </div>
    );
}
export default ContactForm;