import React from 'react'
import './App.css';

export const App = () => {
  function nomuser(){
  let first_name = prompt('Puis-je avoir votre prénom?')
  if(first_name == 'enide'){
    alert(`Bienvenue ${first_name}`);
  } else {
    alert(`Bienvenue mais vous n'êtes pas la bonne personne`);
  }
  }
  nomuser()
  return (
    <div>
      
    </div>
  )
}


