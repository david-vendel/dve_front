import React, { Component } from 'react';

export const StackContext = React.createContext({ value: { stack: [] } });

class StackContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                stack: [],
                closeModal: () => {
                    console.log('close modal');
                },
            },
            xHome: 0,
            yHome: 0,
            xKosik: 0,
            yKosik: 0,
            odoslat: false,
            step: 0,
            setStep: this.setStep,
            setXHome: this.setXHome,
            setYHome: this.setYHome,
            setXKosik: this.setXKosik,
            setYKosik: this.setYKosik,
            addNotification: this.addNotification,
            setOdoslat: this.setOdoslat,
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

    setXKosik = (x) => {
        this.setState({
            xKosik: x,
        });
    };
    setYKosik = (y) => {
        this.setState({
            yKosik: y,
        });
    };

    setXHome = (x) => {
        this.setState({
            xHome: x,
        });
    };
    setYHome = (y) => {
        this.setState({
            yHome: y,
        });
    };

    setOdoslat = (y) => {
        this.setState({
            odoslat: true,
        });
    };
    setStep = (step) => {
        this.setState({
            step,
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
                        <div style={{ position: 'relative' }}>
                            <Component
                                {...props}
                                thisIsStack={true}
                                value={value}
                            />
                        </div>
                    );
                }}
            </StackContext.Consumer>
        );
    };
}
