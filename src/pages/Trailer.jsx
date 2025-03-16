import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { moviesData } from '../moviesData'
import { Button } from 'react-bootstrap'
import "."
const Trailer = () => {

  const params = useParams()
  const [film,setFilm]=useState({})
  useEffect(()=>{
    setFilm(moviesData.find(el=>el.id === +params.id))

  },[params.id])
const navigate =useNavigate();


  return (
 
    

    <div  className='container'>
      <h3 style={{textAlign:"center"}}>Bande d'annonce</h3>
      <h1>{film.titre}</h1>
      <iframe src={film.trailer} title={film.titre}></iframe>  

<Button onClick={()=>navigate("/")}>Retour</Button>
    </div>
    
  )

}

export default Trailer
