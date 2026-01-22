import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageLoader from "./components/PageLoader";
import { useEffect, useState } from "react";

const App: React.FC = () => {
    const [isLoading, setIsloading] = useState<boolean>(true);

    useEffect(()=>{
        const handleLoading = () => {
            setTimeout(()=>{
                setIsloading(false)
            }, 100)
        };
        window.addEventListener('load', handleLoading);
        return () => window.removeEventListener('load', handleLoading);
    }, [isLoading])

    if(isLoading){
        return <PageLoader />;
    }
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about-me" element={<About/>}/>
            </Routes>
        </Router>
    );
}
export default App;