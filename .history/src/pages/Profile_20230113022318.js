import React, { useState } from 'react'


const Profile = () => {

    const [myVar, setMyVar] = useState(`MyVAr`)

    const handleLogout = () => {
        console.log('I am logged out')
    };

    return (
        <div className='w-full h-screen'>
            <div className='w-full p-6'>
                <button onClick={handleLogout}
                    className='rounded p-2 w-24 bg-red-700 text-white'
                >
                    Logout
                </button>
            </div>
            <div className='w-full h-full text-center text-2xl items-center'>
                <p className='self-center my-auto'>`Welcome ${myVar}`</p>
            </div>
        </div>
    )
}

export default Profile
