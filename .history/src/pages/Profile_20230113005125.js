import React from 'react'

const Profile = () => {

    const handleLogout = () => {
        console.log('I am logged out')
    };

    return (
        <div className='w-full h-screen'>
            <div className='w-full p-6'>
                <button onClick={handleLogout}
                    className='rounded p-2 ww-32 bg-red-700 text-white'
                >
                    Logout
                </button>
            </div>
            <div className='w-full h-full text-center items-center'>
                <p className='self-center my-auto'>Welcome</p>
            </div>
        </div>
    )
}

export default Profile
