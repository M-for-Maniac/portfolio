import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Portfolio from './Portfolio';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <Portfolio />
    </div>
  );
}

export default App;