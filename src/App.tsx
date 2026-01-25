import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageLoader from "./components/PageLoader";
import { useEffect, useState } from "react";
import { SectionContextProvider } from "./context/SectionContext";

const App: React.FC = () => {
    const [isLoading, setIsloading] = useState<boolean>(true);

    useEffect(()=>{
        const handleLoading = () => {
            setTimeout(()=>{
                setIsloading(false)
            }, 100)
        };
        if (document.readyState === "complete") {
            handleLoading();
        } else {
            window.addEventListener("load", handleLoading);
            return () => window.removeEventListener("load", handleLoading);
        }
    }, [])

    if(isLoading){
        return <PageLoader />;
    }
    return (
        <SectionContextProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Router>
        </SectionContextProvider>
    );
}
export default App;