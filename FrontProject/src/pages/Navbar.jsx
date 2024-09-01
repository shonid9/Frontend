import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ role }) => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link to="/" className="mr-4">Home</Link>
          {(role === 'waiter' || role === 'bartender' || role === 'shift-manager') && (
            <>
              <Link to="/shift-management" className="mr-4">Shift Management</Link>
              <Link to="/availability" className="mr-4">Availability</Link>
              <Link to="/shift-swap" className="mr-4">Shift Swap</Link>
              {role === 'shift-manager' && <Link to="/chat" className="mr-4">Chat</Link>}
            </>
          )}
          {role === 'restaurant-manager' && (
            <>
              <Link to="/user-management" className="mr-4">User Management</Link>
              <Link to="/reports-analytics" className="mr-4">Reports & Analytics</Link>
              <Link to="/chat" className="mr-4">Chat</Link>
            </>
          )}
        </div>
        <div>
          <Link to="/profile" className="mr-4">Profile</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
