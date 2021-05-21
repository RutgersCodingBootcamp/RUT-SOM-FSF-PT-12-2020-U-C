import './App.css';
import Tabs from './components/tabs';
import Home from './pages/Home';
import About from './pages/About';
import Discover from './pages/Discover';
import Search from './pages/Search';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Route path="/" component={Tabs} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
