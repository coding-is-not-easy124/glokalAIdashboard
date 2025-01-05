import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AnalyticsPage from './components/AnalyticsPage/AnalyticsPage';
import DemoBank from './components/DemoBank/DemoBank';
import MyInfo from './components/MyInfo/MyInfo';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  // Function to toggle the dark mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const router = createBrowserRouter([
      {
        path: "/",
        element: <Dashboard isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>,
      },
      {
        path: "/analytics",
        element: <AnalyticsPage/>,
      },
      {
        path: "/demo-bank",
        element: <DemoBank/>
      },
      {
        path: "/info",
        element: <MyInfo/>
      },
  ]);

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Sidebar/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
