import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

// - Components
import App from "./views/App";
import Login from "./views/Login";
import Reports from "./views/Reports";
import Orders from "./views/Orders";

// - Context
import AuthContext from "./context/AuthContext";

// - API
import AuthAPI from "./api/AuthAPI";

// - Base Theme
import theme from "./configs/theme";

class AppRoute extends Component {
  state = {
    isUserLoggedIn: true
  };

  login = async (username, password) => {
    const response = await AuthAPI.login(username, password);
    console.log({ response });
  };

  render() {
    const { isUserLoggedIn } = this.state;
    const { login } = this;

    return (
      <MuiThemeProvider theme={theme}>
        <AuthContext.Provider
          value={{
            isUserLoggedIn,
            login
          }}
        >
          <Router>
            <React.Fragment>
              <App />

              <Route path="/login" exact component={Login} />
              <Route path="/reports" exact component={Reports} />
              <Route path="/orders" exact component={Orders} />
            </React.Fragment>
          </Router>
        </AuthContext.Provider>
      </MuiThemeProvider>
    );
  }
}

export default AppRoute;
