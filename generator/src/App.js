import React from 'react';
import './App.css';



// import Item from './MyItem'

// class FilmItemRow extends React.Component {
//   render() {
//     return (
//       <li>
//         <a href={this.props.url}>{this.props.url}</a>
//       </li>
//     )
//   }
// }

class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      imageUrl: null,
      name: null,
      species: null,
      gender: null,
      // height: null,
      // homeworld: null,
      // films: [], 
    }
  }
  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 671)
    const url = `https://rickandmortyapi.com/api/character/${randomNumber}`
    fetch(url) 
      .then(response => response.json())
      .then(data => {
        this.setState ({
          imageUrl: data.image,
          name: data.name,
          species: data.species,
          gender: data.gender,

          // height: data.height,
          // homeworld: data.homeworld,
          // films: data.films, 
          loadedCharacter: true,
        })
      })
    
  }
  render() {
    // const movies = this.state.films.map((film, i) => {
    //   return <FilmItemRow key={i} url={film} />
    // })
    return(
      <div>
        <div>
        {
          this.state.loadedCharacter &&
          <div className="content">
            <p><img src={this.state.imageUrl} alt={this.state.name} className="img" /></p>
            <h1>{this.state.name}</h1>
            <p>{this.state.species}</p>
            <p>{this.state.gender}</p>
            {/* <p><a href={this.state.homeworld}>Homeworld</a></p>
            <ul>
              {movies}
            </ul> */}
          </div>
        }
        
        <button
          type="button" 
          onClick={() => this.getNewCharacter()} className="btn"
          >
          Randomize Character
        </button>
        </div>
        {/* <div className="bg-img" style={{backgroundImage: `url(${this.state.imageUrl})`}}></div> */}
      </div> 
    )

  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
