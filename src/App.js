import React from 'react';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';

function myapp() {
  return (<>   <Navbar title="sans" abouttitle="aboutme" />
  <div className='container'>  <TextForm heading ="Convert Text Styling"/></div>
</>

  );
 
}

export default myapp;
