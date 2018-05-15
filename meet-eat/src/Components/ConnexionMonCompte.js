import React, {Component} from 'react';

import firebase, { auth, provider } from '../firebase.js';

class ConnexionMonCompte extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:'',
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login(){
        console.log("Login foncvtion");
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state);
        
    }

    render() {
        return(
            <div>
                <div>
                    <form>
                        <label>Adresse mail</label>
                        <input type="email" name="email"/>

                        <label>Mot de passe</label>
                        <input type="password" name="password" onChange={this.onChange}/>
                        <input type="submit" value="OK" onClick={this.login}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default ConnexionMonCompte;