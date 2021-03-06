import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chatrooms from "./Chatrooms";
import InCall from "./InCall";
import {Route, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <div className="App">
        {/* <Chatrooms /> */}
      <Switch>
        <Route exact path={"/"} component={Chatrooms}/>
        <Route exact path={"/chatrooms"} component={Chatrooms}/>
        <Route exact path={"/room"} component={InCall}/>
      </Switch>

        {/* <InCall /> */}

    </div>
  );
}

export default App;
