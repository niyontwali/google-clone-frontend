import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Routes
import routes from './routes';

// Utils & Components
import { toast } from 'sonner';
import { getNetworkStatus } from './utils';

const App = () => {
  // State to track network status (online/offline)
  const [isOnline, setIsOnline] = useState(getNetworkStatus());
  // State to track if the app has been reloaded
  const [isReloaded, setIsReloaded] = useState(true);

  // Effect to handle network status changes
  useEffect(() => {
    const handleNetworkChange = () => {
      setIsOnline(getNetworkStatus());
    };

    // Add event listeners for offline and online events
    window.addEventListener('offline', handleNetworkChange);
    window.addEventListener('online', handleNetworkChange);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('offline', handleNetworkChange);
      window.removeEventListener('online', handleNetworkChange);
    };
  }, []);

  // Effect to show a toast message when the user goes offline
  useEffect(() => {
    if (!isReloaded && !isOnline) {
      toast("You are offline, some content won't be visible");
    }
    // Set isReloaded to false after the initial load
    setIsReloaded(false);
  }, [isReloaded, isOnline]);

  return (
    <Router>
      <Routes>
        {/* Map through routes and create a Route component for each route */}
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
