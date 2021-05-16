import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
