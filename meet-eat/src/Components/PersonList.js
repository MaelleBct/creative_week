import React, {Component} from 'react';
import axios from 'axios';

import PersonItem from '../Components/PersonItem';


class PersonList extends Component{

  constructor(props){
    super(props);
    this.state={
        persons: [],
    };
  }

  //Requête Ajax sur fausse url - récupére objet et affiche des personnes
  //requête AJax au moment où le composant va être chargé
  //vidéo : https://www.youtube.com/watch?v=oQnojIyTXb8
  componentWillMount(){
      axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(function(response){
            console.log(response);
        this.setState({persons : response.data});
            console.log(this.state.persons);
        }.bind(this));  
  }

  render(){
    return(
      <div>
        <ul>
            {this.state.persons.map(person=> <li key={person.id}>{person.name}</li>)}
        </ul>
      
    </div>
    )
  }
}

export default PersonList;