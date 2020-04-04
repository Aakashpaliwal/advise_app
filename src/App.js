import React, { Component } from "react";
import axios from 'axios'
import "./App.css";
// import { Route} from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      advice : ''
    }
  }

  componentDidMount () {
    this.fetchAdvice()
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      const {advice} = response.data.slip
      this.setState({
        advice : advice
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
     
         <div className="app">
           <div className="card">
             <center>
             <h1 className="heading">{this.state.advice}</h1>
             </center>
           {/*}<button className="button" onClick={() => this.fetchAdvice()}><span>GIVE ME ADVICE!</span></button>*/}
           </div>
         </div>
         );
  }
}

export default App;
