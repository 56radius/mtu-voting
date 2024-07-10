import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//importing the main components
import SplashScreen from "./components/SplashScreen";
import HomeScreen from "./components/HomeScreen";

//importing minful minutes

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
          <Route
            path="/"
            element={showSplash ? <SplashScreen /> : <HomeScreen />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
