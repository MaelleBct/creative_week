import React, {Component} from 'react';


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

export default NouvelleAnnonce;