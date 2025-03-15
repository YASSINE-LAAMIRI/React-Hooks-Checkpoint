import React from 'react'
import { Form } from 'react-bootstrap'

//recevoir les props envoyer App.js
const FiltreTitre = ({rechercheTitre,SetRcherTitre}) => {
  return (
    <div className='containe m-4' >
        
        <Form.Control  type="search" placeholder="Rechercher par titre..."  value={rechercheTitre}
        onChange={(e) => SetRcherTitre(e.target.value)}/>

    </div>
  )
}

export default FiltreTitre