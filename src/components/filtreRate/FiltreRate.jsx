import React, { useState } from 'react';
import { Flex, Rate } from 'antd';
//tableau
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

//rechercheRate,SetRcherRate: props passés de app
// isRating, Rate : prpos passé de card
const FiltreRate=({rechercheRate,SetRcherRate,isRating,rate}) => {
  //const [value, setValue] = useState(3);
  return (
    <Flex gap="middle" vertical style={{margin:"2%"}}>
      {isRating ?
      <Rate 
      tooltips={desc}
       onChange={SetRcherRate} 
      value={rechercheRate} />  
      :    
      <Rate disabled   //désactive la gestion des étoiles par l'utilisateur     
      value={rate} />     } 
    </Flex>
  );
};
//default me permet d'appeler FiltreRate avec n'importe quel nom
export default FiltreRate;