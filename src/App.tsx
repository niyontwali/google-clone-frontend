import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Routes
import routes from './routes';

// Utils & Components
import { toast } from 'sonner';
import { getNetworkStatus } from './utils';

const App = () => {
  const [isOnline, setIsOnline] = useState(getNetworkStatus());
  const [isReloaded, setIsReloaded] = useState(true);

  useEffect(() => {
    const handleNetworkChange = () => {
      setIsOnline(getNetworkStatus());
    };

    window.addEventListener('offline', handleNetworkChange);
    window.addEventListener('online', handleNetworkChange);

    return () => {
      window.removeEventListener('offline', handleNetworkChange);
      window.removeEventListener('online', handleNetworkChange);
    };
  }, []);

  useEffect(() => {
    if (!isReloaded && !isOnline) {
      toast("You are offline, some content won't be visible");
    }
    setIsReloaded(false);
  }, [isReloaded, isOnline]);

  return (
    <Router>
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
