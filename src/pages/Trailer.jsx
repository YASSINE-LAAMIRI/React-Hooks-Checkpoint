import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { moviesData } from '../moviesData'
import './trailer/trailer.css'
import { Button } from 'react-bootstrap'

const Trailer = () => {

  const params = useParams()
  const [film,setFilm]=useState({})
  useEffect(()=>{
    setFilm(moviesData.find(el=>el.id === +params.id))

  },[params.id])
const navigate =useNavigate();


  return (
 
    

    <div className='trailer' >
      <h3 style={{textAlign:"center", color:"red"}}>Bande Annonce</h3>
      {/* <h1>{film.titre}</h1> */}
     
      <iframe  allowFullScreen  width="1000" height="400" src={film.trailer} title={film.titre}    ></iframe>  
     
<br />
<Button  className="d-block mx-auto" variant="danger" size="lg"  onClick={()=>navigate("/")}>Retour</Button>
    </div>
    
  )

}

export default Trailer
