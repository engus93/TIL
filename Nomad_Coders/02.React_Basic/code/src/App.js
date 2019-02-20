import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const moviesTitles = [
  "Iron-Man",
  "Captain-America",
  "Thor",
  "Spider-Man"
];

const moviesImages = [
  "https://cnet1.cbsistatic.com/img/keKJmjkTp20tFz62rrzBQyRrPc0=/570x0/2013/10/10/1adcb0d0-4de3-11e3-945a-14feb5ca9861/iron_man_3.jpg",
  "https://cdn3.movieweb.com/i/article/lLaIH7FR2SocKiB2YNLM1h9zVumGPM/798:50/Avengers-Infinity-War-Captain-America-Phone-Number-Easter.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp2lAISIp1nFL0W07MVsr0dA3Fl3PzSNozZne622x6vSXEoRkzpA",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsifsHqRMnIqNDoUORl2QfYbp9zJNsadimTAlPpLa7B7v-HoW3"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={moviesTitles[0]} poster={moviesImages[0]} />
        <Movie title={moviesTitles[1]} poster={moviesImages[1]} />
        <Movie title={moviesTitles[2]} poster={moviesImages[2]} />
        <Movie title={moviesTitles[3]} poster={moviesImages[3]} />
      </div>
    );
  }
}

export default App;
