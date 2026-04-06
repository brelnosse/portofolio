import { faEgg } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//@ts-ignore
import '../assets/style/easteregg.css';

export default function EasterEgg({setIsAlertVisible, setAlertDatas}:{setIsAlertVisible: (v:boolean) => void; setAlertDatas: (v:{type: string; title: string; description: string}) => void}) {
const handleClick = () => {
    setIsAlertVisible(true);
    setAlertDatas({
        type: "info",
        title: "Indice trouvé !",
        description: ""
    });

    // Révèle le texte lettre par lettre
    const text = "Parfois, ne pas trouver... c'est déjà trouver. 🥚";
    let i = 0;
    const interval = setInterval(() => {
        i++;
        setAlertDatas({
            type: "info",
            title: "Indice trouvé !",
            description: text.slice(0, i)
        });
        if (i === text.length) clearInterval(interval);
    }, 50);
};
    return (
        <div className="easter-egg" onClick={handleClick}>
            <span><FontAwesomeIcon icon={faEgg} shake/></span>
        </div>
    );
}