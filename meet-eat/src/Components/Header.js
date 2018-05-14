import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styled from 'styled-components';

import Home from '../Components/Home';
import Inscription from '../Components/Inscription';
import ConnexionMonCompte from '../Components/ConnexionMonCompte';

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

const accueil_lien = {
  color : `white`,
  textDecoration : `none`,
}

const accueil_lien_proposer_meet = {
  color : `white`,
  textDecoration : `none`,
  border : `2px solid white`,
}


const Header = () => (
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
          <Link style={accueil_lien} to="/connexion_mon_compte">Mon Compte</Link>
        </ItemListStyled>
      </ListMenuStyled>
     
      
      </HeaderStyled>      

      <Route exact path="/" component={Home} />
      <Route path="/proposer_meet" component={ConnexionMonCompte} />
      <Route path="/inscription" component={Inscription} />
      <Route path="/connexion_mon_compte" component={ConnexionMonCompte} />
     
    </div>
  </Router>
);




export default Header;