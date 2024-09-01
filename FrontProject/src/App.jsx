// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import ShiftManagement from './pages/ShiftManagment';
// import Availability from './pages/Availability';
// import Chat from './pages/Chat';
// import Profile from './pages/Profile';
// import ReportsAnalytics from './pages/Reports&Analist';
// import UserManagement from './pages/UserManagment';
// import Navbar from './pages/Navbar';


// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
//   const userRole = 'waiter'; // This should be derived from the authenticated user's data

//   return (
//     <Router>
//       {isAuthenticated && <Navbar role={userRole} />}
//       <Routes>
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/register" element={<Register />} />
//         {isAuthenticated ? (
//           <>
//             <Route path="/" element={<Home />} />
//             <Route path="/shift-management" element={<ShiftManagement />} />
//             <Route path="/availability" element={<Availability />} />
//             <Route path="/chat" element={<Chat />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/reports-analytics" element={<ReportsAnalytics />} />
//             <Route path="/user-management" element={<UserManagement />} />
//           </>
//         ) : (
//           <Route path="*" element={<Navigate to="/login" />} />
//         )}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
