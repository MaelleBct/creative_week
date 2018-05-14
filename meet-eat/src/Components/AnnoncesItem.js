import React from 'react'

//props : attribut d'un parent à un enfant
const AnnoncesItem = ({restaurant}) => {
  return (
    <div>
      <li>Une annonce : {restaurant}</li>
    </div>
  )
}

export default AnnoncesItem;