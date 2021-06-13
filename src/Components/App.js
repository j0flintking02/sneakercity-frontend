import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../scss/App.scss';
import { SettingsContext, settings } from "../hooks/settings-context";

import Navigation from './Shared/Navigation'
import Home from "./Contianer/Home";
import Footer from "./Shared/Footer";


function App() {
  return (
      <div className="App">
          <SettingsContext.Provider value={settings.app_name}>
              <Router>
                  <Navigation />
                  <Switch>
                      <Route exact path="/" component={Home} />
                  </Switch>
              </Router>
              <Footer />
          </SettingsContext.Provider>
      </div>
  );
}

export default App;
