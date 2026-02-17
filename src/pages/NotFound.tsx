//@ts-ignore
import '../assets/style/notfound.css';
import { useNavigate } from "react-router-dom";
import Button from '../components/Button';
import { faArrowLeft, faGamepad } from '@fortawesome/free-solid-svg-icons';
const NotFound:React.FC = () => {
    const  navigate  = useNavigate();

    return (
        <div className="not-found-container">
            <div className="not-found">
                <img src={require('../assets/images/notfound.webp')} alt='404 not found'/>
                <span>404</span>
                <h1>Page inexistante</h1>
                <p>Désolé, la page que vous recherchez n'existe pas.</p>
                <div className="links">
                    <Button 
                        type='light' 
                        valueIcon={faArrowLeft} 
                        valueText='Page précédente'
                        onClick={()=>{
                            navigate('/');
                        }} />
                    <Button 
                        type='default' 
                        valueIcon={faGamepad} 
                        onClick={()=> {
                            window.open('https://sevux.netlify.app/', '_blank');
                        }}
                        valueText='Jouer à un jeu' />
                </div>
            </div>
        </div>
    );
}
export default NotFound;