import React, { Component } from "react";
import Particles from 'react-particles-js';
import "./App.css";


import Register from './Components/Register/Register';
import Signin from './Components/Signin/Signin';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';
import Work from './Components/Work/Work';


const particlesOptions = {
  particles : {
      number : {
          value : 360,
          density : {
              enable : false,
          }
      }, 
      size : {
          value : 8,
          random : true,
          anim : {
              speed : 4,
              size_min : 0.3
          }
      },
      line_linked : {
          enable : false
      },
      move : {
          random : true,
          speed : 5,
          direction : "bottom",
          out_mode : "out"
      }
  },
  interactivity: {
      events : {
           onclick : {
              enable : true,
              mode : "repulse"
          }
      },
       modes : {
          repulse : {
              distance : 300,
              duration : 4
          }
      }
  }
}



class App extends Component {
  constructor(){
    super();
    this.state ={  
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  } 
  
  
  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    }else if(route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const {isSignedIn} = this.state;
    return (
      <React.Fragment>
      <div className="App">
                  <Particles className="particles" params={particlesOptions}/>
                  <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                 {this.state.route === 'home'
                  ? <div>
                  <Logo/>
                  <Work/>
                 </div>
                 :(
                  this.state.route === 'signin'
                  ?<Signin onRouteChange={this.onRouteChange}/>
                  :<Register onRouteChange={this.onRouteChange}/>
                  )
                 }   

                 </div>
</React.Fragment>
    
    );
  }
}

export default App;