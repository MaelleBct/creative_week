import React, {Component} from 'react';
import ConnexionMonCompte from './ConnexionMonCompte';

import firebase from '../firebase';


class NouvelleAnnonce extends Component{
    constructor(){
        super();
        this.state = {
            date: '',
            description: '',
            nomCovoitureur: '',
            titre: ''
          }
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
        }

        handleChange(e) {
            this.setState({
              [e.target.name]: e.target.value
            });
          }

    handleSubmit(e) {
  e.preventDefault();
  const itemsRef = firebase.database().ref('annonces');
  const item = {
    annonceDate: this.state.date,
    annonceDescription: this.state.description,
    annonceNomCovoitureur: this.state.nomCovoitureur,
    annoncetitre: this.state.titre,
  }
  itemsRef.push(item);
  this.setState({
    date: '',
    description: '',
    nomCovoitureur: '',
    titre: ''
  });
}

    render(){
        return(
            <div>
      <h3>Proposer un meet</h3>
      <form onSubmit={this.handleSubmit}>
  <input type="date" name="date" placeholder="Quel est votre date ?" onChange={this.handleChange} value={this.state.date} />
  <input type="text" name="description" placeholder="Quel est votre description ?" onChange={this.handleChange} value={this.state.description} />
  <input type="text" name="nomCovoitureur" placeholder="Quel est votre nom ?" onChange={this.handleChange} value={this.state.nomCovoitureur} />
  <input type="text" name="titre" placeholder="Quel est votre mot de titre ?" onChange={this.handleChange} value={this.state.titre} />
  
  <button>Inscription</button>
</form>

      </div>
        )
    }

    
}

export default NouvelleAnnonce;


/*
import React, {Component} from 'react';
import ConnexionMonCompte from './ConnexionMonCompte';

import firebase from '../firebase';


class NouvelleAnnonce extends Component{
    constructor(props){
        super(props);
        this.state={proposeRestaurant:"", placeholder:"entrez le nom d'un restaurant", ecrirePrenom:"", placeholder2:"entrez votre prénom"}
    }

    //attrape ce qu'il y a dans input pour le mettre dans le state
    handleChangePrenom(event){
        //console.log('OK', event.target.value);
        this.setState({ecrirePrenom:event.target.value});
    }

    handleChangeRestaurant(event){
        this.setState({proposeRestaurant:event.target.value});
    }

    validationAnnonce(){
        console.log('this.state', this.state);
    }

    render(){
        return(
            <div>
            <form>
                <h3>Je suis : </h3>
                <input 
                type="text" 
                name="prenom"
                onChange={this.handleChangePrenom.bind(this)} 
                placeholder2={this.state.placeholder2}/>

                <h3>Je propose d'aller : </h3>
                <input 
                type="text" 
                name="restaurant"
                onChange={this.handleChangeRestaurant.bind(this)} 
                placeholder={this.state.placeholder}/>

                <button
                type="button"
                onClick={()=>this.validationAnnonce()}>
                OK
                </button>
                
                <p>{this.state.ecrirePrenom}</p>
                <p>{this.state.proposeRestaurant}</p>
                
            </form>
            </div>

            
        )
    }

    
}

export default NouvelleAnnonce;*/