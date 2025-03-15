import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AddFilm = ({rajoutFilm}) => {
 //*********Bootstrap*******************/   
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //*************************************/ 
  const [titre,setTitle] = useState('');
  const [description,setDescription] =useState('');
  const [rate,setRate] =useState('');
  const [posterUrl,setPosterUrl] =useState('');
const handelAdd = () =>{
  const id = Math.random();

    const newFilm = {id,titre,description,rate,posterUrl};
    rajoutFilm(newFilm);

//vider les inputs
handleClose();
setTitle("");
setDescription("");
setRate("");
setPosterUrl("");
}

  return (
    <div>
{/********* Add film **********/}
        <Button variant="primary" onClick={handleShow}>
        Ajouter un Film
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Un Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Form.Group className="mb-3" >
        {/* <Form.Label>Titre</Form.Label> */}
        <Form.Control type="text" placeholder="Titre du film" value={titre} onChange={(e) => setTitle(e.target.value)}/>
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Description du film" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <Form.Label></Form.Label>
        <Form.Control type="number" placeholder="Rate du film" value={rate} onChange={(e)=>setRate(e.target.value)}/>
        <Form.Label></Form.Label>  
        <Form.Control type="text" placeholder="Url du Poster" value={posterUrl} onChange={(e)=>setPosterUrl(e.target.value)}/>
      </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
    
  )
}

export default AddFilm