import { fas } from '@fortawesome/free-solid-svg-icons';
//@ts-ignore
import '../assets/style/contactform.css';
import Button from './Button';
import Underlined from './Underlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEvent, useRef, useState } from 'react';
import { sendEmail } from '../lib/emailjs';

const validateForm = (data:{name: string; email: string; message: string}) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (data.name.trim().length < 2) return "Nom trop court";
  if (!emailRegex.test(data.email)) return "Email invalide";
  if (data.message.trim().length < 10) return "Message trop court";
  
  return null;
};

const ContactForm:React.FC<{isVisible: boolean; setIsVisible: (v: boolean) => void;}> = ({isVisible, setIsVisible}) => {
    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState<{name: string; email: string; message: string}>({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (key: string, value: string) => {
        setFormData({
            ...formData,
            [key]: value
        })
    }
    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        
        if(validateForm(formData) == null){
            if(form.current){
                if(await sendEmail(
                    form, 
                    process.env.REACT_APP_EMAILJS_SERVICE || 'YOUR EMAIJS SERVICE KEY', 
                    process.env.REACT_APP_EMAILJS_TEMPLATE || 'YOUR EMAIJS TEMPLATE KEY',
                    process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR EMAIJS PUBLIC KEY'))
                    {
                        alert('envoyé')
                    }else{
                        alert('Une erreur est survenu lors de l\'envoi du message')
                    }
            }
        }else{
            alert(validateForm(formData))
            console.log(formData)
        }
    }
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
                <form className="contactForm_right" ref={form} onSubmit={handleSubmit}>
                    <input type="hidden" name="title" value={"Portfolio"}/>
                    <input type="hidden" name="time" value={new Date().toLocaleDateString()}/>
                    <div className="form-group">
                        <label htmlFor="name">Nom et prénom</label>
                        <input type="text" placeholder='John Doe' name="name" onChange={(e)=>{
                            handleChange('name', e.target.value)
                        }} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">E-mail</label>
                        <input type="email" placeholder='johndoe@gmail.com' name="email" onChange={(e)=>{
                            handleChange('email', e.target.value)
                        }} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Message</label>
                        <textarea id="message" name="message" onChange={(e)=>{
                            handleChange('message', e.target.value)
                        }} required></textarea>
                    </div>
                    <Button type='light' valueIcon={fas.faPaperPlane}valueText='Envoyer le message'/>
                </form>
            </div>
        </div>
    );
}
export default ContactForm;