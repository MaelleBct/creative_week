import React from 'react';

import styled from 'styled-components';

const FooterStyled = styled.div`
    display : flex;
    justify-content : center;
    height : 324px;
    background-color : #ffb618;
    color : white;
  
`

const ListStyled = styled.ul`
    list-style : none;
`

const Footer = () => (
    <FooterStyled>
        <ListStyled>
            <li><h4>Infos Pratiques</h4></li>
            <li>Comment ça marche ?</li>
            <li>Confiance et sérénité</li>
            <li>Niveaux d'expérience</li>
            <li>Les avis</li>
            <li>Assurance et covoiturage</li>
            <li>Charte de bonne conduite</li>
            <li>Conseils prévention</li>
            <li>Prix du covoiturage</li>
            <li>Foire aux questions</li>
        </ListStyled>

        <ListStyled>
            <li><h4>A propos</h4></li>
            <li>Qui sommes-nous ?</li>
            <li>Presse</li>
            <li>Espace partenaires</li>
            <li>Nous recrutons</li>
            <li>Trajets quotidiens</li>
            <li>Contact</li>
        </ListStyled>

        <ListStyled>
            <li><h4>Mentions légales</h4></li>
            <li>Condiitons générales</li>
            <li>Utilisation des cookies</li>
            <li>Politique et Confidentialité</li>
            <li>Transparence de la plateforme</li>
        </ListStyled>
    </FooterStyled>
  );

export default Footer;