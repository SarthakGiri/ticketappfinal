// EventDetails.js

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function EventDetails() {

  const [event, setEvent] = useState(null);
  const { eventId } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`/api/events/${eventId}`);
        setEvent(response.data);
      } catch (err) {
        // Handle error
      }
    };

    fetchEvent();
  }, [eventId]);

  if (!event) return <p>Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto">

      {/* Event details */}
      <h2 className="text-4xl font-bold text-purple-600">
        {event.name}  
      </h2>

      <div className="flex flex-col md:flex-row mt-4">
        
        <img 
          src={event.image}
          alt=""
          className="w-full md:w-1/3 rounded-lg shadow-lg" 
        />

        <div className="mt-4 md:mt-0 md:ml-4">
        
          {/* Details */}
        
        </div>

      </div>

      {/* Related events */}

      {/* Reviews */}

    </div>
  );

}