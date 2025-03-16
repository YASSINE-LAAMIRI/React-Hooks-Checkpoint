import React from 'react'
import {Card,Button  } from "react-bootstrap";
import "./cardFilm.css"
import Rating from "../filtreRate/FiltreRate";
import { Link } from 'react-router-dom';
const CardFilm = ({films}) => {
  return (
    <div className='carte'>     

      <Card style={{ width: '18rem', height:'100%'}}>
      <Card.Img variant="top" src={films.posterURL} />
      <Card.Body>
        <Card.Title>{films.titre}</Card.Title>
        <Card.Text className="description">
        <Rating isRating={false} rate={films.rate} className="rate"/>
         {/* {films.description} */}
        </Card.Text>

        {/* naviguer vers description du film  */}
        <Link to={`/description/${films.id}`}>

        <Button variant="primary">Détail du Film</Button>
        
        </Link>
{/* trailer */}
        <Link to={`/trailer/${films.id}`}>
        <Button variant="primary">Trailer</Button>
        </Link>

      </Card.Body>

    </Card>


    </div>
  )
}

export default CardFilm