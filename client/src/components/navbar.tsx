import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
function Navbar(){
    const currentPath = window.location.pathname;
    const {isLoggedIn, currentUser, login, logout} = useAuth();
    return (
        <nav id = "navbar-components">
            <div className="move-container">
                <img src="/logo-travelBuddy.png" className="logo"/>
                <p className="brand-1"><strong>Travel</strong></p>
                <p className="brand-2"><strong>Buddy</strong></p>
            </div>
            <div className="move-container">
                <a href="/" className={`btn-href ${currentPath === '/' ? 'active' : ''}`}>Home</a>
                <a href="/explore" className={`btn-href ${currentPath === '/explore' ? 'active' : ''}`}>Explore</a>
                <a href="/trip" className={`btn-href ${currentPath === '/trip' ? 'active' : ''}`}>Trips</a>
                <a href="/itinerary" className={`btn-href ${currentPath === '/itinerary' ? 'active' : ''}`}>Itinerary</a>
                <a href="/buddy" className={`btn-href ${currentPath === '/buddy' ? 'active' : ''}`}>Buddy</a>
            </div>
            <div className="auth-container">
                {
                    isLoggedIn 
                    ? 
                    (
                        <div className='user-logged-in'>
                            <div className='notification-container'>
                                <button className='btn-notification'>
                                    <img src="/logo-notification.png" alt="" className='bell-image'/>
                                </button>
                            </div>
                            <div className = "user-profile-container">
                                <button className='btn-profile'>
                                    <img src={`http://localhost:3000/uploads/avatars/${currentUser?.userAvatar}`} className='profile-image' />
                                </button>
                                <p className='account-name'>{currentUser?.userName}</p>
                            </div>
                       </div>
                    ) 
                    : 
                    (
                        <div className='user-logged-out'>
                            <a href="/login" className='btn-login'><strong>Sign In</strong></a>
                            <a href="/register" className='btn-login'><strong>Sign Up</strong></a>
                        </div>

                    )

                }
            </div>
        </nav>
    )
}
export default Navbar;