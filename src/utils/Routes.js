import React from "react";
import { Route, withRouter } from "react-router-dom";
import App from "../App";


class Routes extends React.Component {
  
  render() {
        <Route path={"/"} component={App} />
    }
}

export default withRouter(Routes);
