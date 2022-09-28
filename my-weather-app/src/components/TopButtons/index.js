// == Import npm
import React from 'react'
// == Import Local

// == Component
function TopButtons() {

// Datas pour la selection des villes
const cities = [
    {
        id: 1,
        name: 'London'
    },
    {
        id: 2,
        name: 'Sydney'
    },
    {
        id: 3,
        name: 'Tokyo'
    },
    {
        id: 4,
        name: 'Toronto'
    },
    {
        id: 5,
        name: 'Paris'
    },
    
]

  return (
    // return de la liste des villes en sélection rapide 
    <div className='flex items-center justify-around my-6'>
    {cities.map((city)=> (
        <button key={city.id} className='text-white text-lg font-medium'>{city.name}</button>
    ))}
    </div>
  )
}

// == Export
export default TopButtons