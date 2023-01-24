import React from 'react';
import DeleteUser from './DeleteUser';
import EditDetails from './EditDetails';

function Card({person}) {
  return(    
      <div>
        <ul key = {person.id}>{person.id} {person.name}
            <button onClick={()=><EditDetails detail = {person} />}>Edit</button>
            <button onClick= {()=><DeleteUser detail = {person}/>}>Delete</button>
        </ul>        
      </div>
    
  );
}

export default Card;