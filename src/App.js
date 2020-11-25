import React, { Component } from "react";
import "./App.css";
import Image from "./components/Image"
import Logo from "./components/Logo"

class App extends Component {

  render() {
    return (
      <div className="App" style={{ position: "relative" }}>
        <div style={{display: "flex", alignItems: "center", width: "100%", borderBottom: "1px solid", position: "fixed", backgroundColor:"white"}}>
            <Logo />
            <div style={{padding: 20, fontSize:30, fontFamily: 'Kalam' }}>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel="stylesheet"/>

                Vítajú vás tu dve bodky.   </div>
        </div>
        <div style={{paddingTop: 206}}>
            <Image />
        </div>
      </div>
    );
  }
}

export default App;
