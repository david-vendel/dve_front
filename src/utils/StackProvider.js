import React, { Component } from "react";

import { Modal } from "./../components/styled-components/stackStyled";
import NewTask from "./../components/NewTask";

export const StackContext = React.createContext({ value: { stack: [] } });

class StackContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        stack: [],
        closeModal: () => {
          console.log("close modal");
        },
        xx: 2,
      },
      yy: 3,
      addNotification: this.addNotification,
    };
  }

  addNotification = (type, headline, text, timeout) => {
    const id = Math.floor(Math.random() * 100000);
    let values = this.state.value;
    values.stack.push({
      id: id,
      headline: headline,
      text: text,
      type: type,
      timeout: timeout,
    });
    this.setState({
      value: values,
    });
    setTimeout(() => {
      this.clearNotification(id);
    }, timeout);
  };

  clearNotification = (id) => {
    let stack = this.state.value.stack;
    stack = stack.filter((s) => s.id !== id);
    this.setState({
      value: { stack: stack },
    });
  };

  render() {
    return (
      <StackContext.Provider value={this.state}>
        {this.props.children}
      </StackContext.Provider>
    );
  }
}

export default StackContextProvider;

export function withStackContext(Component) {
  return function StackComponent(props) {
    return (
      <StackContext.Consumer>
        {(value) => {
          return (
            <div style={{ position: "relative" }}>
              {props.action === "addNewTask" && (
                <Modal>
                  <NewTask
                    userSettings={props.userSettings}
                    changeAction={props.changeAction}
                    value={value}
                  />
                </Modal>
              )}
              <Component {...props} thisIsStack={true} value={value} />
            </div>
          );
        }}
      </StackContext.Consumer>
    );
  };
}
