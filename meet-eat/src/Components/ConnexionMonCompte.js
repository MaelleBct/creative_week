import React, {Component} from 'react';

import styled from 'styled-components';
import '../App.css';

import firebase from '../firebase';

const ConnexionStyled = styled.div`
  display:grid;
  grid-template-columns : 1fr 1fr 1fr;
`
const FormStyled = styled.form`
  display:flex;
  flex-direction:column;
`

const FormItemStyled = styled.div`
  grid-column-start : 2;
  background-color : white;
  border-radius : 15px;
  margin-top : 60px;
  margin-bottom : 100px;
  padding : 40px;
  
`

const TitleStyled = styled.h3`
  text-align : center;
  color : #ffb618;
`

const ButtonStyled = styled.button`
  background-color : #ffb618;
  color : white;
  line-height: 30px;
  border-radius : 20px;
  border : 1px solid #ffb618;
  margin-top : 40px;
  margin-left : 40px;
  margin-right : 40px;
`

const InputStyled = styled.input`
  background-color : #e5e5e5;
  border : none;
  color : #ffb618;
  line-height : 30px;
  padding-left : 10px;
`

const LabelStyled = styled.label`
  font-weight : 500;
  margin-bottom : 10px;
  margin-top : 30px;
`

const LinkStyled = styled.a`
    text-align : center;
    color : #ffb618;
`
const HrStyled = styled.hr`
    color : #e5e5e5;
`


class ConnexionMonCompte extends Component {
  constructor() {
    super();
    this.state = {
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
    covoitureurEmail: this.state.email,
    covoitureurPassword: this.state.password,
  }
  itemsRef.push(item);
  this.setState({
    email: '',
    password: '',
  });
}

render (){
  return (
    <div className="inscription_image">
      
    <ConnexionStyled>
      
      <FormItemStyled>
          <TitleStyled>Logo</TitleStyled>
          <FormStyled onSubmit={this.handleSubmit}>
            <LabelStyled>Adresse mail</LabelStyled><InputStyled type="email" name="email" placeholder="Quel est votre email ?" onChange={this.handleChange} value={this.state.email} />
            <LabelStyled>Mot de passe</LabelStyled><InputStyled type="password" name="password" placeholder="Quel est votre mot de passe ?" onChange={this.handleChange} value={this.state.password} />
            <ButtonStyled>Se connecter</ButtonStyled>
            <HrStyled/>
            <LinkStyled>Mot de passe oublié ?</LinkStyled>
          </FormStyled>
      </FormItemStyled>
      
    </ConnexionStyled>
    </div>
    );
  }
}

export default ConnexionMonCompte;