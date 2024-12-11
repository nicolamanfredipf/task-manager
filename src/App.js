import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationListener from './routing/NavigationListener';
// import Home from './components/pages/home/Home';
import Landing from './components/pages/landing/Landing';
import './App.module.scss';
import './styles/classes.scss';

function App() {
  return (
    <Router>
      <NavigationListener />
      <main>
        <Routes>
          {/* Open */}
          <Route path="/" element={<Landing />} />
          {/* <Route path="/login" element={<Home />} />
        <Route path="/register" element={<Home />} />
        <Route path="/support" element={<Home />} />
        <Route path="/terms" element={<Home />} /> */}
          {/* Login need */}
          {/* <Route path="/dashboard" element={<Home />} />
        <Route path="/tasks" element={<Home />} />
        <Route path="/tasks/:id" element={<Home />} />
        <Route path="/calendar" element={<Home />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/settings" element={<Home />} />
        <Route path="/notifications" element={<Home />} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
