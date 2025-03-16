import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { moviesData } from '../moviesData'
import { Button } from 'react-bootstrap'

const Description = () => {
// useParams recupurer ce qu'il ya dans URL
  const params = useParams()
  // useState contient le film qui correspond au params
  const [film,setFilm] = useState({})

useEffect(()=>{
  // cherche dans moviesData le film dont l'ID correspond à params.id et le mettre dans film.
  
setFilm(moviesData.find(el => el.id === 
  // + pour covertir en number //
  +params.id))
//L'effet ne s'exécute que lorsque id change.
},[params.id])
// Une fois que le film correspondant est trouvé, il est stocké dans l'état film grâce à


const navigate =useNavigate();
  return (
    <div className='container' >
      <h1>{film.titre}</h1>
      <h3>Description</h3>
      <p>{film.description}</p>  
        
{/* permer de naviguer vers page Home */}

<Button onClick={()=>navigate("/")}>Retour</Button>
    </div>
  )
}

export default Description