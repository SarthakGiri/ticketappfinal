import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// Logo component
function SearchBar() {
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
    // Add the search logic here. This might include making a request to your backend to search the events
  };

  return (
    <input 
      className="border-2 border-gray-300 bg-white h-12 px-20 rounded-lg text-sm focus:outline-none"
      type="search" 
      name="search" 
      placeholder="Search events"
      value={search}
      onChange={handleSearch}
    />
  );
}
function Logo() {
  return (
    <div>
      <Link to="/" className='flex items-center py-4 px-2'>
        <img src="logo.png" alt="Logo" className='h-8 w-8 mr-2'/>
        <span className='font-semibold text-gray-100 tracking-tight'>Concertek</span>
      </Link>
    </div>
  );
}

// Navbar items component
function NavbarItems({items}) {
  return (
    <div className='hidden md:flex items-center space-x-1'>
      {items.map((item, index) => 
        <Link key={index} to={item.path} className='py-4 px-2 text-gray-200 hover:text-gray-300 transition duration-300'>
          {item.name}
        </Link>
      )}
    </div>
  );
}

// Secondary Navbar component
function SecondaryNavbarItems({items}) {
  return (
    <div className='hidden md:flex items-center space-x-3 '>
      {items.map((item, index) => 
        <Link key={index} to={item.path} className={`py-2 px-2 font-medium ${item.color} rounded ${item.hover} transition duration-300`}>
          {item.name}
        </Link>
      )}
    </div>
  );
}

// Mobile Menu Button
function MobileMenuButton() {
  return (
    <div className='md:hidden flex items-center'>
      <button className='outline-none mobile-menu-button'>
        <svg className='w-6 h-6 text-gray-200 hover:text-gray-400'
            x-show="!showMenu"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  );
}

// Header component
function Header() {
  const primaryNavItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Artists', path: '/artists' },
    { name: 'Contact', path: '/contact' },
  ];

  const secondaryNavItems = [
    { name: 'Log In', path: '/login', color: 'text-gray-200', hover: 'hover:bg-pink-500 hover:text-white' },
    { name: 'Sign Up', path: '/register', color: 'text-white bg-pink-500', hover: 'hover:bg-pink-400' }
  ];
  return (
    <header className='bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg'>
      <div className='max-w-6xl mx-auto px-5'>
        <div className='flex justify-between'>
          <div className='flex space-x-7'>
            <Logo />

            <NavbarItems items={primaryNavItems} />
          </div>
          
          {/* Add the search bar to the header */}
          <SearchBar />

          <SecondaryNavbarItems items={secondaryNavItems} />

          <MobileMenuButton />
        </div>
      </div>

      {/* Mobile menu, overlay, and menu items can be added here */}
    </header>
  );
}

export default Header;