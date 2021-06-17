import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {ToastProvider} from 'react-toast-notifications';

import '../scss/App.scss';
import {settings, SettingsContext} from "../hooks/settings-context";

import Navigation from './Shared/Navigation'
import Home from "./Contianer/Home";
import ProductPage from "./Contianer/ProductPage";
import Footer from "./Shared/Footer";


function App() {
    return (
        <div className="App">
            <ToastProvider placement="bottom-right">
                <SettingsContext.Provider value={settings}>
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/listings"/>
                            </Route>
                            <Route exact path="/listings" component={Home}/>
                            <Route exact path="/listings/:id" component={ProductPage}/>
                        </Switch>
                    </Router>
                    <Footer/>
                </SettingsContext.Provider>
            </ToastProvider>
        </div>
    );
}

export default App;
