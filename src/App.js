import './App.css';

import Home from "./components/pages/Home";
import {
    Route,
    Routes
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Todos from "./components/Todos";
import Navbar from "./components/Navbar";
import Signup from "./components/pages/Signup";
import {useEffect,useState} from "react";

function App() {
    useEffect(() => {
        if (localStorage.getItem('isDark') === null){
            localStorage.setItem('isDark','false');
        }
    },[])

    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('isDark') === 'true' ? true : false);

    const changDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('isDark',localStorage.getItem('isDark') === 'true' ? 'false' : 'true');
        document.body.style.backgroundColor =  isDarkMode ?  'black' : 'white';

    }
    return (
        <>
            <Navbar isDarkMode={isDarkMode} changDarkMode={changDarkMode} />
            <Routes>
                    <Route path='' element={<Home isDarkMode={isDarkMode}/>}/>
                    <Route path='signup' element={<Signup isDarkMode={isDarkMode}/>}/>
                    <Route path='/todos' element={
                        <ProtectedRoute>
                            <Todos isDarkMode={isDarkMode} />
                        </ProtectedRoute>
                    }/>
                </Routes>
        </>

    );
}

export default App;
