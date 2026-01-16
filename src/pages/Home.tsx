//@ts-ignore
import '../assets/style/home.css';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

const Home:React.FC = () =>{
    return (
        <div className="container">
            <Navbar />
            <div className="hero">
                <div className="heroDescription">
                    <h3>Hi, There</h3>
                    <h1>I'm Brel nosse</h1>
                    <div className="actions">
                        <Button type='light' valueText='Download cv'/>
                        <Button type='default' valueText='Download portofolio'/>
                    </div>
                </div>
                <div className="heroImg">
                    <img src={require('../assets/images/d.webp')} alt="brel nosse" />
                </div>
            </div>
        </div>
    );
}
export default Home;