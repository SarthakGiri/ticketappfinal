export default function UserRegister() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200">
        
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <h3 className="text-2xl font-bold text-center">Join us</h3>
          
          <form action="#" className="mt-4">
          
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input type="text" placeholder="Name" className="flex-1 px-2 py-2 rounded-lg border border-gray-400"/>
            </div>  
  
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" placeholder="Email" className="flex-1 px-2 py-2 rounded-lg border border-gray-400"/>
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" placeholder="Password" className="flex-1 px-2 py-2 rounded-lg border border-gray-400"/>
            </div>
  
            <div className="flex justify-center">
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
                Register
              </button>
            </div>
  
          </form>
        </div>
        
      </div>
    );
  }