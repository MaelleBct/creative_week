import React, { Component } from 'react';

import styled from 'styled-components';

import firebase from '../firebase';

const AnnonceItemStyled = styled.li`
  display : grid;
  grid-template-columns : 1fr 2fr;
  border-bottom : 1px solid grey;
  padding-bottom : 30px;
  padding-top : 30px;
`

const CovoitureurStyled = styled.div`
  display : flex;
  flex-direction : row;
  border-right : 1px solid grey;
`

const ParagrapheCovoitureurStyled = styled.div`
  margin-left : 15px;
  margin-right : 15px;
  text-align : center;
`

const TitleContenuStyled = styled.h4`
  text-align : center;
`

const ParagrapheContenuStyled = styled.p`
  text-align : center;
`

const ParagraphePlaceStyled = styled.p`
  text-align : end;
`

const ImageStyled = styled.img`
  border-radius : 100%;
`

class AnnoncesItem extends Component {
  constructor(){
    super();
    this.state = {
    
      annonceDate: '',
      annonceDepart: '',
      annonceDescription: '',
      annonceLieu: '',
      annonceNomCovoitureur: '',
      annoncePlace: '',
      annonces: []
    }
  }

  componentDidMount(){
    const annoncesRef = firebase.database().ref('annonces');
    annoncesRef.on('value', (snapshot) => {
      let annonces = snapshot.val();
      let newState = [];
      for (let annonce in annonces) {
        newState.push({
          id: annonce,
          annonceDate: annonces[annonce].annonceDate,
          annonceDepart: annonces[annonce].annonceDepart,
          annonceDescription: annonces[annonce].annonceDescription,
          annonceLieu: annonces[annonce].annonceLieu,
          annonceNomCovoitureur: annonces[annonce].annonceNomCovoitureur,
          annoncePlace: annonces[annonce].annoncePlace,
        });
      }
      this.setState({
        annonces: newState
      });
    });
  }


  render() {
    
    
    return (
<div>
  <div>
    <ul>
      {this.state.annonces.map((annonce) => {
        return (

          <AnnonceItemStyled key={annonce.id}>
            <CovoitureurStyled>
              <p><ImageStyled src="https://fakeimg.pl/60/"/></p>
              <ParagrapheCovoitureurStyled><p>{annonce.annonceNomCovoitureur}</p><p>{annonce.annonceDate}</p><p>{annonce.annonceDepart}</p></ParagrapheCovoitureurStyled>
            </CovoitureurStyled>



            <div>
              <TitleContenuStyled>{annonce.annonceLieu}</TitleContenuStyled>
              <ParagraphePlaceStyled>{annonce.annoncePlace}</ParagraphePlaceStyled>
              <ParagrapheContenuStyled>{annonce.annonceDescription}</ParagrapheContenuStyled>
            </div>
          </AnnonceItemStyled>
          

          
          
        )
      })}
    </ul>
  </div>
</div>
    );
  }
}


export default AnnoncesItem;
