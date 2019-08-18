import React from 'react';
  const Ninjas = ({ninjas, deleteNinjas})=>{

    const ninjasList = ninjas.map(ninja =>{
        if(ninja.age>20){
        return(
          <div className="Ninjas" key= {ninja.id}>
            <div>Name: {ninja.name}</div>
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
            <button className="btn-red" onClick={()=>{deleteNinjas(ninja.id)}}>Delete</button>
          </div>

        )
        }else{
          return null;
        }     
      }      
    );
    return (
      <div className="ninja-list">
        {ninjasList}
      </div>
          
     );
  
  }

export default Ninjas;