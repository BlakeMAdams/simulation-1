import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      superheroes: [],
      name: '',
      power: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3010/api/getsuperheroes').then(response => {
      this.setState({
        superheroes: response.data
      })
      console.log(this.state.superheroes)
    })

    this.handleSuperheroName = this.handleSuperheroName.bind(this)
    this.handleSuperheroPower = this.handleSuperheroPower.bind(this)
    this.addNewSuperhero = this.addNewSuperhero.bind(this)
  }

  handleSuperheroName(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleSuperheroPower(event) {
    this.setState({
      power: event.target.value
    })
  }

  addNewSuperhero() {
    var hero = {
      name: this.state.name,
      power: this.state.power
    }
    axios.post('http://localhost:3010/api/addsuperhero', hero).then(response => {
      console.log(response.data)
      axios.get('http://localhost:3010/api/getsuperheroes').then(response => {
        this.setState({
          superheroes: response.data
        })
      })
  })
}

 //--------------------------------------------

//Below is another way to have the data displayed immediately after it is posted to your database instead of doing a second axios.get like was done above. 

  // addNewSuperhero() {
  //   var hero = {
  //     name: this.state.name,
  //     power: this.state.power
  //   }
  //   axios.post('http://localhost:3010/api/addsuperhero', hero).then((res) => {
  //     if(res.status === 200){
  //       this.setState({
  //         superheroes: [...this.state.superheroes, hero]
  //       })
  //     }
  //   })
  // }


  //--------------------------------------------

  render() {

    var heroes = this.state.superheroes.map((hero, i) => {
      return (
        <div key={i}>
          <h2> { hero.name } </h2>
          <h3> { hero.power } </h3>
        </div>
      )
    })

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input placeholder='Name' onChange={ this.handleSuperheroName }/>
        <input placeholder='Power' onChange={ this.handleSuperheroPower }/>
        <button onClick={ this.addNewSuperhero }>Add</button>
        { heroes }
      </div>
    );
  }
}

export default App;