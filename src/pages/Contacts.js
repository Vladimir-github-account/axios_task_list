import React  from 'react';
import {Link} from 'react-router-dom';

function Contacts(props) {
  return (
      <>
        <h1>Contacts</h1>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <br/>
      </>
  );
}

export default Contacts;