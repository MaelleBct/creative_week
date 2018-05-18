import React, {Component} from 'react';
import ConnexionMonCompte from './ConnexionMonCompte';

import styled from 'styled-components';
import Header from '../Components/Header';
import firebase, { auth, provider } from '../firebase';

const TitleStyled = styled.h3`
    text-align : center;
    text-transform : uppercase;
    color : #FFB618;
`

const FormulaireStyled = styled.form`
    background-color : #F8F8F8;
    height : 100%;
`

 const FormulaireMeetStyled = styled.div`
    display : flex;
    justify-content :center;
`

const DescriptionStyled = styled.p`
    text-align : center;
`

const ParagrapheButtonStyled = styled.p`
    text-align : center;
`


const ButtonStyled = styled.button`
    background-color : white;
    color : #FFB618;
    line-height : 60px;
    border : 2px solid #FFB618;
    padding-left : 46px;
    padding-right : 46px;
`


class NouvelleAnnonce extends Component{
    constructor(){
        super();
        
        const user = new Header;
        this.state = {
            restaurant: '',
            lieu: '',
            date: '',
            place: '',
            description: '',
            user:'',
          }
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
        }

        handleChange(e) {
            this.setState({
              [e.target.name]: e.target.value
            });    
          }

    handleSubmit(e,login) {
  e.preventDefault();
  const itemsRef = firebase.database().ref('annonces');
  const item = {
    annonceRestaurant: this.state.restaurant,
    annonceLieu: this.state.lieu,
    annonceDate: this.state.date,
    annoncePlace: this.state.place,
    annonceDescription: this.state.description,
    annonceUser:this.state.user.displayName
  }

  itemsRef.push(item);
  this.setState({
    restaurant: '',
    lieu: '',  
    date: '',
    place: '',
    description: '',
  });
}

    render(){
        return(
            <div>
                <div>
                <TitleStyled>Proposer votre meet</TitleStyled>
                    <FormulaireStyled onSubmit={this.handleSubmit}>
                        

                        <FormulaireMeetStyled>
                            <div>
                                <p><label>Restaurant</label><input type="text" name="restaurant" placeholder="Restaurant" onChange={this.handleChange} value={this.state.restaurant} /></p>
                                <p><label>Lieu</label><input type="text" name="lieu" placeholder="Quel est votre lieu ?" onChange={this.handleChange} value={this.state.lieu} /></p>
                            </div>

                            <div>
                                <p><label>Date + heure de départ</label><input type="date" name="date" placeholder="Quel est votre date ?" onChange={this.handleChange} value={this.state.date} /></p>
                                <p><label>Places</label><input type="number" name="place" placeholder="Quel est votre nombre de places ?" onChange={this.handleChange} value={this.state.place} /></p>
                            </div>
                        </FormulaireMeetStyled>

                        <DescriptionStyled><input type="text" name="description" placeholder="Quel est votre description ?" onChange={this.handleChange} value={this.state.description} /></DescriptionStyled>
                        <ParagrapheButtonStyled><ButtonStyled>Créer un meet</ButtonStyled></ParagrapheButtonStyled>
                    </FormulaireStyled>
                </div>
            </div>
 
        )
    }

    
}

export default NouvelleAnnonce;




/*
<AnnonceStyled>
                    
                </AnnonceStyled>

                <AnnonceStyled>
                    
                </AnnonceStyled>
*/


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