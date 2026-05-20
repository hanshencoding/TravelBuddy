function Navbar(){
    const currentPath = window.location.pathname;
    return (
        <nav id = "navbar-components">
            <img src=""/>
            <p className="brand"><strong>Travel Buddy</strong></p>
            <div className="move-container">
                <a href="/" className={`btn-href ${currentPath === '/' ? 'active' : ''}`}>Home</a>
                <a href="/explore" className={`btn-href ${currentPath === '/explore' ? 'active' : ''}`}>Explore</a>
                <a href="/trip" className={`btn-href ${currentPath === '/trip' ? 'active' : ''}`}>Trips</a>
                <a href="/itinerary" className={`btn-href ${currentPath === '/itinerary' ? 'active' : ''}`}>Itinerary</a>
                <a href="/buddy" className={`btn-href ${currentPath === '/buddy' ? 'active' : ''}`}>Buddy</a>
                
            </div>
        </nav>
    )
}
export default Navbar;