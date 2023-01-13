import Profile from "./pages/Profile";
import logo from './assets/logo.svg'
import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
    return (
        <div className="bg-yellow-800 h-screen">
            <div className='bg-black w-full'>
                <img src={logo} alt='logo' className="h-14 w-14" />
                <nav></nav>
            </div>
            <div>
                <Routes>
                    <Route path="register" element={<Register />} />
                    <Route path="/" element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="profile" element={<Profile />} />
                </Routes>
            </div>


        </div>
    );
}

export default App;
