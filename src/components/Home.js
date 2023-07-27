import React from "react"; 
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/event/123'); 
  }
  const navigate1 = useNavigate();

  const handleBrowseEventsClick = () => {
    navigate1('/events'); // Assuming '/events' is the route to the events tab
  }
  return (
    <div className="w-full min-h-screen bg-gray-100 py-0.5 px-5 md:px-0">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-md shadow-lg p-5 md:p-8 mb-10">
        <h1 className="text-4xl font-bold text-white">Welcome to Concertek</h1>
        <p className="mt-2 text-gray-100">Discover your new favorite artists and events!</p>
        <button className="inline-block px-6 py-2 mt-4 text-white bg-pink-500 rounded-lg" onClick={handleBrowseEventsClick}>Browse Events</button>
      </div>

      {/* Upcoming Events */}
      <div className="my-16">
        <h2 className="mb-5 text-3xl text-left">Upcoming Events</h2>
        
        <div className="flex gap-10">
          {/* First Event */}
          <div className="rounded-lg shadow-lg overflow-hidden w-1/2">
            {/* Event Details */}
            <img 
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  
              alt="" 
              className="h-56 w-full object-cover"/>

            <div className="p-6 bg-white">
              <h3 className="mb-3 text-2xl font-semibold">Sia - Live in Concert</h3>
              <p className="mb-4 text-gray-700">Sia will be performing her greatest hits along with songs from her new album...</p>
              <button className="inline-block px-6 py-2 text-lg font-semibold text-white bg-pink-500 rounded-lg" onClick={handleButtonClick}>
                Buy Tickets
                </button>
                </div>
                
          </div>

          {/* Second Event */}
          <div className="rounded-lg shadow-lg overflow-hidden w-1/2">
            {/* Event Details */}
            <img 
  src="https://images.unsplash.com/photo-1543791959-74c5b8be5e4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"  
  alt="Snoop Dogg" 
  className="h-56 w-full object-cover"
/>

<div className="p-6 bg-white">
  <h3 className="mb-3 text-2xl font-semibold">Snoop Dogg - Live in Concert</h3>
  <p className="mb-4 text-gray-700">Snoop Dogg will be performing his greatest hits along with songs from his new album...</p>
  <button className="inline-block px-6 py-2 text-lg font-semibold text-white bg-pink-500 rounded-lg" onClick={handleButtonClick}>
    Buy Tickets
  </button>
</div>
          </div>
        </div>
      </div>

      {/* Featured Artists */}
      <div className="my-16">
        <h2 className="mb-5 text-3xl text-left">Featured Artists</h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg shadow-lg overflow-hidden">
          <img 
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  
              alt="" 
              className="h-56 w-full object-cover"/>
              <div className="p-6 bg-white">
              <h3 className="mb-3 text-2xl font-semibold">Abhishek - Live in Concert</h3>
              <p className="mb-4 text-gray-700">Abhishek will be performing her greatest hits along with songs from her new album...</p>
              <button className="inline-block px-6 py-2 text-lg font-semibold text-white bg-pink-500 rounded-lg" onClick={handleButtonClick}>
                Buy Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
