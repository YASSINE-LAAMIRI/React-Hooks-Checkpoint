import App  from './App'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Trailer from './pages/Trailer'
import Erreur from './pages/Erreur'
import Description from './pages/Description'

const Home = () => {
  return (
    <div>
        <Routes>

            <Route path='/'element={<App/>}/>
            <Route path='/description/:id'element={<Description/>}/>
            <Route path='/Trailer/:id'element={<Trailer/>}/>
            {/* path non valide */}
            <Route path='/*'element={<Erreur/>}/>
            
        </Routes>


    </div>
  )
}

export default Home