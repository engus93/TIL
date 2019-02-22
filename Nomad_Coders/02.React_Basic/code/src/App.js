import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render : componentWillMount() -> render() -> componentDidMount()

  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> component

  state = {}

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie)
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />
    })
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?quality=3D?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
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

