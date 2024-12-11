import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationListener from './routing/NavigationListener';
import Home from './components/pages/home/Home';
import './App.module.scss';

function App() {
  return (
    <Router>
      <NavigationListener />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
