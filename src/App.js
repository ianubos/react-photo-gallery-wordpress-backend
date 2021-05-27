import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home'
import Header from './components/Header'
import Museum from './pages/Museum'
import Contact from './pages/Contact'
import ScrollToTop from './hooks/useScrollTop'
import sitedata from './siteData'

function App() {
  const slugs = Object.entries(sitedata().pages)
    .map(arr => {
      return arr[0]
    }) 
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
          {slugs.map(slug => (
            <Route path={`/${slug}`}>
                <Museum />
            </Route>
          ))}
          <Route path='/contact'>
              <Contact />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;

