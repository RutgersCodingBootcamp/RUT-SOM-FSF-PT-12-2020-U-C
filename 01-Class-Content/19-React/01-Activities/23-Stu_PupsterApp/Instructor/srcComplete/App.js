import './App.css';
import Tabs from './components/tabs';
import Home from './pages/home';
import About from './pages/about';
import Search from './pages/search';
import SearchAdvanced from './pages/searchAdvanced';
import Discover from './pages/discover';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Tabs} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} />
        <Route path="/searchadvanced" component={SearchAdvanced} />
      </div>
    </Router>
  );
}

export default App;
