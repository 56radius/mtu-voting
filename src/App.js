import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing the main components
import SplashScreen from "./components/SplashScreen";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen"; // Importing the login screen component

//importing the dashboard components
import DashboardScreen from "./components/Dashboard/DashboardScreen";
import AvailablePollScreen from "./components/Dashboard/AvailablePollScreen";
import MyVotesScreen from "./components/Dashboard/MyVotesScreen";
import ResultScreen from "./components/Dashboard/ResultScreen";
import PollResultScreen from "./components/Elements/PollResultScreen"; // Import the PollResultScreen component

//importing admin components
import AdminLogin from "./components/Admin/AdminLogin";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={showSplash ? <SplashScreen /> : <HomeScreen />} />
          <Route path="/login/:department" element={<LoginScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/available-polls" element={<AvailablePollScreen />} />
          <Route path="/my-votes" element={<MyVotesScreen />} />
          <Route path="/results" element={<ResultScreen />} />
          <Route path="/poll-result/:pollId" element={<PollResultScreen />} /> {/* Add the PollResultScreen route */}
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
