import Profile from "./pages/Profile";
import logo from './assets/logo.svg'
import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
    return (
        <div className="bg-yellow-900 h-screen flex gap-3">
            <div className='bg-black w-full fixed top-0 flex justify-between py-2 px-4 items-center'>
                <img src={logo} alt='logo' className="h-14 w-14" />
                <nav className='text-white flex gap-4'>
                    <p>Username</p>
                    <p>Register</p>
                    <p>Login</p>
                </nav>
            </div>
            <div className=''>
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
