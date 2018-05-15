import React, {Component} from 'react';

import firebase from '../firebase';


class Inscription extends Component {
  constructor() {
    super();
    this.state = {
      nom: '',
      prenom: '',
      email: '',
      password: ''
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
  const itemsRef = firebase.database().ref('covoitureurs');
  const item = {
    covoitureurNom: this.state.nom,
    covoitureurPrenom: this.state.prenom,
    covoitureurEmail: this.state.email,
    covoitureurPassword: this.state.password,
  }
  itemsRef.push(item);
  this.setState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
  });
}

render (){
  return (
    <div>
      <h3>Inscription</h3>
      <form onSubmit={this.handleSubmit}>
  <input type="text" name="prenom" placeholder="Quel est votre prénom ?" onChange={this.handleChange} value={this.state.prenom} />
  <input type="text" name="nom" placeholder="Quel est votre nom ?" onChange={this.handleChange} value={this.state.nom} />
  <input type="email" name="email" placeholder="Quel est votre email ?" onChange={this.handleChange} value={this.state.email} />
  <input type="password" name="password" placeholder="Quel est votre mot de passe ?" onChange={this.handleChange} value={this.state.password} />
  
  <button>Inscription</button>
</form>

      </div>
    );
  }
}

export default Inscription;





/*import React, {Component} from 'react'


class Inscription extends Component {
constructor(props){
  super(props);
  this.state = {
    prenom: '',
    password: '',
}
}

signUp(){
  console.log('this.state', this.state);
}


render (){
  return (
    <div>
      <h2>Mon compte - Inscription</h2>
    <form>
        <label>Votre prénom</label>
        <input 
        type="text" 
        name="prenom" 
        placeholder="Entrez votre prénom"
        onChange={event => this.setState({prenom:event.target.value})}/>
        <label>Votre mot de passe</label>
        <input 
        type="text" 
        name ="password" 
        placeholder="Entrez votre mot de passe"
        onChange={event => this.setState({password : event.target.value})}/>
        <button 
        type="button"
        onClick={()=>this.signUp()}>GO</button>
    </form>
    </div>
  )
}
}

export default Inscription;*/























/*import React, {Component} from 'react'

class Inscription extends Component {

  //enregistrement de l'inscription
  recordInscription = event => {
    event.preventDefault();
    console.log("Inscription enregistrée");
    //recupération prénom et mot de passe avec référence-->affichage dans console-->faire un objet 
    console.log(this.prenomInput.value);
    console.log(this.passwordInput.value);

  };

  render(){
    return (
      <div>
    <h2>Inscription</h2>
    <div onSubmit={(e) => this.recordInscription(e)}>
    <form>
        <label htmlFor="text">Votre prénom</label>
        <input type="text" required placeholder="Votre prénom" ref={(input) => {this.prenomInput = input}}/>
        <label htmlFor="password">Votre mot de passe</label>
        <input type="password" required placeholder="Votre mot de passe" ref={(input) => {this.passwordInput = input}}/>
        <button type="submit">Go</button>
    </form>
    </div>
    
  </div>
    )
    
  }
}


export default Inscription;*/





















/*import React, {Component} from 'react'

class Inscription extends Component {

  //enregistrement de l'inscription
  recordInscription = event => {
    event.preventDefault();
    console.log("Inscription enregistrée");
    //recupération prénom et mot de passe avec référence-->affichage dans console-->faire un objet 
    console.log(this.prenomInput.value);
    console.log(this.passwordInput.value);

  };

  render(){
    return (
      <div>
    <h2>Inscription</h2>
    <div onSubmit={(e) => this.recordInscription(e)}>
    <form>
        <label htmlFor="text">Votre prénom</label>
        <input type="text" required placeholder="Votre prénom" ref={(input) => {this.prenomInput = input}}/>
        <label htmlFor="password">Votre mot de passe</label>
        <input type="password" required placeholder="Votre mot de passe" ref={(input) => {this.passwordInput = input}}/>
        <button type="submit">Go</button>
    </form>
    </div>
    
  </div>
    )
    
  }
}


export default Inscription;*/