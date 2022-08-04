import React from "react";
import { MovieList } from '../components/MovieList';
import { Search } from "../components/Search";
import { Preloader } from '../components/Preloader'

class Main extends React.Component {
  state = {
    movies: [], 
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=2f9277d6&s=matrix')
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
  }

  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=2f9277d6&s=${str}`)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
  }
 
  render() {
    const { movies } = this.state;
    
    return <main className="container  content">
      <Search searchMovies={this.searchMovies} />
      { movies.length ? (<MovieList movies={this.state.movies} />) : <Preloader /> }
      </main>
    }
}

export { Main };