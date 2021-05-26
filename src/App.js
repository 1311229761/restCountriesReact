import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country'
import Detail from './components/Detail/Detail'
import NoMatch from './components/NoMatch/NoMatch'
// import CountryDetail from './components/CountryDetail/CountryDetail'
import CountryMoreDetail from './components/CountryMoreDetail/CountryMoreDetail'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    // <div className="App">
    //  <Country/>CountryMoreDetail
    
    //   <button type="button" className="btn btn-primary">Primary</button>
    // </div>
    <Router>
      <Switch>
          <Route exact path="/">
            <Country />
          </Route>
          <Route exact path="/country">
            <Country />
          </Route>
          <Route exact path="/detail">
            <Detail />
          </Route>
          <Route exact path="/country/:countryId">
            <CountryMoreDetail />
          </Route>
          <Route  path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>

  );
}

export default App;
