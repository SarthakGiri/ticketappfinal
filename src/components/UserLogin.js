export default function UserLogin() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        
        <div className="px-8 py-6 mx-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <h3 className="text-2xl font-bold text-center">Login</h3>
          
          <form className="mt-4">
            <div>
              <label className="block" htmlFor="email">Email</label>    
              <input type="email" placeholder="Email" id="email" className="flex-1 px-2 py-2 rounded-lg border border-gray-400"/>
            </div>
            
            <div className="mt-4">
              <label className="block">Password</label>
              <input type="password" placeholder="Password" className="flex-1 px-2 py-2 rounded-lg border border-gray-400"/>  
            </div>
  
            <div className="flex items-center justify-between mt-4">
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                Login
              </button>
            </div>
          </form>
        </div>
        
      </div>
    );
  }