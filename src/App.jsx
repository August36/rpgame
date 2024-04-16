import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { About, Home, Services, Contact } from "./components/Pages";
import { Footer } from "./components/Footer/Footer.jsx"

function App() {

    return(
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/services" element={<Services />}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
