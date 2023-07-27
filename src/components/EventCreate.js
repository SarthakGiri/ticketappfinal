const EventCreate = () => {
    return (
      <div className="event-create">
        <h2>Create New Event</h2>
        
        <form>
          <input 
            type="text"
            placeholder="Event name"
          />
          <textarea 
            placeholder="Event description"  
          />
          {/* other inputs */}
          <button>Submit</button>
        </form>
      </div>
    )
  }
  
  export default EventCreate;