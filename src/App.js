import { useState } from 'react';
import './App.css';
import ListFilm from './components/listFilms/ListFilm';
//state
import {moviesData} from './moviesData'
import AddFilm from './components/addFilm/AddFilm';
import  FiltreTitre  from "./components/filtreTitre/FiltreTitre";
import FiltreByRate from "./components/filtreRate/FiltreRate";

function App() {
//hooks avant le return

const [films,Setfilms] = useState(moviesData);
const [rechercheTitre,SetRcherTitre] = useState("");
const [rechercheRate,SetRcherRate] = useState(1);
//ajouter un film a lafin du tableau film 
const rajoutFilm = (newFilm) => {Setfilms
  
// ( ...films) veut dire ouvrir le tableau et ajouter a la fin (push)

  ([...films,newFilm]);
}


  return (
    <div className="App">
      <h1 style={{ color: "red", paddingTop:"20px" }}>Movies App</h1>
      <h4 style={{padding:"20px"}}>Films et séries en illimité, et bien plus</h4>

      {/* envoyer {rechercheTitre,SetRcherTitre} comme props vers le child FiltreTitre*/}


      <FiltreTitre 
      rechercheTitre={rechercheTitre} SetRcherTitre={SetRcherTitre}
      />
      <FiltreByRate 
      rechercheRate={rechercheRate} SetRcherRate={SetRcherRate}
      isRating={true}
      />
      <AddFilm rajoutFilm={rajoutFilm}
      />
{/* l'attribut films à envoyer comme props */}  

      <ListFilm films= {films} rechercheTitre = {rechercheTitre}
      rechercheRate={rechercheRate}
      /> 
        
     
    </div>
  );
}
//le default nous permet d'appeler un componant à deffirente noms
export default App;
