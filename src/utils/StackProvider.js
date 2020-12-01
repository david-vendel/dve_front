import React, { Component } from 'react';
import { localStorageService } from './../storage/LocalStorageService.ts';

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
            wHome: 0,
            hHome: 0,
            xKosik: 0,
            yKosik: 0,
            odoslat: false,
            step: 0,
            setStep: this.setStep,
            setXHome: this.setXHome,
            setYHome: this.setYHome,
            setWHome: this.setWHome,
            setHHome: this.setHHome,
            setXKosik: this.setXKosik,
            setYKosik: this.setYKosik,
            addNotification: this.addNotification,
            setOdoslat: this.setOdoslat,
            kosikPocet: parseInt(
                localStorageService.get('KOSIK_POCET')
                    ? localStorageService.get('KOSIK_POCET')
                    : 0
            ),
            kosikCena: parseInt(
                localStorageService.get('KOSIK_CENA')
                    ? localStorageService.get('KOSIK_CENA')
                    : 0
            ),
            setKosikPocet: this.setKosikPocet,
            setKosikCena: this.setKosikCena,
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
    setWHome = (w) => {
        this.setState({
            wHome: w,
        });
    };
    setHHome = (h) => {
        this.setState({
            hHome: h,
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
    setKosikPocet = (kosikPocet) => {
        localStorageService.set('KOSIK_POCET', kosikPocet);

        this.setState({
            kosikPocet,
        });
    };
    setKosikCena = (kosikCena) => {
        localStorageService.set('KOSIK_CENA', kosikCena);

        this.setState({
            kosikCena,
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
                        <Component
                            {...props}
                            thisIsStack={true}
                            value={value}
                        />
                    );
                }}
            </StackContext.Consumer>
        );
    };
}
