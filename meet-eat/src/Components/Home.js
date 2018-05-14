import React, {Component} from 'react';

import styled from 'styled-components';
import '../App.css';

import Bienvenue from '../Components/Bienvenue';
import Footer from '../Components/Footer';
import ListeAnnonces from '../Components/ListeAnnonces';
import Map from '../Components/Map';

import PersonList from '../Components/PersonList';

const HomeStyled = styled.div`
  display : grid;
  grid-template-columns : 1fr 1fr;
  grid-column-gap : 34px;
  margin-bottom : 40px;
`

class Home extends Component{

  render(){
    return(
      <div>
        <div className="bienvenue_image"><Bienvenue/></div>
      

      <HomeStyled>
          <Map/>
          <ListeAnnonces/>
          

      </HomeStyled>
      <Footer/>
    </div>
    )
  }
}

export default Home;