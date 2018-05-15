import React, { Component } from 'react';

import * as firebase from 'firebase';
import config from '../firebase';

class AnnoncesItem extends Component {
  constructor(){
    super();
    firebase.initializeApp(config)
    this.state = {
      loading : true
    }
  }

  componentWillMount() {
    const ref = firebase.database().ref('annonces')

    ref.on('value', snapshot=> {
      this.setState({
        annonces:snapshot.val(),
        loading:false
      })
    })
  }

  render() {
    if(this.state.loading){
      return (<h1>Chargement</h1>)
    }
    const annoncesListe = this.state.annonces.map(annonceItem=> <h2>{annonceItem.nom}</h2>)
    return (
      <div>
        <p>{this.state.annonces[0].titre}</p>
        <p>{this.state.annonces[0].nomCovoitureur}</p>
        <p>{this.state.annonces[0].date}</p>
        <p>{this.state.annonces[0].description}</p>
      </div>
    );
  }
}

export default AnnoncesItem;


//props : attribut d'un parent à un enfant
/*const AnnoncesItem = ({restaurant}) => {
  return (
    <div>
      <li>Une annonce : {restaurant}</li>
    </div>
  )
}

export default AnnoncesItem;*/