import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ChooseDomain from "./pages/ChooseDomain"
import HRQuestions from "./pages/HRQuestions";
import TechQuestions from "./pages/TechQuestions";
import CodingQuestions from "./pages/CodingQuestions";
import { useState } from "react";

function App() {
    const [domain, setDomain] = useState(null);

    return (
        <>
            <Navbar />

            <div className="pt-20">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/dashboard"
                        element={<Dashboard domain={domain} setDomain={setDomain} />}
                    />
                    <Route path="/choose-domain" element={<ChooseDomain setDomain={setDomain} />} />
                    <Route
                        path="/hr"
                        element={<HRQuestions domain={domain} />}
                    />
                    <Route
                        path="/coding"
                        element={<CodingQuestions domain={domain} />}
                    />
                    <Route
                        path="/tech"
                        element={<TechQuestions domain={domain} />}
                    />
                </Routes>
            </div>

            <Footer />

        </>
    );
}

export default App;
