import React, { Component } from 'react';
import './App.css';
import 'tachyons'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>{/*
      <FaceRecognition/>*/}
      </div>
    );
  }
}



export default App;
