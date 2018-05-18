import React from 'react';

import styled from 'styled-components';

import AnnoncesItem from '../Components/AnnoncesItem';

const TitleStyled = styled.h3`
  line-height : 70px;
  background-color : #ffb618;
  text-align : center;
  color : white;
`

const ListeAnnonces = () => {
const restaurants = ["restau1", "restau2", "restau3", "restau4"]

  return (
    <div>
      <TitleStyled>Prochains meets</TitleStyled>

        <AnnoncesItem/>

      
    </div>
  )
}

export default ListeAnnonces;