import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';

function homePage(){
  const navigate = useNavigate();
  return(
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <div className='hero'>
          <p className='button-hero'>Travel Planning App</p>
          <h1 className='h1-hero'>Plan Your Dream</h1>
          <div className='adventure-together'>
            <h1 className='adventure'>Adventure</h1>
            <h1 className='h1-hero'> Together</h1>
          </div>
          <a>Create personalized itineraries, 
            discover amazing destinations, 
            and find travel
          </a>
          <a>buddies who share 
              your passion for exploration.
          </a>
          <div className='trip-button' onClick={() => navigate('/trip')}>
            <div className= "search-image">
              <img src="/logo-search.png"/>
            </div>
            <div className='destination'>
              <strong>Trip Destination</strong>
              <a>Discover amazing places across indonesia</a>
            </div>
            <img src="/logo-arrow.png"/>
          </div>
      </div>
      <div className='benefit'>
        <div className='rating'>

        </div>
        <div className='card-benefit'>
          <p className='button-benefit'> Find Your Crew</p>
          <div className='container'>
            <div className='text-container'>
              <h1 className='h1-hero'>Travel Is Better</h1>
              <h1 className='adventure'>Together</h1>
              <a>Connect with like-minded travelers heading to the same</a>
              <a> destinations. Share costs, 
                create memories, and make lifelong</a>
              <a>friends</a>
            </div>
            <div>
              <img src="/family.jpg"/>
            </div>

          </div>
          <div className='button-container'>
            <div className='buddies-button' onClick={() => navigate("/buddy")}>
              <a>Find Travel Buddies</a>
            </div>
            <div className='itinerary-button' onClick={() => navigate('/itinerary')}>
              Plan Itinerary
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='text-card'>
            <h1 className='title-p'>Why Choose Travel Buddy</h1>
            <p className='text-p'>Everything you need to plan your perfect trip</p>
          </div>
          <div className='card-section'>
            <div className='benefit-card'>
              <img src="/smart-logo.png"/>
              <h2>Smart Itinerary Planner</h2>
              <div className='text-container'>
                <a>Build day-by-day itineraries with AI</a>
                <a>recommendations, maps integration, and real-time</a>
                <a>updates.</a>
              </div>
              
            </div>
            <div className='benefit-card'>
              <img src="/travel-buddy-logo.png"/>
              <h2>Travel Buddy Finder</h2>
              <div className='text-container'>
                <a>Match with travelers who share your interests,</a>
                <a>budget, and travel style for any destination.</a>
              </div>
              
            </div>
            <div className='benefit-card'>
              <img src="/secure-logo.png"/>
              <h2>Secure & Reliable</h2>
              <div className='text-container'>
                <a>Verified profiles, secure messaging, and 24/7</a>
                <a>support to ensure a safe travel experience.</a>
              </div>

            </div>

          </div>

        </div>
      </div>
      <footer className='foot'>
        <div className='title-footer'>
          <h1 className='h1-hero'>Travel</h1>
          <h1 className='adventure'>Buddy</h1>
        </div>
        <a >© 2026 Travel Buddy. Your journey, your story.</a>
      </footer>
    </div>
    
  )
}
export default homePage;