import React from "react";
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AppProvider from "./contexts/appContext";
import Welcome from "./components/welcome";
import Main from "./components/main";
import Register from "./components/register";
import Login from "./components/login";
function App() {
  return (
    <Box className="App" display="flex" flexDirection="column">
      <Router>
        <AppProvider>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/app" component={Main} />
            <Router exact path="/register" component={Register} />
            <Router exact path="/login" component={Login} />
          </Switch>
        </AppProvider>
      </Router>
    </Box>
  );
}

export default App;
