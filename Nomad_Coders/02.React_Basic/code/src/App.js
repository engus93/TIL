import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render : componentWillMount() -> render() -> componentDidMount()

  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> component

  state = {
    
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title: "Iron-Man",
            poster: "https://cnet1.cbsistatic.com/img/keKJmjkTp20tFz62rrzBQyRrPc0=/570x0/2013/10/10/1adcb0d0-4de3-11e3-945a-14feb5ca9861/iron_man_3.jpg"
          },
          {
            title: "Captain-America",
            poster: "https://cdn3.movieweb.com/i/article/lLaIH7FR2SocKiB2YNLM1h9zVumGPM/798:50/Avengers-Infinity-War-Captain-America-Phone-Number-Easter.jpg",
          },
          {
            title: "Thor",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp2lAISIp1nFL0W07MVsr0dA3Fl3PzSNozZne622x6vSXEoRkzpA"
          },
          {
            title: "Spider-Man",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsifsHqRMnIqNDoUORl2QfYbp9zJNsadimTAlPpLa7B7v-HoW3"
          },
          {
            title : "Docktor Strange",
            poster : "http://thumbnail.egloos.net/600x0/http://pds25.egloos.com/pds/201610/26/51/e0098851_58108536ba52e.png"
          }
        ]
      })
    }, 3000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies;
  }

  render() {
    console.log("did render");
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;

