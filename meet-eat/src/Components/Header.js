import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styled from 'styled-components';

import Home from '../Components/Home';
import Inscription from '../Components/Inscription';
import ConnexionMonCompte from '../Components/ConnexionMonCompte';
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
`

const ImgStyled = styled.img`
  width:30px;
  heigth:30px;
  border-radius:50px;
`
const HiddenMenu = styled.ul`
  display:none!important;
  list-style:none;
`

const HiddenDiv = styled.div`
  display:none;
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

           <ItemListStyled>
          <Link style={accueil_lien_proposer_meet} to="/proposer_meet">Proposer un meet</Link>
        </ItemListStyled>
        
        <ItemListStyled>
          <Link style={accueil_lien} to="/inscription">Inscription</Link>
        </ItemListStyled>
        <ItemListStyled>
         
          <div className="wrapper">
          {this.state.user ?
          <Link style={accueil_lien} to="/connexion_mon_compte">
            <div>
              <div className='user-profile' onClick={this.displayMenu}>
                <ImgStyled src={this.state.user.photoURL}/>
              </div>
                <HiddenDiv>
                <HiddenMenu>
                    <li onClick={this.logout}>Log Out</li>
                </HiddenMenu>
                </HiddenDiv>
            </div>
          </Link> 
                         
          :
          <button onClick={this.login}>Log In</button> 
        }
        </div>
        </ItemListStyled>
        </ListMenuStyled>
      </HeaderStyled>      

      <Route exact path="/" component={Home} />
      <Route path="/proposer_meet" component={ConnexionMonCompte} />
      <Route path="/inscription" component={Inscription} />
      <Route path="/connexion_mon_compte" component={ConnexionMonCompte} />  
    </div>
  </Router>
    )
}

handleChange(e) {
  /* ... */
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
      this.setState({
        user
      });
    });
}
componentDidMount() {
  auth.onAuthStateChanged((user) => {
    if (user) {
      this.setState({ user });
    } 
  });
}

displayMenu() {
  const div = document.getElementsByTagName('HiddenDiv');
  console.log(div.style);
    if(div.display=="block"){
      div.display="none";
    }else{
      div.display="block";
    }
}
}
export default Header;