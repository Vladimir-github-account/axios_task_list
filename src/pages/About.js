import React  from 'react';
import {Link} from 'react-router-dom';

function About(props) {
  return (
      <>
        <h1>About</h1>
        <Link to='/'>Home</Link>
        <br/>
        <Link to='/contacts'>Contacts</Link>
      </>
  );
}

export default About;