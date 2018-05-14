import React, {Component} from 'react'


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

export default Inscription;























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