import React from 'react';
import Photo from './photo';
import Name from './name';
import Pho from './cat.jpg';
import Links from './links';
import './App.css';

function App() {
  return (
    <div className="App">
    <Photo src={Pho}/> 
    <Name firstname="walid" lastname="nasr"/>
      <Links/>
    
    </div>
  );
}

export default App;
