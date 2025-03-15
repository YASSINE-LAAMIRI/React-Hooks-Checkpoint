import React from 'react'
import CardFilm from '../cardFilm/CardFilm'
import "./listFilm.css"

const ListFilm = ({films,rechercheTitre,rechercheRate}) => {
  return (
    <div className='listF'>
      {/* une card pour chaque film */}
      {films
      // filtre selon le nom 
        .filter((films) =>
          films.titre.toUpperCase().includes(rechercheTitre.toUpperCase())
        //filtre selon rate
          && films.rate>=rechercheRate

      )
        .map((films)=>(
        <CardFilm films={films} key={films.id}/>
        ))}

    </div>
  );
};

export default ListFilm