import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styled from 'styled-components';

import Home from '../Components/Home';
import Inscription from '../Components/Inscription';
import ConnexionMonCompte from '../Components/ConnexionMonCompte';
import NouvelleAnnonce from '../Components/NouvelleAnnonce';
import firebase, { auth, provider } from '../firebase.js';


const HeaderStyled = styled.div`
  background-color : #ffb618;
  display : flex;
  justify-content : flex-end;
`

const ListLogoStyled = styled.ul`
  list-style:none;
  position : absolute;
  left : 0;
`

const ListMenuStyled = styled.ul`
  list-style:none;
  display : flex;

`

const ItemListStyled = styled.li`
  margin-right : 15px;
  display:inline-block
`
const ImgStyled = styled.img`
  width:40px;
  heigth:40px;
  margin-right:15px;
  border-radius:50px;
`

const accueil_lien = {
  color : `white`,
  textDecoration : `none`,
}

const accueil_lien_proposer_meet = {
  color : `white`,
  textDecoration : `none`,
  border : `2px solid white`,
}
class Header extends Component{
    constructor(){
    super();
    this.login = this.login.bind(this); // <-- add this line
    this.logout = this.logout.bind(this); // <-- add this line
    this.state = {
      currentItem:'',
      username:'',
      item:[],
      user:null
    }
  }

render () {
	 return (
  <Router>
    <div>
      <HeaderStyled>
        <ListLogoStyled>
        <li>
          <Link style={accueil_lien} to="/">Home</Link>
        </li>
        </ListLogoStyled>
      <ListMenuStyled>
          {this.state.user ?
          <div>
          <ItemListStyled>
          <Link style={accueil_lien_proposer_meet} to="/proposer_meet">Proposer un meet</Link>
          </ItemListStyled>
          <Link style={accueil_lien} to="">
          <ItemListStyled>
          <li onClick={this.logout}>Log Out</li>
          </ItemListStyled>
          </Link>
          <ItemListStyled>
              <div className='user-profile' onClick={this.displayMenu}>
                <ImgStyled src={this.state.user.photoURL}/>
              </div>
          </ItemListStyled>
          </div>        
          :
          <button onClick={this.login}>Log In
          	</button> 
        }
      </ListMenuStyled>
     
      
      </HeaderStyled>      

      <Route exact path="/" component={Home} />
      <Route path="/proposer_meet" component={NouvelleAnnonce} />
      <Route path="/inscription" component={Inscription} />
      <Route path="/connexion_mon_compte" component={ConnexionMonCompte} />
     
    </div>
  </Router>
	)
}


handleSubmit(e) {

}
logout() {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  }
login() {
  auth.signInWithPopup(provider) 
    .then((result) => {
      const user = result.user;
      this.persist(user);
      this.setState({
        user
      });
    });
  
}

persist(user){
	console.log("i'm persisted");
  const itemsRef = firebase.database().ref('covoitureurs');
  const item = {
    covoitureurEmail: user.email,
    covoitureurName: user.displayName,
  }
  itemsRef.push(item);
}

componentDidMount() {
  auth.onAuthStateChanged((user) => {
    if (user) {
      this.setState({ user });
    } 
  });
}
}



export default Header;