import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Clarifai from 'clarifai';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}


// initialize with your api key. This will also work in your browser via http://browserify.org/      
const app = new Clarifai.App({
 apiKey: '71ea42b76fe340ddac5613e213bd3363'
});                

class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',
    }
  }
  onInputChange = (event) =>{
    console.log(event.target.value);
  }
  onButtonSubmit = () =>{
    app.models.predict("71ea42b76fe340ddac5613e213bd3363", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
    },
    function(err) {
      // there was an error
    }
  );
  }
 
  render() {
    return (
      <div className="App">
      <Particles className='particles'
                params={particlesOptions} 
                />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm onInputChange={this.onInputChange}
       onButtonSubmit={this.onButtonSubmit}/>{/*
      <FaceRecognition/>*/}
      </div>
    );
  }
}



export default App;
