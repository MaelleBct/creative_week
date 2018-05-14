import React from 'react';

import styled from 'styled-components';

const MapStyled = styled.div`
    margin-top : 20px;
`

const Map = () =>{
    return(
        <MapStyled>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3768.5827733007145!2d-1.6342940518549602!3d48.094985963488284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srestaurants+rennes!5e0!3m2!1sfr!2sfr!4v1525942178086" width="100%" height="990" frameborder="0" allowfullscreen></iframe>
        </MapStyled>
    )
}

export default Map;