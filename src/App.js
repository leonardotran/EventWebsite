import "./App.css";
import React, {useEffect} from 'react'
import { HomePage } from "./containers/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";
import { AppDetail } from "./components/ourApp/";
import { EventDetail } from "./containers/eventDetail";
import { CustomerProfile } from "./containers/customerProfile/index";
import {useDispatch, useSelector} from 'react-redux'; 
import {loadUser} from './store/actions/auth';

function App() {
  const dispatch = useDispatch(); 


  useEffect(() => {
    dispatch(loadUser()); 
  }, [])
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/customer/access/:action"
            component={CustomerAccessPage}
          />
          <Route
            path="/customer/event"
            component={AppDetail}
          />
           <Route
            path="/customer/eventDetail/:id"
            component={EventDetail}
          />
           <Route
            path="/customer/profile/:id"
            component={CustomerProfile}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;