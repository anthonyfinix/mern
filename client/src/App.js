import React from "react";
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import AppProvider from "./contexts/appContext";
import Welcome from "./components/welcome";
import Main from "./components/main";
function App() {
  return (
    <Box className="App" display="flex" flexDirection="column">
      <Router>
        <AppProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/app" component={Main} />
          </Switch>
        </AppProvider>
      </Router>
    </Box>
  );
}

export default App;
