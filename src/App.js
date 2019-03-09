import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
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
 apiKey: 'f831ec3c4d674790830a07604d0e7611'
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
    app.models.predict("f831ec3c4d674790830a07604d0e7611", 
      "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
      console.log(response)
    },
    function(err) {
      // there was an error
      console.log(err)
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
       onButtonSubmit={this.onButtonSubmit}/>{
      <FaceRecognition/>}
      </div>
    );
  }
}



export default App;
