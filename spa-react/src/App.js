import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import About from './pages/about';
import Home from './pages';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>SPA</h1>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About us</Link></li>
          </ul>
        </header>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
