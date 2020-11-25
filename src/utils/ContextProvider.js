import React, { Component } from "react";

export const RefsContext = React.createContext(null);

class ContextProvider extends Component {
  render() {
    return (
      <RefsContext.Provider value={{}}>
        {this.props.children}
      </RefsContext.Provider>
    );
  }
}

export default ContextProvider;
