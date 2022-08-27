import React from 'react'
import Categorie_card from './Categorie_card'

function List_categories({categories}) {
  return (
    <div className='list'>
{categories.map((el)=>(<Categorie_card categorie={el}/>))}
    </div>
  )
}

export default List_categories